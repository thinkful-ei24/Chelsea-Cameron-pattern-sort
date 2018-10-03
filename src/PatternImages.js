import React from 'react';
import images from './images.json';
import './patternImages.css';

export default function PatternImages(props) {
  //loops through our images.json file and creates array of images w/ classes based on their pattern
  const patterns = images
    .filter(image => image.pattern.includes(props.filterBy))
    .map((image, index) => (
      <img
        src={image.imageUrl}
        alt={image.pattern}
        className={image.pattern}
        key={index}
      />
    ));

  return <div>{patterns}</div>;
}
