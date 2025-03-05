import React from 'react'
import "./TitalCards.css"
import cards_data from '../../assets/cards/Cards_data'

const TitalCards = () => {
  return (
    <div class="titalcards">
      <h2>Popular on Netflix</h2>
      <div className='card-list'>
        {cards_data.map((card,index)=>{
              return <div className="card" key={index}>
                <img src={card.image} alt=""/>
                <p>{card.name}</p>
                </div>
        })

        }
      </div>
    </div>
  )
}

export default TitalCards
