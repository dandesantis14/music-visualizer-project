import React from 'react';
import ReactDOM from 'react-dom';
import AudioPlayer from './AudioPlayer';
import tracks from './tracks';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <AudioPlayer tracks = {tracks}/>
  </React.StrictMode>,
  document.getElementById('root')
);



