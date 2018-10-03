import React from 'react';
import images from './images.json';

export default function PatternImages(props) {
  //loops through our images.json file and creates array of images w/ classes based on their pattern
  const patterns = images.map(image => (
    <img src={image.imageUrl} alt={image.pattern} className={image.pattern} />
  ));

  return <div>{patterns}</div>;
}