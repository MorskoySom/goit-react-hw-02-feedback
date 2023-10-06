import React from "react";
import style from "./Feedback.module.css";

export const Feedback = ({ good, neutral, bad, handleClickUpdate }) => {
    return (
        <div>
            <div className={style.buttonRow}>
                <button onClick={() => handleClickUpdate('good')}>good</button>
                <button onClick={() => handleClickUpdate('neutral')}>neutral</button>
                <button onClick={() => handleClickUpdate('bad')}>bad</button>
            </div>
        </div>
    )
}


