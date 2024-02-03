// Loader.js
// Loader/Loader.jsx
import React from 'react';
import { ThreeDots as LoaderSpinner } from 'react-loader-spinner'; // Update the import statement

const Loader = () => {
  return (
    <div className="loader">
      <LoaderSpinner color="#00BFFF" height={50} width={50} />
    </div>
  );
};

export default Loader;
