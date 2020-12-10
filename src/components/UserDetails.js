import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const UserDetails = () => {
  const [userInfo, setUserInfo] = useState({});
  const [userRepos, setUserRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  const {
    login,
    avatar_url,
    html_url,
    name,
    blog,
    public_repos,
    followers,
    following,
    created_at,
  } = userInfo;

  useEffect(() => {
    fetch(`https://api.github.com/users/${id}`)
      .then((response) => response.json())
      .then((data) => setUserInfo(data))
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    fetch(`https://api.github.com/users/${id}/repos`)
      .then((response) => response.json())
      .then((data) => setUserRepos(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <section>
      <img className='user-image' src={avatar_url} alt={name}></img>
      <h1 className='user-name'>{name}</h1>
      <h1 className='user-login'>@{login}</h1>
      <h1 className='user-joined'>Joined Github on {created_at}</h1>
      <div className='user-stats'>
        <h1 className='user-repos'>{public_repos}</h1>
        <h1 className='user-followers'>{followers}</h1>
        <h1 className='user-following'>{following}</h1>
      </div>
      <div className='user-repo-list'>
        {userRepos.map((repo) => {
          return (
            <div className='user-repo-card' style={{ margin: '4rem 0' }}>
              <h1 className='user-repo-name'>{repo.name}</h1>
              <h1 className='user-repo-description'>{repo.description}</h1>
              <h1 className='user-repo-language'>{repo.language}</h1>
              <h1 className='user-repo-stars'>{repo.stargazers_count}</h1>
              <h1 className='user-repo-forks'>{repo.forks}</h1>
              <h1 className='user-repo-size'>{repo.size} KB</h1>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default UserDetails;
