import { Component } from "react";

export class Feedback extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    }
    handleClickGood() {
        this.setState((prevState) => {
            return {
                good: prevState.good + 1,
            }
        })
    }
    handleClickNeutral() {
        this.setState((prevState) => {
            return {
                neutral: prevState.neutral + 1,
            }
        })
    }
    handleClickBad() {
        this.setState((prevState) => {
            return {
                bad: prevState.bad + 1,
            }
        })
    }

    render() {
        return (
            <div>
                <button>good</button>
                <button>neutral</button>
                <button>bad</button>
            </div>
        )
    }




}