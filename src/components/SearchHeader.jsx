import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import youtubeLogo from '../images/youtube.png';
import styles from './Header.module.css';

export default function Header() {
  const [text, setText] = useState('');
  const navigate = useNavigate();
  const onChange = (e) => {
    console.log(e.target.value);
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/videos/${text}`);
  };

  return (
    <div className={styles['header-container']}>
      <div stlye={{ height: '30px' }}>
        <img src={youtubeLogo} className={styles.logo} alt="youtube-logo"></img>
        <b>Youtube</b>
      </div>
      <form class={styles['search-container']} onSubmit={handleSubmit}>
        <input type="text" value={text} id={styles['search-bar']} placeholder="검색" onChange={onChange} />
        <a href="/" onClick={handleSubmit}>
          <img class={styles['search-icon']} src="http://www.endlessicons.com/wp-content/uploads/2012/12/search-icon.png" alt="" />
        </a>
      </form>
    </div>
  );
}
