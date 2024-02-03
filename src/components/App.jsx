import React from 'react';
import axios from 'axios';
import Searchbar from './Searchbar/Searchbar';
import Loader from './Loader/Loader';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Modal from './Modal/Modal';

const App = () => {
  const [images, setImages] = React.useState([]);
  const [apiKey] = React.useState('40897523-298f69bbdc7791e1add26dc98');
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const [query, setQuery] = React.useState('');
  const [selectedImage, setSelectedImage] = React.useState(null);

  const handleSearch = newQuery => {
    setQuery(newQuery);
    setImages([]);
    setLoading(true);
    setError(null);

    const url = `https://pixabay.com/api/?q=${newQuery}&page=1&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=16`;

    axios
      .get(url)
      .then(response => {
        setImages(response.data.hits);
      })
      .catch(error => {
        setError('Error fetching images. Please try again.');
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const loadMoreImages = () => {
    setLoading(true);
    setError(null);

    const nextPage = Math.ceil(images.length / 12) + 1;
    const url = `https://pixabay.com/api/?q=${query}&page=${nextPage}&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=16`;

    axios
      .get(url)
      .then(response => {
        const newImages = response.data.hits.filter(newImage => {
          return !images.some(
            existingImage => existingImage.id === newImage.id
          );
        });

        setImages(prevImages => [...prevImages, ...newImages]);
      })
      .catch(error => {
        setError('Error fetching more images. Please try again.');
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const openModal = imageUrl => {
    setSelectedImage(imageUrl);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div>
      <Searchbar onSubmit={handleSearch} apiKey={apiKey} />
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {loading && <Loader />}
      <ImageGallery images={images} onImageClick={openModal} />
      {images.length > 0 && !loading && <Button onClick={loadMoreImages} />}
      {selectedImage && <Modal imageUrl={selectedImage} onClose={closeModal} />}
    </div>
  );
};

export default App;
