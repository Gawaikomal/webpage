import React from 'react';
import './App.css';
import { RowSelection } from './components/RowSelection';

function App() {
  const headerStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
    textAlign: 'center',
    margin: '20px 0',
    color: 'blue',
  };

  return (
    <div className='App'>
      <h2 style={headerStyle}>Welcome to "Happy Learning Center"</h2>
      <RowSelection />
    </div>
  );
}

export default App;
