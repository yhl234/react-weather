/* eslint-disable react/prop-types */
import React from 'react';
import ClearSky from './svgs/ClearSky';
import FewClouds from './svgs/FewClouds';
import ScatteredClouds from './svgs/ScatteredClouds';
import BrokenClouds from './svgs/BrokenClouds';
import ShowerRain from './svgs/ShowerRain';
import Rain from './svgs/Rain';
import Thunderstorm from './svgs/Thunderstorm';
import Snow from './svgs/Snow';
import Mist from './svgs/Mist';

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
