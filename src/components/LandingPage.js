import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../App.css';

const LandingPage = () => {
  const [userName, setUserName] = useState('');
  const [error, setError] = useState(false);
  const page = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userName) {
      fetch(`https://api.github.com/users/${userName}`).then((response) =>
        response.ok ? page.push(`/user/${userName}`) : setError(true)
      );
      setTimeout(() => {
        setError(false);
      }, 2000);
    }
  };
  return (
    <>
      <div className='lp-main'>
        <div className='lp-sub'>
          <h1 className='lp-title'>GitProfile</h1>
          <p className='lp-subtitle'>Search for a github user</p>
          {error ? (
            <motion.h4
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className='error-text'
            >
              No user with that name found!
            </motion.h4>
          ) : (
            ''
          )}
          <form className='lp-form' onSubmit={handleSubmit}>
            <input
              className={error ? 'lp-input error' : 'lp-input'}
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
