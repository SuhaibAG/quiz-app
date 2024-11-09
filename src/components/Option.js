import React from 'react';
import './Option.css';

function Option({ options, questionIndex, handleAnswerOptionClick, lock }) {
    return (
        <div className="options-container">
            <ul className="options-list">
                {options.map((option, index) => (
                    <li key={index} className="option-item">
                        <label>
                            <input
                                type="radio"
                                name={`option-${questionIndex}`}
                                value={option.answerText}
                                onChange={() => handleAnswerOptionClick(questionIndex, option.isCorrect)}
                                disabled = {lock}
                            />
                            {option.answerText}
                        </label>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Option;