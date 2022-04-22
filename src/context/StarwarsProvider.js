import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarwarsContext from './StarwarsContext';

function StarwarsProvider({ children }) {
  const endpoint = 'https://swapi-trybe.herokuapp.com/api/planets/';
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filteredPlanets, setFilteredPlanets] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  /* Requisito 3 */
  const [columnFilter, setColumFilter] = useState('population');
  const [comparisonFilter, setComparisonFilter] = useState('maior que');
  const [valueFilter, setValueFilter] = useState(0);
  const [filterByNumericValues, setFilters] = useState([]);

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
        { data,
          setData,
          filteredPlanets,
          setFilteredPlanets,
          searchInput,
          setSearchInput,
          isLoading,
          columnFilter,
          setColumFilter,
          comparisonFilter,
          setComparisonFilter,
          valueFilter,
          setValueFilter,
          filterByNumericValues,
          setFilters }
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
