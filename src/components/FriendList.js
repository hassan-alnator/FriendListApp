import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './FriendList.css';
import FriendListItem from './FriendListItem';

class FriendList extends Component {
  render() {
    const { friends, actions } = this.props;
    return (
      <ul className={styles.friendList}>
        {
          friends.map((friend, index) => {
            return (
              <FriendListItem
                key={index}
                id={index}
                name={friend.name}
                gender={friend.gender}
                starred={friend.starred}
                {...actions} />
            );
          })
        }
      </ul>
    );
  }
}

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

export default FriendList;
