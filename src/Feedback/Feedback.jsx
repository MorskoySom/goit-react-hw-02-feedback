import { Component } from "react";
import style from "./Feedback.module.css"

export class Feedback extends Component {
    constructor(props) {
        super(props);
        this.state = {
            good: 0,
            neutral: 0,
            bad: 0,
        };
    }

    handleClickUpdate = (type) => {
        this.setState((prevState) => {
            return {
                [type]: prevState[type] + 1,
            }
        })
    }
    handleClickGood = () => {
        this.handleClickUpdate('good');
    }

    handleClickNeutral = () => {
        this.handleClickUpdate('neutral');
    }
    handleClickBad = () => {
        this.handleClickUpdate('bad');
    }
    countTotalFeedback = () => {
        const total = this.state.good + this.state.neutral + this.state.bad;
        return total;
    }
    countPositiveFeedbackPercentage = () => {
        const percent = (this.state.good / (this.state.good + this.state.neutral + this.state.bad)) * 100;
        return percent > 0 ? ((this.state.good / (this.state.good + this.state.neutral + this.state.bad)) * 100).toFixed(2) : 0;
    }

    render() {
        return (
            <div>
                <h1 className={style.titleText}>
                    Please leave feedback
                </h1>
                <div className={style.buttonRow}>
                    <button onClick={this.handleClickGood}>good</button>
                    <button onClick={this.handleClickNeutral}>neutral</button>
                    <button onClick={this.handleClickBad}>bad</button>
                </div>
                <h2 className={style.titleText}>
                    Statistics
                    <p className={style.text}>Good : {this.state.good}</p>
                    <p className={style.text}>Neutral : {this.state.neutral}</p>
                    <p className={style.text}>Bad : {this.state.bad}</p>
                    <p className={style.text}>Total : {this.countTotalFeedback()}</p>
                    <p className={style.text}>Percentage : {this.countPositiveFeedbackPercentage()} %</p>
                </h2>
            </div>
        )
    }
}