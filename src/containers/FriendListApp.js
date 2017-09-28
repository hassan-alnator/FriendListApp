import React, { Component } from 'react';
import styles from './FriendListApp.css';
import { connect } from 'react-redux';

import { addFriend, deleteFriend, starFriend } from '../actions/FriendsActions';
import { goToPage, nextPage, prevPage } from '../actions/PaginationActions'
import { FriendList, AddFriendInputs, Pagination } from '../components';
import Paginator from '../utils/paginator';


class FriendListApp extends Component {

  render() {

    // destructuring data and actions
    const { friendlist: { friendsById }, addFriend, deleteFriend, starFriend, goToPage, nextPage, prevPage } = this.props;

    // destructuring pagination info
    const { currentPage, itemsPerPage } = this.props.pagination.friendsById;


    const actions = { addFriend, deleteFriend, starFriend };

    return (
      <div className={styles.friendListApp}>
        <h1>The FriendList</h1>
        <AddFriendInputs addFriend={actions.addFriend} />
        <FriendList friends={Paginator.paginate(currentPage, itemsPerPage, friendsById)} actions={actions} />

        <Pagination
          Key={'friendsById'}
          goToPage={goToPage}
          nextPage={nextPage}
          prevPage={prevPage}
          activePage={currentPage}
          itemsPerPage={itemsPerPage}
          NumberOfItems={friendsById.length}
          NumberOfPages={Paginator.calculateNumberOfPages(itemsPerPage, friendsById.length)}
        />

      </div>
    );
  }
}

function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps, {
  addFriend,
  deleteFriend,
  starFriend,
  goToPage,
  nextPage,
  prevPage
})(FriendListApp)
