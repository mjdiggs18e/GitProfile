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
    hireable,
  } = userInfo;

  const {
    name: reponame,
    html_url: repourl,
    description,
    size,
    stargazers_count,
    forks,
    license,
  } = userRepos;

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
    <div>
      <img src={avatar_url} alt={name}></img>
      <h1>{name}</h1>
      <h1>@{login}</h1>
      <h1>Joined Github on {created_at}</h1>
      <div>
        <h1>{public_repos}</h1>
        <h1>{followers}</h1>
        <h1>{following}</h1>
        <h1>{hireable ? <h1>Looking for work!</h1> : ''}</h1>
      </div>
      <div>
        {userRepos.map((repo) => {
          return (
            <div style={{ margin: '4rem 0' }}>
              <h1>{repo.name}</h1>
              <h1>{repo.description}</h1>
              <h1>{repo.language}</h1>
              <h1>{repo.stargazers_count}</h1>
              <h1>{repo.forks}</h1>
              <h1>{repo.size} KB</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default UserDetails;
