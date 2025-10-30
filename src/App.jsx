// src/App.jsx

import React, { useState } from 'react';
import Header from './components/Header';
import WeekSelector from './components/WeekSelector';
import StudyMaterial from './components/StudyMaterial';
import './App.css';

// Step 1: Central data file se saara content import karna
import { allWeeksData } from './data';

function App() {
  // Step 2: State manage karna ki kaun sa week selected hai
  const [selectedWeek, setSelectedWeek] = useState(1);
  
  // Step 3: Data object se total weeks ki list taiyar karna (e.g., [1, 2, 3...])
  // Yeh dynamic hai, aap jitni data files banayenge, list utni lambi ho jayegi
  const totalWeeks = Array.from({ length: 12 }, (_, i) => i + 1); // For all 12 weeks
  // Alternative, if you want it to be based only on created data files:
  // const totalWeeks = Object.keys(allWeeksData).map(Number);

  // Step 4: Jab user kisi week par click karega to yeh function state update karega
  const handleWeekSelect = (week) => {
    setSelectedWeek(week);
  };

  // Step 5: Selected week ka content object data me se nikalna
  const currentWeekContent = allWeeksData[selectedWeek];

  return (
    <div className="app-container">
      {/* 
        Step 6: Header ko ek wrapper div me daala gaya hai taaki 
        CSS Grid me iski position ko aasaani se control kiya ja sake.
      */}
      <div className="app-header-wrapper">
        <Header />
      </div>

      {/* 
        Step 7: WeekSelector component ko weeks ki list, current selected week, 
        aur click handler function pass kiya ja raha hai.
      */}
      <WeekSelector
        weeks={totalWeeks}
        selectedWeek={selectedWeek}
        onWeekSelect={handleWeekSelect}
      />

      {/* 
        Step 8: Main content area jahan study material dikhega. 
        Isko 'overflow-y: auto' diya gaya hai taaki sirf yeh area scroll ho.
      */}
      <main className="main-content">
        {/* 
          Step 9: React.Fragment ko 'key' prop diya gaya hai. Jab bhi 'selectedWeek'
          badlega, React is component ko dobara render karega, jisse humara 
          CSS fade-in animation har baar trigger hoga.
        */}
        <React.Fragment key={selectedWeek}>
          <StudyMaterial content={currentWeekContent} />
        </React.Fragment>
      </main>
    </div>
  );
}

export default App;