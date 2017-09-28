import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './FriendListItem.css';

class FriendListItem extends Component {

  render() {

    // destructring props to remove redundent this.props
    const { id, name, gender, starred, starFriend, deleteFriend } = this.props;

    // destructring styles
    const { friendListItem, friendInfos, friendActions, btnAction } = styles;

    return (
      <li className={friendListItem}>
        <div className={friendInfos}>
          <div><span>{name}</span></div>
          <div>
            <small>xx friends in common | {gender || "unknown"}</small>
          </div>
        </div>
        <div className={friendActions}>
          <button className={`btn btn-default ${btnAction}`}
            onClick={() => starFriend(id)}>
            <i className={classnames('fa', {
              'fa-star': starred,
              'fa-star-o': !starred
            })} />
          </button>
          <button className={`btn btn-default ${btnAction}`}
            onClick={() => deleteFriend(id)}>
            <i className="fa fa-trash" />
          </button>
        </div>
      </li>
    );
  }
}

FriendListItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  starred: PropTypes.bool,
  starFriend: PropTypes.func.isRequired
};

export default FriendListItem
