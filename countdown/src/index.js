import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

function flip() {
  return Math.random() >= 0.5;
}

function randomNumber(n) {
  let rnd = 0;
  if (n <= 0 || n > 1000000)
    return new Error(
      'Argument must be greater or equal to 0 and less than 1,000,000.'
    );

  for (let i = 0; i < n; i++) {
    flip() ? rnd++ : rnd--;

    if (rnd < 0) {
      rnd = 0;
    }
  }

  return rnd;
}

console.log(randomNumber(50));

registerServiceWorker();
