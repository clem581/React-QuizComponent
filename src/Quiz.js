import React, {Component} from 'react'

let quizData = require('./quiz_data.json')

class Quiz extends Comment{
    state = {
        quiz_position: 1
    }
    render(){
        return(
            <div>
                <div className='Quizquestion'>
                    {quizData}
                </div>
            </div>
        )
    }
}