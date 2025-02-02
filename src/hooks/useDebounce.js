import { useState, useEffect } from 'react';

function useDebounce(value, delay) {
  // State to store the debounced value
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    // Set a timeout to update the debounced value after the specified delay
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // Cleanup the timeout when the component unmounts or the value/delay changes
    return () => clearTimeout(timer);
  }, [value, delay]); // Dependency array to trigger effect on value or delay change

  return debouncedValue; // Return the debounced value
}

export default useDebounce;