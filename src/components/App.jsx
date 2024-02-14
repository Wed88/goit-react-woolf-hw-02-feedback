import React, { Component } from 'react';
import Section from './Section/Section';
import Statistics from './Statistics/Statistics ';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Notification from './Notification/Notification';

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  appendFeedback = option => {
    this.setState(prevState => {
      return { [option]: prevState[option] + 1 };
    });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = total => {
    return total ? Math.round((this.state.good * 100) / total) : 0;
  };

  render() {
    const options = Object.keys(this.state);
    const appendFeedback = this.appendFeedback;
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage(total);

    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions options={options} onLeaveFeedback={appendFeedback} />
          {total > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </>
    );
  }
}
