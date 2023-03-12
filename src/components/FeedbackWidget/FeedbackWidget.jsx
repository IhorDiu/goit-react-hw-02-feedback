import { Component } from 'react';

export class FeedbackWidget extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  render() {
    return (
      <div className="Feedback">
        <h2 className="TitleFeedback">Please leave feedback</h2>
        <button type="button">Good</button>
        <button type="button">Neutral</button>
        <button type="button">Bad</button>

        <h2 className="Statistics">Statistics</h2>

        <span>Good: {}</span>
        <span>Neutral: {}</span>
        <span>Bad: {}</span>
      </div>
    );
  }
}


