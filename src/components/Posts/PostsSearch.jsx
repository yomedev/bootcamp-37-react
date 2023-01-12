import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Button } from '../Button';

export class PostsSearch extends Component {
  state = {
    search: this.props.value,
  };

  handleChange = (event) => {
    const { value } = event.target;
    this.setState({ search: value });
  };

  handleSubmit = () => {
    this.props.onSubmit(this.state.search);
    console.log(this.state.search);
  };

  render() {
    const { search } = this.state;
    return (
      <div className='input-group mb-3'>
        <input
          type='text'
          value={search}
          onChange={this.handleChange}
          className='form-control'
          placeholder='Type to search...'
        />
        <Button onClick={this.handleSubmit}>Search</Button>
      </div>
    );
  }
}

PostsSearch.propTypes = {
  onSubmit: PropTypes.func,
};
