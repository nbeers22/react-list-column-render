import React from 'react';
import List from './components/List.js'
import './App.css';

function App(props) {
  const lists = [...props.store.lists].map( (list) => {
    return <List key={list.id} header={list.header} cards={list.cardIds} />
  });

  return (
    <main className="App">
      <header className="App-header">
        <h1>Trelloyes!</h1>
      </header>
      <div className="App-list">
        {lists}
      </div>
    </main>
  );
}

export default App;
