import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let postData = [
  {id: 1, post: 'how are you?', like: 3},
  {id: 2, post: 'i`m fine', like: 7},
];

let dialogsData = [
  { id: 1, name: 'Dima' },
  { id: 2, name: 'Mihael' },
  { id: 3, name: 'Andre' },
  { id: 4, name: 'Anna' },
  { id: 5, name: 'Nikolya' },
  { id: 6, name: 'Margo' },
];

let messageData = [
  { id: 1, message: 'hi' },
  { id: 2, message: 'how are you?' },
  { id: 3, message: 'i`m fine' },
];

ReactDOM.render(
  <React.StrictMode>
    <App postData={postData} dialogsData={dialogsData} messageData={messageData} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
