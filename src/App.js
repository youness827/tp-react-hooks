import React, { createContext, useState } from 'react';
import ProductList from './components/ProductList';
import ProductSearch from './components/ProductSearch';
import ThemeToggle from './components/ThemeToggle';
import useDebounce from './hooks/useDebounce';

// Create context for theme and language
export const ThemeContext = createContext();
export const LanguageContext = createContext();

const App = () => {
  // State for theme (dark/light mode)
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  // State for search term and debounce it for performance optimization
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  // State for selected language (English or French)
  const [selectedlangue, setSelectedlangue] = useState("En");

  // Handle language change
  const handleLanguageChange = (event) => {
    setSelectedlangue(event.target.value);
  };

  return (
    // Provide theme context to all child components
    <ThemeContext.Provider value={{ isDarkTheme, setIsDarkTheme }}>
      {/* Provide language context to all child components */}
      <LanguageContext.Provider value={{ selectedlangue, setSelectedlangue }}>
        <div className={`container ${isDarkTheme ? 'bg-dark text-light' : 'bg-light'}`}>
          <header className="my-4">
            {/* Product catalog title with language-based translation */}
            <h1 className="text-center">
              {selectedlangue === "Fr" ? "Catalogue de Produits" : "Product Catalogue"}
            </h1>

            {/* Theme toggle and language selector */}
            <div className="d-flex justify-content-end gap-2">
              <ThemeToggle />
              
              {/* Language selector with custom styles */}
              <select
                onChange={handleLanguageChange}
                value={selectedlangue}
                className={`form-select ${isDarkTheme ? 'bg-dark text-light' : 'bg-light'}`}
                style={{ width: '150px', fontSize: '1rem', borderRadius: '8px' }} // Custom styles for width, font size, and border radius
              >
                <option value="En" style={{ fontSize: '1rem' }}>English</option>
                <option value="Fr" style={{ fontSize: '1rem' }}>Français</option>
              </select>
            </div>
          </header>

          <main>
            {/* Pass search term state down to ProductSearch */}
            <ProductSearch setSearchTerm={setSearchTerm} />

            {/* Pass debounced search term down to ProductList for filtering */}
            <ProductList filtringTherm={debouncedSearchTerm} />
          </main>
        </div>
      </LanguageContext.Provider>
    </ThemeContext.Provider>
  );
};

export default App;
