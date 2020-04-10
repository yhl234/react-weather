/* eslint-disable react/prop-types */
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

class WeatherIcons extends React.Component {
  render() {
    const { icon } = this.props;
    let weatherIcon;
    if (icon === '01d' || icon === '01n') {
      weatherIcon = <ClearSky />;
    } else if (icon === '02d' || icon === '02n') {
      weatherIcon = <FewClouds />;
    } else if (icon === '03d' || icon === '03n') {
      weatherIcon = <ScatteredClouds />;
    } else if (icon === '04d' || icon === '04n') {
      weatherIcon = <BrokenClouds />;
    } else if (icon === '09d' || icon === '09n') {
      weatherIcon = <ShowerRain />;
    } else if (icon === '10d' || icon === '10n') {
      weatherIcon = <Rain />;
    } else if (icon === '11d' || icon === '11n') {
      weatherIcon = <Thunderstorm />;
    } else if (icon === '13d' || icon === '13n') {
      weatherIcon = <Snow />;
    } else if (icon === '50d' || icon === '50n') {
      weatherIcon = <Mist />;
    }
    return <div className="svg-container">{weatherIcon}</div>;
  }
}

export default WeatherIcons;
