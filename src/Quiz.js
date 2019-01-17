import React, {Component} from 'react'

let quizData = require('./quiz_data.json')

class Quiz extends React.Component{
    state = {
        quiz_position: 1
    }
    render(){
        return(
            <div>
                <div className='Quizquestion'>
                    {quizData.quiz_questions[0].instruction_text}                    
                </div>
            </div>
        )
    }
}

export default Quiz