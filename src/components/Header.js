import React, { useContext, useState } from 'react';
import StarwarsContext from '../context/StarwarsContext';

function Header() {
  const filterColumns = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ];
  const {
    isLoading,
    columnFilter,
    setColumFilter,
    comparisonFilter,
    setComparisonFilter,
    valueFilter,
    setValueFilter,
    setFilteredPlanets,
    filteredPlanets } = useContext(StarwarsContext);
  const [col, setCol] = useState(filterColumns);

  const removeColumns = (column) => {
    const newColumns = filterColumns.filter((coluna) => coluna !== column);
    setCol(newColumns);
  };

  const bttnFilter = () => {
    const filteredColumn = columnFilter;
    const filteredComparison = comparisonFilter;
    const filteredValue = Number(valueFilter);
    if (filteredComparison === 'maior que') {
      const arrComparisonBig = filteredPlanets
        .filter((elem) => (Number(elem[filteredColumn]) > filteredValue));
      setFilteredPlanets(arrComparisonBig);
    }
    if (filteredComparison === 'menor que') {
      const arrComparisonSmall = filteredPlanets
        .filter((elem) => (Number(elem[filteredColumn]) < filteredValue));
      setFilteredPlanets(arrComparisonSmall);
    }
    if (filteredComparison === 'igual a') {
      const arrComparisonEqual = filteredPlanets
        .filter((elem) => (Number(elem[filteredColumn]) === filteredValue));
      setFilteredPlanets(arrComparisonEqual);
    }
    removeColumns(filteredColumn);
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
            {/*             <option value="population">
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
            </option> */}
            {col.map((option) => (
              <option
                key={ option }
                value={ option }
              >
                { option }
              </option>
            ))}
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
