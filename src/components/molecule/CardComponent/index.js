import React from 'react';
import ImageComponent from '../../atom/ImageComponent';

const defaultBorderRadius = "50%";

const CardComponent = ({ ItemName, ItemCost, className, 
                         ImageRadius = defaultBorderRadius}) => {
  return (
    <div className={className}>
      <ImageComponent borderRadius={ImageRadius}/>
      <div>
          <div>Name: {ItemName}</div>
          <div>Price: {ItemCost}</div>
      </div>
    </div>
  )
};

export default CardComponent;