import React from 'react';
import './index.css';
import StarwarsProvider from './context/StarwarsProvider';
import Table from './components/Table';

function App() {
  return (
    <StarwarsProvider>
      <Table />
    </StarwarsProvider>
  );
}

export default App;
