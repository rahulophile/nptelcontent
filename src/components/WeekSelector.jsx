// src/components/WeekSelector.jsx
import React from 'react';
import './WeekSelector.css'; // Is line ka hona zaroori hai

const WeekSelector = ({ weeks, selectedWeek, onWeekSelect }) => {
  return (
    <nav className="week-selector-nav">
      <div className="week-selector">
        {weeks.map((week) => (
          <button
            key={week}
            className={`week-tab ${selectedWeek === week ? 'active' : ''}`}
            onClick={() => onWeekSelect(week)}
            aria-pressed={selectedWeek === week}
          >
            {/* 
              KEY CHANGE: "Week" aur number ko alag-alag span me daala hai 
              taaki CSS se inko upar-neeche kar sakein.
            */}
            <span className="tab-text">Week</span>
            <span className="tab-number">{week}</span>
          </button>
        ))}
      </div>
    </nav>
  );
};

export default WeekSelector;