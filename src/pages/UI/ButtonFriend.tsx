import React from 'react';

// modules
import API from '../../api';

// redux
import { RootState } from '../../index';
import { useDispatch, useSelector } from 'react-redux';
import { setFriendsArray } from '../../redux/modules/friend';
import { hideAdminFriendsModal, showAdminFriendsModal } from '../../redux/modules/modal';

// image
import iconImage from '../../assets/img/icon/friends.png';

function ButtonFriend() {
  const dispatch = useDispatch();

  const adminFriendsModalShow = useSelector(
    (state:RootState) => state.modal.adminFriendsModalShow);

  // methods
  const toggleAdminFriend = () => {
    adminFriendsModalShow
    ? dispatch(hideAdminFriendsModal())
    : dispatch(showAdminFriendsModal());
  };

  const getFriendsList = () => {
    API.getFriendsList(sessionStorage.userId)
    .then(res => dispatch(setFriendsArray(res.data)))
    .catch(err => console.error(err));
  }

  const onClick = () => {
    toggleAdminFriend();
    getFriendsList();
  };

return (
  <div onClick={onClick} className="base-btn-icon">
    <img src={iconImage} alt=""/>
  </div>
  );
}

export default ButtonFriend;