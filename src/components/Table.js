import React, { useContext } from 'react';
import StarwarsContext from '../context/StarwarsContext';
import Header from './Header';

function Table() {
  const {
    data,
    searchInput,
    setSearchInput,
    filteredPlanets,
    isLoading } = useContext(StarwarsContext);
  return (
    <>
      <h1>StarWars</h1>
      <input
        data-testid="name-filter"
        type="text"
        value={ searchInput }
        onChange={ (e) => setSearchInput(e.target.value) }
      />
      <Header />
      {!isLoading && (
        <table>
          <thead>
            <tr>
              { Object.keys(data[0]).map((title) => (
                <th key={ title }>
                  {(title.charAt(0).toUpperCase() + title.slice(1)).replace('_', ' ')}
                </th>
              ))}
            </tr>
            {/* Fiz um tratamento do retorno da string da API, usando como referência:https://stackoverflow.com/questions/1026069/how-do-i-make-the-first-letter-of-a-string-uppercase-in-javascript  */}
          </thead>
          <tbody>
            {filteredPlanets.map((planet, index) => (
              <tr key={ index }>
                <td>{planet.name}</td>
                <td>{planet.rotation_period}</td>
                <td>{planet.orbital_period}</td>
                <td>{planet.diameter}</td>
                <td>{planet.climate}</td>
                <td>{planet.gravity}</td>
                <td>{planet.terrain}</td>
                <td>{planet.surface_water}</td>
                <td>{planet.population}</td>
                <td>{planet.films}</td>
                <td>{planet.created}</td>
                <td>{planet.edited}</td>
                <td>{planet.url}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
}

export default Table;
