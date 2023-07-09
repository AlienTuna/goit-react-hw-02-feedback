import React from "react";
import { Controls } from "../Controls/Controls";
import { Stats } from "../Stats/Stats";

import {Container} from "./FeedbackApp.styled";

class FeedbackApp extends React.Component {
    // static defaultState = {
    //     initVal: 0,
    // }

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

    getTotal = () => {
        const total = Object.values(this.state).reduce((prev, nmbr) => prev + nmbr);
        return total
    }
    getPositive = () => {
        const positive = Math.floor((this.state.good * 100) / this.getTotal());
        return positive;
    }

    render() {
        return (
            <Container>
                <Controls 
                options={this.state}
                onBtnClick={this.onBtnClick}
                />
                <Stats 
                rates={this.state}
                total={this.getTotal()}
                positive={this.getPositive()}
                />
            </Container>
        )
    }

}

export default FeedbackApp;