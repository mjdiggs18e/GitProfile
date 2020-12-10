import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import '../App.css';

const LandingPage = () => {
  const [userName, setUserName] = useState('');
  const page = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    page.push(`/user/${userName}`);
  };
  return (
    <>
      <div className='lp-main'>
        <div className='lp-sub'>
          <h1 className='lp-title'>GitProfile</h1>
          <p className='lp-subtitle'>Search for a github user</p>
          <form className='lp-form' onSubmit={handleSubmit}>
            <input
              className='lp-input'
              type='text'
              placeholder='mjdiggs18e'
              value={userName}
              onChange={(e) => {
                setUserName(e.target.value);
              }}
            />
            <button className='lp-submit' type='submit'>
              Search
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
