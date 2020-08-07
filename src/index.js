import React from 'react';
import ReactDOM from 'react-dom';
import {MusicApp} from './MusicApp';
import './css/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css'

ReactDOM.render(
  <React.StrictMode>
    <MusicApp />
  </React.StrictMode>,
  document.getElementById('root')
);
