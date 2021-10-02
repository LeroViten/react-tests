import React, { Component } from 'react';
import { ToastContainer, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import WeatherForm from './components/WeatherForm/WeatherForm';
import WeatherInfo from './components/WeatherInfo/WeatherInfo';

export default class App extends Component {
  state = {
    cityName: '',
  };

  handleFormSubmit = cityName => {
    this.setState({ cityName });
  };

  render() {
    return (
      <>
        <WeatherForm onSubmit={this.handleFormSubmit} />
        <WeatherInfo cityName={this.state.cityName} />
        <ToastContainer transition={Zoom} autoClose={3000} />
      </>
    );
  }
}
