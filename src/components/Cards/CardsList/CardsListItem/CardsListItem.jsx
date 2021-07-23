import React from 'react';
import './style.scss';
import { Link } from 'react-router-dom';

export const CardsListItem = ({ item }) => {
  const { likes, userImageURL, comments, tags, id } = item;

  return (
    <li>
      <Link to={`/card-page/${id}`}>
        <img src={userImageURL} alt="someimg" />
      </Link>
      <div className="info">
        <div className="tags">
          {tags.split(',').map((el) => (
            <div>{el.trim()}</div>
          ))}
        </div>
        <div className="text">
          <div>likes:{likes}</div>
          <div>comments:{comments}</div>
        </div>
      </div>
    </li>
  );
};
