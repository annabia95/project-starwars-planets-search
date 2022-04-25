import React, { useContext, useState, useEffect } from 'react';
import { FaFacebook } from 'react-icons/fa';
import { AiFillInstagram, AiFillYoutube, AiFillDelete } from 'react-icons/ai';
import StarwarsContext from '../context/StarwarsContext';
import './HeaderStyle.css';

const filterColumns = [
  'population',
  'orbital_period',
  'diameter',
  'rotation_period',
  'surface_water',
];
function Header() {
  const {
    data,
    isLoading,
    columnFilter,
    setColumFilter,
    searchInput,
    setSearchInput,
    comparisonFilter,
    setComparisonFilter,
    valueFilter,
    setValueFilter,
    setFilteredPlanets,
    filteredPlanets,
    filterByNumericValues,
    setFilters } = useContext(StarwarsContext);

  const [col, setCol] = useState(filterColumns);
  /*   const removeColumns = () => {
    const c = filterColumns.filter((elem) => !filterByNumericValues
      .find((f) => f.column === elem));
    setCol(c);
  }; */

  useEffect(() => {
    const c = filterColumns.filter((elem) => !filterByNumericValues
      .find((f) => f.column === elem));
    setCol(c);
  }, [filterByNumericValues]);

  const bttnFilter = () => {
    setFilters([
      ...filterByNumericValues,
      {
        column: columnFilter,
        comparison: comparisonFilter,
        value: valueFilter,
      }]);
    /* removeColumns(); */
    console.log(filterByNumericValues);
    if (comparisonFilter === 'maior que') {
      const arrComparisonBig = filteredPlanets
        .filter((elem) => (Number(elem[columnFilter]) > Number(valueFilter)));
      setFilteredPlanets(arrComparisonBig);
    }
    if (comparisonFilter === 'menor que') {
      const arrComparisonSmall = filteredPlanets
        .filter((elem) => (Number(elem[columnFilter]) < Number(valueFilter)));
      setFilteredPlanets(arrComparisonSmall);
    }
    if (comparisonFilter === 'igual a') {
      const arrComparisonEqual = filteredPlanets
        .filter((elem) => (Number(elem[columnFilter]) === Number(valueFilter)));
      setFilteredPlanets(arrComparisonEqual);
    }
  };

  const removeFilters = () => {
    setFilteredPlanets(data);
    setColumFilter('population');
    setComparisonFilter('maior que');
    setValueFilter('0');
    setCol(filterColumns);
    setFilters([]);
  };

  return (
    <header>
      {!isLoading && (
        <div>
          <div className="header--container">
            <div className="header--nav">
              <a href="https://www.facebook.com/StarWars.br" className="header--icons" target="_blank" rel="noreferrer" alt="logo-facebook">
                <FaFacebook size={ 30 } />
              </a>
              <a href="https://www.instagram.com/starwars/" className="header--icons" target="_blank" rel="noreferrer" alt="logo-instagram">
                <AiFillInstagram size={ 30 } />
              </a>
              <a href="https://www.youtube.com/user/starwars" className="header--icons" target="_blank" rel="noreferrer" alt="logo-youtube">
                <AiFillYoutube size={ 30 } />
              </a>
            </div>
            <div className="logo">
              <img src="https://www.freepnglogos.com/uploads/lego-png-logo/star-wars-png-logo-16.png" alt="logo starwars" />
            </div>
            <label htmlFor="name-filter">
              <input
                data-testid="name-filter"
                type="text"
                placeholder="Let's find a planet! 🔍"
                value={ searchInput }
                onChange={ (e) => setSearchInput(e.target.value) }
              />
            </label>
          </div>
          <div className="filters--container">
            <label htmlFor="column-filter">
              <select
                data-testid="column-filter"
                value={ columnFilter }
                onChange={ (e) => {
                  setColumFilter(e.target.value);
                  /* ; setFilters([
                ...filterByNumericValues,
                {
                  column: e.target.value,
                }]); */
                } }
              >
                {col.map((option) => (
                  <option
                    key={ option }
                    value={ option }
                  >
                    { option }
                  </option>
                ))}
              </select>
            </label>
            <label htmlFor="comparison-filter">
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
            </label>
            <label htmlFor="value-filter">
              <input
                type="number"
                data-testid="value-filter"
                value={ valueFilter }
                onChange={ (e) => setValueFilter(e.target.value) }
              />
            </label>
            <button
              type="button"
              data-testid="button-filter"
              onClick={ bttnFilter }
              className="bttn--filters"
            >
              Filtrar

            </button>
            <button
              type="button"
              data-testid="button-remove-filters"
              onClick={ removeFilters }
              className="remove--filters"
            >
              Remover filtros
            </button>
          </div>
          <div className="used--filters">
            { filterByNumericValues.map(({ column, comparison, value }, index) => (
              <div key={ index } className="filter--name">
                <button type="button" data-testid="filter" className="single--filter">
                  {`${column} ${comparison} ${value}`}
                  <button type="button" className="bttn--filter">
                    <AiFillDelete size={ 15 } color="#c53827" />
                  </button>
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
