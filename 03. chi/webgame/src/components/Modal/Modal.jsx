import React, { useState } from 'react';
import classNames from 'classnames/bind';
import { auth } from '../../config/firebaseConfig';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

import styles from './Modal.module.scss';

const cx = classNames.bind(styles);

const Modal = () => {
  const [isShowSignUp, setIsShowSignUp] = useState(false);
  const [signInEmail, setSignInEmail] = useState('');
  const [signInPassword, setSignInPassword] = useState('');
  const [signUpEmail, setSignUpEmail] = useState('');
  const [signUpPassword, setSignUpPassword] = useState('');

  const handleSignIn = () => {
    signInWithEmailAndPassword(auth, signInEmail, signInPassword).then((res) => {
      console.log(res);
    });
  };

  const handleSignUp = () => {
    createUserWithEmailAndPassword(auth, signUpEmail, signUpPassword).then((res) => {
      console.log(res);
    });

    handleClearState();
    handleShowForm();
  };

  const handleClearState = () => {
    setSignUpEmail('');
    setSignUpPassword('');
  };

  const handleShowForm = () => {
    setIsShowSignUp(!isShowSignUp);
  };

  console.log({
    email: signUpEmail,
    password: signUpPassword,
  });

  return (
    <div className={cx('modal')}>
      {isShowSignUp ? (
        <div className={cx('form')}>
          <h1 className={cx('heading')}>SignUp</h1>
          <div className={cx('content')}>
            <div className={cx('inputWrapper')}>
              <input
                value={signUpEmail}
                placeholder="Email"
                onChange={(e) => {
                  setSignUpEmail(e.target.value);
                }}
                type="text"
              />
            </div>
            <div className={cx('inputWrapper')}>
              <input
                value={signUpPassword}
                onChange={(e) => {
                  setSignUpPassword(e.target.value);
                }}
                placeholder="Password"
                type="password"
              />
            </div>
            {/* <div className={cx('inputWrapper')}>
              <input value={''} onChange={(e) => {}} placeholder="Confirm Password" type="password" />
            </div> */}
            <div className={cx('text')}>
              <span> have account ?</span>
              <span className={cx('textBtn')} onClick={handleShowForm}>
                SignIn
              </span>
            </div>
          </div>
          <div className={cx('btnWrapper')}>
            <button className={cx('btnSubmit')} onClick={handleSignUp}>
              SignUp
            </button>
          </div>
        </div>
      ) : (
        <div className={cx('form')}>
          <h1 className={cx('heading')}>Login</h1>
          <div className={cx('content')}>
            <div className={cx('inputWrapper')}>
              <input
                value={signInEmail}
                placeholder="Email"
                onChange={(e) => {
                  setSignInEmail(e.target.value);
                }}
                type="text"
              />
            </div>
            <div className={cx('inputWrapper')}>
              <input
                value={signInPassword}
                placeholder="Password"
                onChange={(e) => {
                  setSignInPassword(e.target.value);
                }}
                type="password"
              />
            </div>
            <div className={cx('text')}>
              <span>no account ?</span>
              <span className={cx('textBtn')} onClick={handleShowForm}>
                create on
              </span>
            </div>
          </div>
          <div className={cx('btnWrapper')}>
            <button className={cx('btnSubmit')} onClick={handleSignIn}>
              Login
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
