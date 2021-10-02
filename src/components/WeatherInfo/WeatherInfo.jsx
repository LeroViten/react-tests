import { Component } from 'react';
import WeatherError from '../WeatherError/WeatherError';
import WeatherView from '../WeatherView/WeatherView';
import WeatherLoader from '../WeatherLoader/WeatherLoader';

export default class WeatherInfo extends Component {
  state = {
    cityName: null,
    error: null,
    status: 'idle',
  };

  componentDidUpdate(prevProps, prevState) {
    const prevCity = prevProps.cityName;
    const currentCity = this.props.cityName;
    const API_KEY = '7c511c1fd9bf88bf9a9d5d01c37e0441';
    const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';
    const request = `?q=${currentCity}&appid=${API_KEY}`;

    if (prevCity !== currentCity) {
      this.setState({ status: 'pending' });
      setTimeout(() => {
        fetch(BASE_URL + request)
          .then(res => {
            if (res.ok) {
              return res.json();
            }
            return Promise.reject(new Error(`No ${currentCity} found`));
          })
          .then(cityName => this.setState({ cityName, status: 'resolved' }))
          .catch(error => this.setState({ error, status: 'rejected' }));
      }, 1500);
    }
  }

  render() {
    const { cityName, status, error } = this.state;

    if (status === 'idle') {
      return <h2>Enter your city name!</h2>;
    }
    if (status === 'pending') {
      return <WeatherLoader cityName={cityName} />;
    }
    if (status === 'rejected') {
      return <WeatherError message={error.message} />;
    }
    if (status === 'resolved') {
      return <WeatherView cityName={cityName} />;
    }
  }
}
