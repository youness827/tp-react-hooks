import React, { useContext } from 'react';
import { ThemeContext } from '../App';
import { LanguageContext } from '../App';


// const [searchTerm, setSearchTerm] = useState('');

const ProductSearch = ({ setSearchTerm }) => {
  const { isDarkTheme } = useContext(ThemeContext);
  const {selectedlangue} = useContext(LanguageContext);  

};

export default ProductSearch;