import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';

import styles from './LeaderBoar.module.scss';
import LeaderBoarItem from './LeaderBoarItem/LeaderBoarItem';

const cx = classNames.bind(styles);
const LeaderBoar = () => {
  const [tickets, setTickets] = useState(localStorage.getItem('tickets'));
  useEffect(() => {
    window.addEventListener('storage', () => {
      setTickets(localStorage.getItem('tickets'));
    });
  }, []);

  return (
    <div className={cx('leaderBoardWrapper')}>
      <div className={cx('tokenInfo')}>
        <span>Token Left : {tickets}</span>
      </div>
      <div className={cx('leaderBoarInfo')}>
        <h3 className={cx('heading')}>LeaderBoar</h3>
        <div className={cx('leaderBoard')}>
          <LeaderBoarItem />
          <LeaderBoarItem />
          <LeaderBoarItem />
        </div>
      </div>
    </div>
  );
};

export default LeaderBoar;
