import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { AiOutlineFork, AiFillStar } from 'react-icons/ai';

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
    <section className="user-card">
      <img className="user-image" src={avatar_url} alt={name}></img>
      <h1 className="user-name">{name}</h1>
      <a href={html_url}>
        <h1 className="user-login">@{login}</h1>
      </a>
      <div className="user-stats">
        <h1 className="user-repos">{public_repos} Repositories</h1>
        <h1 className="user-followers">{followers} Followers</h1>
        <h1 className="user-following">{following} Following</h1>
      </div>
      <div className="user-repo-list">
        {userRepos.map((repo) => {
          return (
            <a href={repo.html_url}>
              <div className="user-repo-card">
                <h1 className="user-repo-name">{repo.name}</h1>
                <h1 className="user-repo-description">{repo.description}</h1>
                <div className="user-repo-stats">
                  <h1 className="user-repo-stars">
                    <AiFillStar />
                    {repo.stargazers_count}
                  </h1>
                  <h1 className="user-repo-forks">
                    <AiOutlineFork />
                    {repo.forks}
                  </h1>
                  <h1 className="user-repo-size">{repo.size} KB</h1>
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
};

export default UserDetails;
