import React from 'react';
import ReactDOM from 'react-dom';

/* ___________________ Components ___________________ */
import Ball from './Ball';
import Lottery from './Lottery';
/* __________________________________________________ */

/* _____________________ Styles _____________________ */
import './App.css'
/* __________________________________________________ */

ReactDOM.render(
  <div className="App">
    <Lottery />
    <Lottery title="Mini Daily" maxNum={10} numBalls={4} />
  </div>,
  document.getElementById('root')
);