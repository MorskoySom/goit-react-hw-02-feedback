import style from "./Statistics.module.css"


export const Statistics = ({ good, neutral, bad }) => {
    const countTotalFeedback = () => {
        const total = good + neutral + bad;
        return total;
    }

    const countPositiveFeedbackPercentage = () => {
        const percent = (good / (good + neutral + bad)) * 100;
        return percent > 0 ? ((good / (good + neutral + bad)) * 100).toFixed(2) : 0;
    }

    return (
        <div>
            <h2 className={style.titleText}>
                Statistics
                <p className={style.text}>Good : {good}</p>
                <p className={style.text}>Neutral : {neutral}</p>
                <p className={style.text}>Bad : {bad}</p>
                <p className={style.text}>Total : {countTotalFeedback()}</p>
                <p className={style.text}>Percentage : {countPositiveFeedbackPercentage()} %</p>
            </h2>
        </div>
    );
}