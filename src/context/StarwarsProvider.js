import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarwarsContext from './StarwarsContext';

function StarwarsProvider({ children }) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filteredPlanets, setFilteredPlanets] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const endpoint = 'https://swapi-trybe.herokuapp.com/api/planets/';

  useEffect(() => {
    const requestData = async () => {
      const { results } = await fetch(endpoint).then((response) => response.json());
      results.forEach((planet) => delete planet.residents);
      setData(results);
      setIsLoading(false);
    };
    requestData();
  }, []);

  /* Referênicia para fazer o filtro na tabela: https://www.freecodecamp.org/news/build-a-search-filter-using-react-and-react-hooks/ */

  useEffect(() => {
    const filtered = data.filter(({ name }) => name.toLowerCase()
      .includes(searchInput.toLowerCase()));
    setFilteredPlanets(filtered);
  }, [data, searchInput]);

  return (
    <StarwarsContext.Provider
      value={
        { data, setData, filteredPlanets, searchInput, setSearchInput, isLoading }
      }
    >
      { children }
    </StarwarsContext.Provider>
  );
}

StarwarsProvider.propTypes = {
  children: PropTypes.node,
}.isRequised;

export default StarwarsProvider;
