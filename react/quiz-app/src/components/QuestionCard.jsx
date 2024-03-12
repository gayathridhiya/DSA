import React from "react";
import QuestionAndChoice from './QuestionAndChoice';
import '../styles/QuestionCard.css'

export default function QuestionCard(props) {
    const {data} = props;
    return (
    <> 
        <div className="qnCard" >
            Here we go - Questions
            {
                data && data.map((qn, idx) => 
                {
                    return(<QuestionAndChoice key={idx} question={qn}/>)
                }
                )
            }
        </div>
    </>
    )
}