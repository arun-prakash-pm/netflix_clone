import React, { useEffect, useState } from 'react';
import "./Player.css";
import back_arrow_icon from '../../assets/back_arrow_icon.png';
import { useParams } from 'react-router-dom';

const Player = () => {
  
  const [apiData, setApiData] = useState({
    name: "",
    key: "",
    published_at: "",
    type: ""
  });

    const {id}=useParams();

  
  const API_ENDPOINT = `https://api.themoviedb.org/3/movie/${id}/videos`;
  const API_KEY = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZTk2YzBhY2EzNGIyZjk2ZTQzNDljZDUxZTVhNzhmZCIsIm5iZiI6MTc0MTM1MTE4Ny4zMzQsInN1YiI6IjY3Y2FlOTEzMWY5ZWYzNTMyZGFmZDgzNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.buqT5hSZhb3A8Qkv65zhlEduxzgBQ6OEPhX5aHJoYos';

  
  const options = {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${API_KEY}`,
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  };

  
  useEffect(() => {
    fetch(`${API_ENDPOINT}?language=en-US`, options)
      .then(response => response.json())
      .then(data => setApiData(data.results[0]))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="player">
      <img src={back_arrow_icon} alt="" />
      <iframe
        width='90%'
        height='90%'
        src={`https://www.youtube.com/embed/${apiData.key}`}
        alt=""
        title='trailer'
        frameBorder='0'
        allowFullScreen
      />
      <div className='player-info'>
        <p>Published Date: {apiData.published_at.slice(0,10)}</p>
        <p>Name: {apiData.name}</p>
        <p>Type: {apiData.type}</p>
      </div>
    </div>
  );
};

export default Player;