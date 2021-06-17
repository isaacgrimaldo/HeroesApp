import React from 'react'
import { Link } from 'react-router-dom';

export const CardHero = ({Hero}) => {

    const  { id  , superhero , alter_ego ,  first_appearance , characters } = Hero; 

    return (
        <div className="card mb-3  animate__animated animate__fadeIn" style={{maxWidth : 540}} >
        <div className="row g-0">
          <div className="col-md-4">
            <img className ='card-img' src={`/assets/heroes/${id}.jpg`} alt={superhero}/>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{superhero}</h5>
              <p className="card-text">{characters}</p>
                 {
                     (alter_ego !== characters) && <p>{alter_ego}</p>
                 }
              <p className="card-text">{first_appearance}</p>
               <Link to = {`/hero/${id}`} className ='link'>
  
               <p className="card-text link">Mas...</p>
               
               </Link>
            </div>
          </div>
        </div>
      </div>
    )
}

