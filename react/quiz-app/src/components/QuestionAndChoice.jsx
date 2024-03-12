import React, { useState } from "react";
import '../styles/QuestionCard.css'

export default function QuestionAndChoice(props) {
    const [count, setCount] = useState(0);
    const {question} = props;
    const clickOptionHandler = (op) =>{
        if(op){
            setCount(count+1)
            alert(`You have selected ${count} correctly`)
        }else{
            alert("Wrong answer, Try again")
        }
    }
    return (
        <div>
            <div className="questionText">{question.question}</div>
            <div className="answerOptions">
                { question && question.answerOptions.map( (options, idx) => 
                <button key={idx} className="optionBTN" onClick={() => clickOptionHandler(options.isCorrect)}>{options.text}</button>
                )}
            </div>
        </div>
    )
}