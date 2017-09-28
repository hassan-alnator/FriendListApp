import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './AddFriendInputs.css';

class AddFriendInputs extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      name: this.props.name || '',
      gender: this.props.gender || ''
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = (e) => {

    e.preventDefault();
    const name = this.state.name.trim();
    const gender = this.state.gender;

    this.props.addFriend(name, gender);
    this.setState({ name: '', gender: '' });

  }
  handleKeySubmit = (e) => {
    if (e.which === 13) {
      this.handleSubmit(e)
    }
  }

  render() {
    return (
      <div className={styles.addFriendInputContainer}>
        <form onSubmit={this.handleSubmit} onKeyDown={this.handleKeySubmit}>
          <input
            name="name"
            type="text"
            autoFocus="true"
            className={classnames('form-control', styles.addFriendInput)}
            placeholder="Type the name of a friend"
            value={this.state.name}
            onChange={this.handleChange}
          />

          <select name="gender" value={this.state.gender} onChange={this.handleChange} className={classnames('form-control', styles.addFrindInputGender)}>
            <option>male</option>
            <option>female</option>
          </select>
        </form>
      </div>
    );
  }
}

AddFriendInputs.propTypes = {
  addFriend: PropTypes.func.isRequired
};

export default AddFriendInputs
