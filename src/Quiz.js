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
    
    showNextQuestion()
    {
        this.setState((state) => {
            return {quiz_position: state.quiz_position + 1}
        })
    }

    handleResetClick()
    {
        this.setState({quiz_position: 1})
        this.props.resetClickHandler()
    }
    render() {
        const isQuizEnd = 'false' ? ((this.state.quiz_position - 1) === quizData.quiz_questions.length) : 'true';
        let quizDisp;

        if (isQuizEnd){
            quizDisp = <QuizEnd resetClickHandler={this.handleResetClick.bind(this)}/>;
        }
        else {
            quizDisp = <QuizQuestion quiz_question={quizData.quiz_questions[this.state.quiz_position - 1]} showNextQuestionHandler={this.showNextQuestion.bind(this)}/>;
        }

        return(
            <div>
                {quizDisp}
            </div>
        )
    }
}

export default Quiz
