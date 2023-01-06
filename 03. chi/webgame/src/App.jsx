import classNames from 'classnames/bind';

import styles from './App.module.scss';
import Game from './components/Game/Game';
import Header from './components/Header/Header';
import LeaderBoar from './components/LeaderBoar/LeaderBoar';

const cx = classNames.bind(styles);
const App = () => {
  return (
    <div className={cx('App')}>
      <div className={cx('wrapper')}>
        <Header />
        <div className={cx('container')}>
          <div className={cx('containerLeft')}>
            <Game />
          </div>
          <div className={cx('containerRight')}>
            <LeaderBoar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
