import React, { useContext } from 'react';
import StarwarsContext from '../context/StarwarsContext';

function Header() {
  const {
    data,
    isLoading,
    columnFilter,
    setColumFilter,
    comparisonFilter,
    setComparisonFilter,
    valueFilter,
    setValueFilter,
    setFilteredPlanets } = useContext(StarwarsContext);

  const bttnFilter = () => {
    const filteredColumn = columnFilter;
    const filteredComparison = comparisonFilter;
    const filteredValue = Number(valueFilter);
    if (filteredComparison === 'maior que') {
      const arrComparisonBig = data
        .filter((elem) => (Number(elem[filteredColumn]) > filteredValue));
      setFilteredPlanets(arrComparisonBig);
    }
    if (filteredComparison === 'menor que') {
      const arrComparisonSmall = data
        .filter((elem) => (Number(elem[filteredColumn]) < filteredValue));
      setFilteredPlanets(arrComparisonSmall);
    }
    if (filteredComparison === 'igual a') {
      const arrComparisonEqual = data
        .filter((elem) => (Number(elem[filteredColumn]) === filteredValue));
      setFilteredPlanets(arrComparisonEqual);
    }
  };

  return (
    <header>
      {!isLoading && (
        <div>
          <select
            data-testid="column-filter"
            value={ columnFilter }
            onChange={ (e) => setColumFilter(e.target.value) }
          >
            <option value="population">
              population
            </option>
            <option value="orbital_period">
              orbital_period
            </option>
            <option value="diameter">
              diameter
            </option>
            <option value="rotation_period">
              rotation_period
            </option>
            <option value="surface_water">
              surface_water
            </option>
          </select>
          <select
            data-testid="comparison-filter"
            value={ comparisonFilter }
            onChange={ (e) => setComparisonFilter(e.target.value) }
          >
            <option value="maior que">
              maior que
            </option>
            <option value="menor que">
              menor que
            </option>
            <option value="igual a">
              igual a
            </option>
          </select>
          <input
            type="number"
            data-testid="value-filter"
            value={ valueFilter }
            onChange={ (e) => setValueFilter(e.target.value) }
          />
          <button
            type="button"
            data-testid="button-filter"
            onClick={ bttnFilter }
          >
            Filtrar

          </button>
        </div>
      )}
    </header>
  );
}

export default Header;
