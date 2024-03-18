import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css'
import { Button, MenuItem, TextField } from '@mui/material';
import Categories from '../../Data/Categories';
import image from '../Home/undraw_quick_chat_re_bit5.svg'
import ErrorMessage from '../ErrorMessage';

const Home = ({name, setName,fetchQuistions}) => {
    const [category, setCategory] = useState("");
    const [difficulty, setDifficulty] = useState("");
    const [error , setError] = useState(false);

    const nevigate = useNavigate();

    const handlleSubmit = () => {
        if(!category||!difficulty||!name){
            setError(true)
            return;
        }else{
            setError(false);
            fetchQuistions(category, difficulty)
            nevigate('/quiz');
        }
    }


    return (
        <div className='content'>
            <div className='settings'>
                <span style={{ fontSize: 30 }}>Quiz Settings</span>

                <div className='setting-select'>
                    {error && <ErrorMessage>Please Fill All The Fields</ErrorMessage>}
                    <TextField
                        style={{ marginBottom: 25 }}
                        label='Enter Your Name'
                        varient='outlined'
                        onChange={(e) => { setName(e.target.value) }}
                        value={name}

                    />
                    <TextField
                        style={{ marginBottom: 25 }}
                        select
                        label='Select Category'
                        varient='outlined'
                        onChange={(e) => { setCategory(e.target.value) }}
                        value={category}


                    >
                        {
                            Categories.map((cat) => (

                                <MenuItem
                                    key={cat.category}
                                    value={cat.value}>
                                    {cat.category}

                                </MenuItem>
                            ))
                        }
                    </ TextField>
                    <TextField
                        style={{ marginBottom: 25 }}
                        select
                        label='Select Difficulty'
                        varient='outlined'
                        onChange={(e) => { setDifficulty(e.target.value) }}
                        value={difficulty}
                    >
                        <MenuItem key='Easy' value='Easy'>
                            Easy
                        </MenuItem>

                        <MenuItem key='Medium' value='Medium'>
                            Medium
                        </MenuItem>

                        <MenuItem key='Hard' value='Hard'>
                            Hard
                        </MenuItem>


                    </ TextField>
                    <Button varient='contained' color='primary' size='large' onClick={handlleSubmit}> Start Quiz</Button>
                </div>
            </div>
            <img src={image} className='banner' alt='quiz image' />
        </div>
    )
}

export default Home