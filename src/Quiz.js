import React, { Component } from 'react'
import QuizQuestion from './QuizQuestion.js'
import QuizEnd from './QuizEnd.js'

let quizData = require('./quiz_data.json')

class Quiz extends Component{
    constructor(props)
    {
        super(props)
        this.state = {quiz_position: 1}
    }
    
    render() {
        const isQuizEnd = 'false' ? ((this.state.quiz_position - 1) === quizData.quiz_questions.length) : 'true';
        let quizDisp;

        if (isQuizEnd){
            quizDisp = <QuizEnd />;
        }
        else {
            quizDisp = <QuizQuestion quiz_question={quizData.quiz_questions[this.state.quiz_position - 1]} />;
        }

        return(
            <div>
                {quizDisp}
            </div>
        )
    }
}

export default Quiz
