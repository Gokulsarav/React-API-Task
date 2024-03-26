import './App.css';

import React from 'react';
import CharacterList from './CharacterList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Character List</h1>
      </header>
      <main>
        <CharacterList />
      </main>
    </div>
  );
}

export default App;
