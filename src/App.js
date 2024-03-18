import './App.css';
import axios from 'axios';
import '@fontsource/roboto/500.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Result from './Components/Result/Result';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Quiz from './Components/Quiz/Quiz';
import Question from './Components/Question/Question';

function App() {
  const [name, setName] = useState("");
  const [questions, setQuestions] = useState();
  const [score, setScore] = useState(0);

  const fetchQuistions = async () => {
    try {
      const { data } = await axios.get(
        `https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple`
    );
      console.log(data.results)
      setQuestions(data.results);
    } catch (error) {
      console.error("Error fetching questions:", error);
    }
  };

  
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home name={name} setName={setName} fetchQuistions={fetchQuistions} />}> </Route>
        <Route path='/quiz' element={<Quiz 
        name={name}
        questions={questions}
        score={score}
        setScore={setScore}
        setQuestions={setQuestions}
        />} > </Route>
        <Route path='/result' element={<Result name={name} score={score}/>}> </Route>

      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
