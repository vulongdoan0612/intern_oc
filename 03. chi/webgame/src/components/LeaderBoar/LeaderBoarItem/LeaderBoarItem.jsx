import React from 'react';
import classNames from 'classnames/bind';

import styles from './LeaderBoarItem.module.scss';

const cx = classNames.bind(styles);

const LeaderBoarItem = () => {
  return (
    <div className={cx('itemWrapper')}>
      <div className={cx('itemLeft')}>
        <div className={cx('avatar')}>
          <img
            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
            alt="avatar"
          />
        </div>
      </div>
      <div className={cx('itemRight')}>
        <span className={cx('userRank')}>Rank : 1 </span>
        <span className={cx('userInfo')}>Van Chi - Score : 50</span>
      </div>
    </div>
  );
};

export default LeaderBoarItem;
