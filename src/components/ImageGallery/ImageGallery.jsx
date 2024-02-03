// ImageGallery.js
import React from 'react';
import  ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import styles from './ImageGallery.module.css';

const ImageGallery = ({ images, onImageClick }) => {
  return (
    <ul className={styles.gallery}>
      {images.map((image) => (
        <ImageGalleryItem key={image.id} image={image} onImageClick={onImageClick} />
      ))}
    </ul>
  );
};

export default ImageGallery;
