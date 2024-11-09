import React from 'react';
import Option from './Option';
import './Question.css';

function Question({ question, questionIndex, handleAnswerOptionClick, lock }) {
    return (
        <div className="question-card">
            <h2>{question.questionText}</h2>
            <Option
                options={question.options}
                questionIndex={questionIndex}
                handleAnswerOptionClick={handleAnswerOptionClick}
                lock={lock}
            />
        </div>
    );
}

export default Question;