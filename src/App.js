import React, { Component } from 'react';
import FeedbackSection from './feedbackSection';
import FeedbackOptions from './feedbackOptions';
import Statistics from './statistics';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  handleIncrement = event => {
    console.log('Нажатие на кнопку');
    console.log(event);
  };
  render() {
    return (
      <FeedbackSection>
        <FeedbackOptions onIncrement={this.handleIncrement} />
        <Statistics />
      </FeedbackSection>
    );
  }
}
export default App;
