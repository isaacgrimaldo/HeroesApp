import React from 'react'
import { Heroslist } from '../heros/HerosList'

export const HerosMarvelPhg = () => {
 
  const Marvel = 'Marvel Comics';

  return (
        <>
          <h1>Marvle Heros</h1>  
           <Heroslist publisher ={Marvel}/>
        </>
    )
}
