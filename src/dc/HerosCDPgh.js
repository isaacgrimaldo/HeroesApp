import React from 'react'
import { Heroslist } from '../heros/HerosList'

export const HerosCDPgh = () => {

   const DC = 'DC Comics'

    return (
        <>
          <h1>Heros DC</h1>  
          <Heroslist  publisher ={DC}/>
        </>
    )
}
