import { Button } from '@mui/material';
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './REsult.css'

const Result = ({name , score}) => {
  const nevigate = useNavigate();
  console.log(name)
  console.log(score)
  useEffect(()=>{
    if(!name){
        nevigate('/')
    }

  },[name])
  return (
    <div className='result'>
      <span className='title'>Final Score : {score}</span>
      <Button variant='contained' color='secondary' size='large' style={{alignSelf:'center'}} href='/'>Restart</Button>

    </div>
  )
}

export default Result