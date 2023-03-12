// import { FeedbackWidget } from './FeedbackWidget/FeedbackWidget';
import { Component } from 'react';
import { Section } from './Section/Section';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {};

  countPositiveFeedbackPercentage = () => {};

  render() {
    return (
      <div className="FeedbackWidget">
        <h1>Feedback Form</h1>

        <Section title="Please leave your feedback">
          <button type="button">Good</button>
          <button type="button">Neutral</button>
          <button type="button">Bad</button>
        </Section>

        <Section title="Statistics">
          <span>Good: {}</span>
          <span>Neutral: {}</span>
          <span>Bad: {}</span>
          <span>Total: {}</span>
          <span>Positive feedback: {}</span>
        </Section>
      </div>
    );
  }
}
