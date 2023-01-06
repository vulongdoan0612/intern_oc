import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';

import styles from './Game.module.scss';

const cx = classNames.bind(styles);

const Game = () => {
  const [maxScore, setMaxScore] = useState(sessionStorage.getItem('maxScore'));
  const [score, setScore] = useState(sessionStorage.getItem('score'));
  useEffect(() => {
    window.addEventListener('storage', () => {
      setMaxScore(sessionStorage.getItem('maxScore'));
      setScore(sessionStorage.getItem('score'));
    });
  }, []);
  return (
    <div className={cx('gameContainer')}>
      <div className={cx('gameInfo')}>
        <span>Score : {score}</span>
        <span>HightScore : {maxScore}</span>
      </div>
      <iframe src="GameSnake/index.html" title="Game Snake" />
    </div>
  );
};

export default Game;
