import logo from './logo.svg';
import './App.css';
import { Card } from "./Card";
import React, { useEffect, useState } from 'react';

function App() {

  const [name, setName] = useState('hello bob')

  const onCardClicked = () => {
    console.log('Hello')
  }

  // useEffect(() => {
  //   setInterval(() => {
  //     setName('Bob' + Math.random())
  //   }, 1000)
  //   return () => {}
  // }, [])

  return (
    <div className="App">
      <Card name='kyle' />
    </div>
  );
}

export default App;
