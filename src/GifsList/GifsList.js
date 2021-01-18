import React from 'react';
import './GifsList.css';
import GifItem from './GifItem/GifItem';

function GifContainer(props) {
  return (
    <div className="GifsList">
      {props.images.map(obj => (
        <GifItem src={obj.url} alt={obj.title} key={obj.id} />
      ))}
    </div>
  );
}
export default GifContainer;
