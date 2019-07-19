import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import CharacterCard from './components/CharacterCard';
import PageButtons from './components/PageButtons';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [swChars, setSwChars] = useState([]);
  const [api, setApi] = useState('https://swapi.co/api/people')
  const [nextApi, setNextApi] = useState();
  
  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(()=> {
    axios.get(`${api}`)
    .then(data => {
      console.log(data);
      setSwChars(data.data.results);
      setNextApi(`${data.data.next}`);
    })
    .catch(error => {
      console.log(error)
    })
  }, [api])
  console.log(swChars)

  const nextPageHandler = (event) => {
    setApi(nextApi);
  }
  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <PageButtons pageHandler={(event) => nextPageHandler(event)}/>
      <CharacterCard characters={swChars} />
      <PageButtons pageHandler={(event) => nextPageHandler(event)}/>
    </div>
  );
}

export default App;
