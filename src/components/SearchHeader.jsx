import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import youtubeLogo from '../images/youtube.png';
import styles from './SearchHeader.module.css';

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
    <div className="flex items-center justify-center">
      <div className="w-1/5 h-20 flex items-center ">
        <img src={youtubeLogo} className="w-10 h-8 mr-2" alt="youtube-logo"></img>
        <b>Youtube</b>
      </div>
      <form className="flex w-3/5" onSubmit={handleSubmit}>
        <input
          type="text"
          value={text}
          className="py-2 px-4 w-4/5 border border-gray-300 focus:outline-none focus:border-blue-500 rounded-l-full rounded-r-none"
          placeholder="검색"
          onChange={onChange}
        />
        <div className="py-1 px-2 w-1/5 p-0 border border-gray-300  bg-gray-100 rounded-r-full rounded-l-none">
          <button
            className="bg-cover bg-center w-10 h-10"
            style={{ backgroundImage: 'url("http://www.endlessicons.com/wp-content/uploads/2012/12/search-icon.png")' }}
          ></button>
        </div>
      </form>
    </div>
  );
}
