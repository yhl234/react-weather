import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import WeatherIcons from './WeatherIcons';

const WeatherMore = ({ data, className }) => (
  <div className={className}>
    <div className="mainMore showWeatherMore">
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

WeatherMore.propTypes = {
  data: PropTypes.array,
  className: PropTypes.string,
};
export default styled(WeatherMore)`
  display: grid;
  justify-items: center;
  justify-items: center;
  .mainMore {
    display: none;
    height: 0;
    opacity: 0;
    transition: all 0.2s ease-in-out;
    &.showWeatherMore {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      height: auto;
      opacity: 1;
    }
    .weatherContainer {
      min-width: 250px;
      max-width: 300px;
      text-align: left;
      font-size: 80%;
      display: flex;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
      margin: 5px;
      border-radius: 5px;
      transition: all 0.2s ease-in-out;

      &:hover {
        box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.2);
      }
      .moreDescription {
        p {
          &:first-child {
            color: grey;
            font-size: 80%;
          }
          &:last-child {
            text-transform: capitalize;
          }
        }
      }
      .svg-container {
        width: 100px;
        height: 100px;
        svg {
          display: block;
          width: 100%;
          height: 100%;
        }
      }
    }
  }
`;
