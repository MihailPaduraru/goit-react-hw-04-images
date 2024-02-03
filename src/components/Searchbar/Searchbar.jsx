// Searchbar/Searchbar.jsx
import React, { useState } from 'react';
import styles from './Searchbar.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Searchbar = ({ onSubmit, apiKey }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(searchQuery, apiKey);
  };

  return (
    <header className={styles.searchbar}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.inputContainer}>
        <button type="submit" className={styles.button}>
        <FontAwesomeIcon icon={faSearch} className={styles.icon} />
        </button>

        <input
          className={styles.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images "
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        </div>
      </form>
    </header>
  );
};

export default Searchbar;
