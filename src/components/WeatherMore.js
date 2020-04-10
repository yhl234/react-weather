/* eslint-disable react/prop-types */
import React from 'react';

import WeatherIcons from './WeatherIcons';

class WeatherMore extends React.Component {
  render() {
    const { data, showMore, toggleMore } = this.props;
    return (
      <div>
        <button type="button" onClick={toggleMore}>
          Show More
        </button>
        <div className={`weatherMore ${showMore ? 'showWeatherMore' : ''}`}>
          {data.map((d, i) => (
            <div className="weatherContainer" key={i}>
              <div className="moreIcon">
                <WeatherIcons icon={d.weather[0].icon} />
              </div>
              <div className="moreDescription">
                <p>{d.dt_txt}</p>
                <p>
                  T: {d.main.temp}&#176;C, F: {d.main.feels_like}&#176;C
                </p>
                <p>{d.weather[0].description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
export default WeatherMore;
