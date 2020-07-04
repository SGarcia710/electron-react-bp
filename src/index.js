import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './screens/Home';
import { BrowserRouter, Route } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <div className="App">
        <Route path="/" exact component={Home} />
      </div>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
