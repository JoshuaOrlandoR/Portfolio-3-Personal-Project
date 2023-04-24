import React from 'react';
import './Goals.css';

const Goals = () => {
  const goals = [
    {
      year: 'Year 1',
      goal: 'Further my knowledge and expertise in web development',
    },
    {
      year: 'Year 2',
      goal: 'Cement my career in the web development field',
    },
    {
      year: 'Year 3',
      goal: 'Develop software/a web app that benefits people',
    },
  ];

  return (
    <div className="goals-container">
      <h2 className="goals-title">Goals</h2>
      <blockquote>
        "In a growth mindset, challenges are exciting rather than threatening.
        So rather than thinking, oh, I'm going to reveal my weaknesses, you
        say, wow, here's a chance to grow." - Carol S. Dweck
      </blockquote>
      <div className="goals-timeline">
        {goals.map((item, index) => (
          <div key={item.year} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
            <div className="timeline-icon"></div>
            <div className="timeline-content">
              <div className="goal-year">{item.year}</div>
              <div className="goal-description">{item.goal}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Goals;
