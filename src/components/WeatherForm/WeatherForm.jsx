import React, { Component } from 'react';
import { ImSearch } from 'react-icons/im';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default class WeatherForm extends Component {
  state = {
    cityName: '',
  };

  handleInputChange = event => {
    this.setState({ cityName: event.currentTarget.value.toLowerCase() });
  };

  handleSubmit = event => {
    event.preventDefault();
    if (this.state.cityName.trim() === '') {
      return toast.error('Enter city name');
    }
    this.props.onSubmit(this.state.cityName);
    this.setState({ cityName: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          <input
            type="text"
            placeholder="Type in your city"
            value={this.state.cityName}
            onChange={this.handleInputChange}
          />
        </label>
        <button type="submit">
          <ImSearch style={{ marginRight: 5 }} />
          Search
        </button>
      </form>
    );
  }
}
