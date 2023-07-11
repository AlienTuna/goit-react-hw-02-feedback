import React from "react";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Statistics } from "./Statistics/Statistics";

import {Container} from "./App.styled";

export class App extends React.Component {

    static propTypes = {}

    state = {
        good: 0,
        neutral: 0,
        bad: 0
    }

    onBtnClick = (actionType) => {
        
        this.setState(prevState => ({
            [actionType]: prevState[actionType] + 1,
        }))
    }

    countTotalFeedback = () => {
        const total = Object.values(this.state).reduce((prev, nmbr) => prev + nmbr);
        return total
    }
    countPositiveFeedbackPercentage = () => {
        const positive = Math.floor((this.state.good * 100) / this.countTotalFeedback());
        return positive;
    }

    render() {
        return (
            <Container>
                <FeedbackOptions 
                options={this.state}
                onBtnClick={this.onBtnClick}
                />
                <Statistics 
                rates={this.state}
                total={this.countTotalFeedback()}
                positive={this.countPositiveFeedbackPercentage()}
                />
            </Container>
        )
    }

}

export default App;