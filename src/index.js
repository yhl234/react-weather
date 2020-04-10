import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Nav from './components/Nav';
import ClearSky from './components/ClearSky';
import FewClouds from './components/FewClouds';
import ScatteredClouds from './components/ScatteredClouds';
import BrokenClouds from './components/BrokenClouds';
import ShowerRain from './components/ShowerRain';
import Rain from './components/Rain';
import Thunderstorm from './components/Thunderstorm';
import Snow from './components/Snow';
import Mist from './components/Mist';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Nav />
    <ClearSky />
    <FewClouds />
    <ScatteredClouds />
    <BrokenClouds />
    <ShowerRain />
    <Rain />
    <Thunderstorm />
    <Snow />
    <Mist />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
