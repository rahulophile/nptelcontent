// src/components/StudyMaterial.jsx
import React from 'react';
import './StudyMaterial.css';

const StudyMaterial = ({ content }) => {
  if (!content) {
    return (
      <div className="study-material-container">
        <h2 className="week-main-title">Content Coming Soon!</h2>
        <p>This week's study material will be updated shortly.</p>
      </div>
    );
  }

  return (
    <div className="study-material-container">
      <h2 className="week-main-title">{content.mainTitle}</h2>
      
      {content.topics.map((topic, index) => (
        <section key={index} className="topic-section">
          <div className="topic-header">
            <h3 className="topic-title">{topic.title}</h3>
            {/* Yahan hum label ko display kar rahe hain */}
            {topic.label && (
              <span 
                className={`topic-label ${topic.label === 'Important' ? 'label-important' : 'label-less-important'}`}
              >
                {topic.label}
              </span>
            )}
          </div>
          {topic.description && <p className="topic-description">{topic.description}</p>}
          
          {topic.subSections.map((sub, subIndex) => (
            <div key={subIndex} className="sub-section">
              <h4 className="sub-section-title">{sub.title}</h4>
              
              {sub.isList ? (
                  <ul>{sub.content.map((point, pIndex) => <li key={pIndex}>{point}</li>)}</ul>
              ) : (
                  sub.content.map((paragraph, pIndex) => <p key={pIndex}>{paragraph}</p>)
              )}

              {sub.listItems && (
                  <ul>{sub.listItems.map((item, itemIndex) => <li key={itemIndex}>{item}</li>)}</ul>
              )}
              
              {sub.example && (
                <div className="example-box">
                  <strong>Real-life Example:</strong> {sub.example}
                </div>
              )}
            </div>
          ))}
        </section>
      ))}
    </div>
  );
};

export default StudyMaterial;