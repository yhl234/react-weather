import React from 'react';

import ClearSky from './ClearSky';
import FewClouds from './FewClouds';
import ScatteredClouds from './ScatteredClouds';
import BrokenClouds from './BrokenClouds';
import ShowerRain from './ShowerRain';
import Rain from './Rain';
import Thunderstorm from './Thunderstorm';
import Snow from './Snow';
import Mist from './Mist';

class WeatherMore extends React.Component {
  render() {
    return (
      <div className="weatherMore">
        <ClearSky />
        <FewClouds />
        <ScatteredClouds />
        <BrokenClouds />
        <ShowerRain />
        <Rain />
        <Thunderstorm />
        <Snow />
        <Mist />
      </div>
    );
  }
}
export default WeatherMore;
