import React from "react";
import style from "./FeedbackOptions.module.css";

export const Feedback = ({ options, handleClickUpdate }) => {
    return (
        <div>
            <div className={style.buttonRow}>
                {options.map(option => (
                    <button key={option} className={`${style.col} ${style[option]}`} onClick={() => handleClickUpdate(option)}>
                        {option}
                    </button>
                ))}
            </div>
        </div>
    );
}

