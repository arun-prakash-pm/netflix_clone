import React, { useState, useEffect } from 'react';
import './TitalCards.css';
import cards_data from '../../assets/cards/Cards_data';

const TitalCards = ({ title, category }) => {
  const [apiData, setApiData] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchApiData = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${category}?language=en-US&page=1`,
        {
          method: 'GET',
          headers: {
            accept: 'application/json',
            Authorization: 'Bearer YOUR_API_KEY',
          },
        }
      );

      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }

      const data = await response.json();
      setApiData(data.results);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchApiData();
  }, [category]);

  return (
    <div className="titalcards">
      <h2>{title || 'Popular on Netflix'}</h2>
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <div className="card-list">
          {apiData.map((card, index) => (
            <div className="card" key={index}>
              <img
                src={`https://image.tmdb.org/t/p/w500${card.backdrop_path}`}
                alt=""
              />
              <p>{card.original_title}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TitalCards;