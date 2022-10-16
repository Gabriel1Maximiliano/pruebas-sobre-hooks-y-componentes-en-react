import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';

//import { CounterWithCustomHooks } from './components/01-useState/CounterWithCustomHooks';

import './index.css'

import reportWebVitals from './reportWebVitals';
//import { SimpleForm } from './components/02-useEfect/SimpleForm';
//import { FormwhithCustomHooks } from './components/FormwhithCustomHooks';
//import { MultipleCustomHooks } from './components/03-examples/MultipleCustomHooks';
//import { FocusScreen } from './components/04-useRef/FocusScreen';
//import { Layout } from './components/05-useLayoutefect/Layout';
//import { Memorize } from './06-Memos/Memorize';
//import { MemoHook } from './06-Memos/MemoHook';
//import { CallBackHook } from './06-Memos/CallBackHook';
//import { Padre } from './07-tarea-memo/Padre';
//import { ToDoApp } from './08-UseReducer/ToDoApp';
import { MainApp } from './useContex/MainApp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <React.StrictMode>
<MainApp />
  </React.StrictMode>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
