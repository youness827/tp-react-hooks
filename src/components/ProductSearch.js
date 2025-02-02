import React, { useContext } from 'react';
import { ThemeContext } from '../App';
import { LanguageContext } from '../App';

const ProductSearch = ({ setSearchTerm }) => {
  const { isDarkTheme } = useContext(ThemeContext);
  const { selectedlangue } = useContext(LanguageContext);

  return (
    <div className="mb-4">
      {/* Search input with dynamic placeholder and styling */}
      <div className="input-group">
        <input
          type="text"
          onChange={(e) => setSearchTerm(e.target.value)} // Updating search term on input change
          placeholder={selectedlangue === "Fr" ? "Rechercher un produit..." : "Search for a product..."} // Dynamic placeholder based on language
          className={`form-control ${isDarkTheme ? 'bg-dark text-light' : 'bg-light'}`} // Dark theme support
        />
        <button
          className={`btn ${isDarkTheme ? 'btn-outline-light' : 'btn-outline-dark'}`} // Button style based on theme
          onClick={() => setSearchTerm('')} // Clear search term on button click
        >
          <i className="bi bi-x-circle"></i> {/* Icon to clear input */}
        </button>
      </div>
    </div>
  );
};

export default ProductSearch;