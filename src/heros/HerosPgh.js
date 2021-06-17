import React from 'react'
import { Redirect, useParams } from 'react-router-dom'
import { GetHeroById } from '../Helpers/GetHeroById'

export const HerosPgh = ({history}) => {
   
  const  {heroId}= useParams()
  
  const Hero = GetHeroById(heroId);

   if(!Hero){
     return <Redirect to ='/marvel' />;
   }

  const {superhero , publisher , alter_ego , first_appearance  ,characters , id} = Hero
  
  
  const handlerRedirect = () => {
     if(publisher === 'DC Comics' ){
         history.push('/dc')
     }

     if(publisher ==='Marvel Comics'){
        history.push('/marvel')
     }
     
      // tambien se puede usar history.goBack();
  }

  return (
        <>
       <div className = 'animate__animated animate__fadeIn'>
          <button className='btn btn-primary btn-paghero'
           onClick ={ () => handlerRedirect()}
          >
            Volver
          </button>
        <div className="card mb-3  animate__animated" id ='CardPeso'>
          <img src={`/assets/heroes/${id}.jpg`} className="card-img-top animate__animated  animate__fadeInDown" alt={superhero} />
          <div className="card-body">
              <h5 className="card-title"> Super heróe : {superhero}</h5>
              <p className="card-text">Compañia {publisher}</p>
              <p className="card-text">Nombre: {characters}</p>
              <p className="card-text">{alter_ego}</p>
              <p className="card-text">Primera aparicion : {first_appearance}</p>
            </div>
        </div>
        </div>
        </>
    )
}



/** Notas
 *  
 *  el useParams sirve para optener los dato que estan en la url
 * 
 */