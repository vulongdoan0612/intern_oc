import React, { useState } from 'react';
import classNames from 'classnames/bind';

import styles from './Header.module.scss';
import Modal from '../Modal/Modal';

const cx = classNames.bind(styles);
const Header = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleShowModalLogin = () => {
    setShowModal(!showModal);
  };

  return (
    <div className={cx('header')}>
      <div className={cx('wrapper')}>
        <h1 className={cx('logo')}>Snake Game</h1>
        <div className={cx('auth')}>
          {currentUser ? (
            <div className={cx('user')}>
              <div className={cx('userInformation')}>
                <span className={cx('userEmail')}>Email : vanchiphan70@gmail.com</span>
                <span className={cx('userCredit')}> Credit : 100</span>
              </div>
              <div className={cx('userImage')}>
                <img
                  src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
                  alt=""
                />
              </div>
            </div>
          ) : (
            <div className={cx('noUser')}>
              <button className={cx('btnLogin')} onClick={handleShowModalLogin}>
                Login
              </button>
            </div>
          )}
        </div>
      </div>

      {showModal && (
        <div className={cx('modalWrapper')}>
          <div className={cx('modalBackdrop')} onClick={handleShowModalLogin}></div>
          <Modal />
        </div>
      )}
    </div>
  );
};

export default Header;
