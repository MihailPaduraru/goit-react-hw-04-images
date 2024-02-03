
import React from 'react';
import styles from './ImageGalleryItem.module.css';


const ImageGalleryItem = ({ image, onImageClick }) => {
  return (
    <li className={styles['gallery-item']} onClick={() => onImageClick(image.largeImageURL)}>
      <img src={image.webformatURL} alt={image.tags} className={styles['gallery-item-image']} />
    </li>
  );
};

export default ImageGalleryItem;
