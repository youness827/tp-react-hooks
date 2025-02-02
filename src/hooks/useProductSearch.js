import { useState, useEffect } from 'react';

// Custom hook to fetch product data with pagination and error handling
const useProductSearch = () => {
  // State variables
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  // Function to fetch products from the API
  const fetchProducts = async (page = 1) => {
    setLoading(true); // Set loading to true before starting the fetch request
    try {
      const skip = 10 * (page - 1); // Calculate the number of products to skip based on current page
      const response = await fetch(`https://api.daaif.net/products?delay=1000&limit=10&skip=${skip}`);
      
      // Handle unsuccessful API responses
      if (!response.ok) throw new Error('Network error');

      const data = await response.json(); // Parse the JSON data from the response
      setProducts(data.products); // Store fetched products
      setTotalPages(Math.ceil(data.total / 10)); // Set the total number of pages based on total products
    } catch (err) {
      setError(err.message); // Set error state in case of failure
    } finally {
      setLoading(false); // Set loading to false once the fetch is done (success or failure)
    }
  };

  // Fetch products when currentPage changes
  useEffect(() => {
    fetchProducts(currentPage);
  }, [currentPage]);

  // Reload the products when called
  const reload = () => fetchProducts(currentPage);

  // Go to the next page if possible
  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Go to the previous page if possible
  const previousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return {
    products,
    loading,
    error,
    reload,
    currentPage,
    totalPages,
    nextPage,
    previousPage,
  };
};

export default useProductSearch;