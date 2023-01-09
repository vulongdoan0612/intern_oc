import React, { useState } from 'react';
import classNames from 'classnames/bind';
import { auth, db } from '../../config/firebaseConfig';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { addDoc, getDocs, collection } from 'firebase/firestore';

import styles from './Modal.module.scss';
import { useStateContext } from '../../contexts/ContextProvider';

const cx = classNames.bind(styles);

const Modal = () => {
  const { handleShowModal, setCurrentUser, setDataCurrentUser } = useStateContext();

  const [errorSignUp, setErrorSignUp] = useState(false);
  const [isShowSignUp, setIsShowSignUp] = useState(false);
  const [signInEmail, setSignInEmail] = useState('');
  const [signInPassword, setSignInPassword] = useState('');
  const [signUpEmail, setSignUpEmail] = useState('');
  const [signUpPassword, setSignUpPassword] = useState('');

  const handleSignIn = () => {
    signInWithEmailAndPassword(auth, signInEmail, signInPassword)
      .then((res) => {
        setCurrentUser(res);
        handleGetDbUser(res.user);
        handleShowModal();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSignUp = () => {
    createUserWithEmailAndPassword(auth, signUpEmail, signUpPassword)
      .then((res) => {
        handleCreateDbUser(res.user);
        handleClearState();
        handleShowForm();
      })
      .catch((err) => {
        console.log(err);
        setErrorSignUp(true);
      });
  };

  const handleCreateDbUser = async (data) => {
    try {
      const docRef = await addDoc(collection(db, 'users'), {
        email: data?.email,
        uid: data?.uid,
        credit: 100,
        score: 0,
        hightScore: 0,
        Tickets: 3,
      });
      console.log('Document written with ID: ', docRef.id);
    } catch (e) {
      console.error('Error adding document: ', e);
    }
  };

  const handleGetDbUser = async (currentData) => {
    const querySnapshot = await getDocs(collection(db, 'users'));
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      if (data.uid === currentData.uid) {
        setDataCurrentUser(data);
      }
    });
  };

  const handleClearState = () => {
    setSignUpEmail('');
    setSignUpPassword('');
  };

  const handleShowForm = () => {
    setIsShowSignUp(!isShowSignUp);
  };

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
                  setErrorSignUp(false);
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
            {errorSignUp && <span className={cx('error')}>Email already exists</span>}
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
