import React from 'react'
import { Navbar } from '../iu/Navbar'

import {Switch , Route, Redirect} from 'react-router-dom' 
import { HerosCDPgh } from '../dc/HerosCDPgh'
import { HerosMarvelPhg } from '../marvel/HerosMarvelPhg'
import { HerosPgh } from '../heros/HerosPgh'
import { pagBusqueda } from '../busquedaHeros/pagBusqueda'

export const AppRoutersUser = () => {
    return (
        <>
            <Navbar/> 
            <div className ='container'>
                 <Switch>
                    <Route  exact path = '/marvel' component ={HerosMarvelPhg}/>
                    <Route exact  path='/hero/:heroId' component ={HerosPgh}/>
                    <Route exact path ='/dc' component = {HerosCDPgh}/>
                    <Route  exact path ='/busqueda'  component = {pagBusqueda}  />
                   

                   {/* si la ruta pedida no existe no manda directamente a la vista de este componente */}
                   <Redirect  to = '/marvel'  />
                </Switch>    
            </div>  
        </>
    )
}
