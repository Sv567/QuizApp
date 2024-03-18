import React, { useEffect } from 'react'
import { useState } from 'react';
import './Quiz.css'
import Question from '../Question/Question';
import { CircularProgress } from '@mui/material';

const Quiz = ({ name, questions, setQuestions, score, setScore }) => {
  const [options, setOptions] = useState();
  const [currQues, setCurrQues] = useState(0);

  useEffect(() => {
    setOptions(questions && handleShuffle([
      questions[currQues]?.correct_answer,
      ...questions[currQues]?.incorrect_answers]))
  }, [questions, currQues])

  const handleShuffle = (options) => {
    console.log(options)
    return options.sort(() => Math.random() - 0.5)
  }
  return (
    <div className='quiz'>

      <span className='subtitle'>Welcome , {name}</span>
      {questions ? 
      <>
        <div className='quizinfo'>
          <span>{questions[currQues].category}</span>
          <span>Score : {score}</span>
        </div>
        <Question
          currQues={currQues}
          setCurrQues={setCurrQues}
          questions={questions}
          options={options}
          correct={questions[currQues]?.correct_answer}
          score={score}
          setScore={setScore}
          setQuestions={setQuestions}          
        />
      </> :
        <CircularProgress style={{ margin: 100, color: 'inherit', size: '150' }} />}

    </div>
  )
}

export default Quiz