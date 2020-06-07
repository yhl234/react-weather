import React from 'react';
import axios from 'axios';
import Location from './Location';
import WeatherMore from './WeatherMore';
import WeatherNow from './WeatherNow';
import Loader from './UI/Loader';

class Weather extends React.Component {
  state = {
    weatherList: [],
    city: '',
    isLoading: true,
  };

  componentDidMount() {
    axios({
      method: 'GET',
      url: 'https://community-open-weather-map.p.rapidapi.com/forecast',
      headers: {
        'content-type': 'application/octet-stream',
        'x-rapidapi-host': process.env.REACT_APP_HOST,
        'x-rapidapi-key': process.env.REACT_APP_API_KEY,
        useQueryString: true,
      },
      params: {
        q: 'toronto',
        units: 'metric',
      },
    })
      .then(response => {
        this.setState({
          weatherList: response.data.list,
          city: response.data.city.name,
        });
      })
      .then(() => {
        this.setState({
          isLoading: false,
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const { weatherList, city, isLoading } = this.state;
    let weather = <Loader className="weatherNow" />;
    if (!isLoading) {
      weather = (
        <>
          <Location city={city} className="city" />
          <WeatherNow data={weatherList[0]} className="weatherNow" />
          <WeatherMore data={weatherList} className="weatherMore" />
        </>
      );
    }
    return <div className="weather">{weather}</div>;
  }
}
export default Weather;
