import React from 'react';
import { STORE } from '../store.js';
import Card from './Card.js'

const List = props => {

  const listCards = props.cards.map( (cardID,index) => {
    if(STORE.allCards.hasOwnProperty(cardID)){
      return <Card key={index} title={STORE.allCards[cardID].title} content={STORE.allCards[cardID].content} />
    }
  });

  return (
    <section className="List">
      <header className="List-header">
        <h2>{props.header}</h2>
      </header>
      <div className="List-cards">
        {listCards}
      </div>
    </section>
  )
}

export default List;