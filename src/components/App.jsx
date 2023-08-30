import React, { useState } from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Notification from './Notification/Notification';
import Section from './Section/Section';
import Statistics from './Statistics/Statistics';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const total = good + neutral + bad;
  const calcPositivePercentage =
    total === 0 ? 0 : Math.round((good / total) * 100);

  const handleClickFeedback = key => {
    switch (key) {
      case 'good':
        setGood(prev => prev + 1);
        break;
      case 'neutral':
        setNeutral(prev => prev + 1);
        break;
      case 'bad':
        setBad(prev => prev + 1);
        break;
      default:
        break;
    }
  };

  const options = ['good', 'neutral', 'bad'];
  return (
    <>
      <Section title={'Please, leave feedback'}>
        <FeedbackOptions
          clickFeedback={handleClickFeedback}
          options={options}
        />
      </Section>
      <Section title={'Statistics'}>
        {total === 0 ? (
          <Notification messege="There is no feedback" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={calcPositivePercentage}
          />
        )}
      </Section>
    </>
  );
};
