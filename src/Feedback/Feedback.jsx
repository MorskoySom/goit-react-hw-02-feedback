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
            </div>
        )
    }
}