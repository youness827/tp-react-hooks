import React, { useContext } from 'react';
import { ThemeContext } from '../App';
import { LanguageContext } from '../App';
import useProductSearch from '../hooks/useProductSearch';

const ProductList = ({ filtringTherm }) => {
  // Extracting values from context
  const { isDarkTheme } = useContext(ThemeContext);
  const { selectedlangue } = useContext(LanguageContext);
  
  // Extracting data and methods from the custom hook
  const { products, loading, error, reload, currentPage, totalPages, nextPage, previousPage } = useProductSearch();

  // Handle loading state
  if (loading) {
    return (
      <div className="text-center my-4">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">
            {selectedlangue === "Fr" ? "Chargement..." : "Loading..."}
          </span>
        </div>
      </div>
    );
  }

  // Handle error state
  if (error) {
    return (
      <div className="alert alert-danger" role="alert">
        Erreur: {error}
      </div>
    );
  }

  // Render the product list
  return (
    <div>
      {/* Reload button */}
      <button onClick={reload} className="btn btn-primary mb-3">
        {selectedlangue === "Fr" ? "Recharger" : "Reload"}
      </button>
      
      {/* Display filtered products */}
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {products
          .filter(product => product.title.toLowerCase().includes(filtringTherm.toLowerCase())) // Filtering products
          .map(product => (
            <div key={product.id} className="col">
              <div className={`card h-100 ${isDarkTheme ? 'bg-dark text-light' : ''}`}>
                {product.thumbnail && (
                  <img 
                    src={product.thumbnail} 
                    className="card-img-top" 
                    alt={product.title}
                    style={{ height: '200px', objectFit: 'cover' }} 
                  />
                )}
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text">{product.description}</p>
                  <p className="card-text">
                    <strong>Prix: </strong>{product.price}€
                  </p>
                </div>
              </div>
            </div>
          ))}
      </div>
      
      {/* Pagination */}
      <nav className="mt-4">
        <ul className="pagination justify-content-center">
          <li className="page-item">
            <button className="page-link" onClick={previousPage}>
              {selectedlangue === "Fr" ? "Précédent" : "Previous"}
            </button>
          </li>
          <li className="page-item">
            <span className="page-link">
              {selectedlangue === "Fr" ? "Page" : "Page"} {currentPage} {selectedlangue === "Fr" ? "sur" : "of"} {totalPages}
            </span>
          </li>
          <li className="page-item">
            <button className="page-link" onClick={nextPage}>
              {selectedlangue === "Fr" ? "Suivant" : "Next"}
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default ProductList;