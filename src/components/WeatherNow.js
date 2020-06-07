import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import WeatherIcons from './WeatherIcons';

class WeatherNow extends React.Component {
  render() {
    const {
      data: {
        dt_txt: dateTime,
        main: { temp, feels_like: feelsLike },
        weather,
      },
      className,
    } = this.props;
    const { description, icon } = weather[0];

    return (
      <div className={className}>
        <div className="nowIcon">
          <WeatherIcons icon={icon} />
        </div>
        <div className="nowDescription">
          <p className="dateTime">{dateTime}</p>
          <h3>{temp}&#176;C</h3>
          <p>Feel Like: {feelsLike}&#176;C</p>
          <p>{description}</p>
        </div>
      </div>
    );
  }
}

WeatherNow.propTypes = {
  data: PropTypes.object,
  className: PropTypes.string,
};

export default styled(WeatherNow)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  .nowIcon {
    max-height: 450px;
    .svg-container {
      svg {
        height: 100%;
        width: 100%;
      }
    }
  }
  .nowDescription {
    max-height: 450px;
    flex-basis: 40%;
    align-self: center;
    text-align: center;
    h3 {
      font-size: 500%;
      margin: 0;
    }
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
`;
