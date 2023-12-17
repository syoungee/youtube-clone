import React from 'react';
import youtubeLogo from '../images/youtube.png';
import styles from './Header.module.css';

export default function Header() {
  return (
    <div className={styles['header-container']}>
      <div stlye={{ height: '30px' }}>
        <img src={youtubeLogo} className={styles.logo}></img>
        <b>Youtube</b>
      </div>
      <form class={styles['search-container']}>
        <input type="text" id={styles['search-bar']} placeholder="검색" />
        <a href="/">
          <img class={styles['search-icon']} src="http://www.endlessicons.com/wp-content/uploads/2012/12/search-icon.png" />
        </a>
      </form>
    </div>
  );
}
