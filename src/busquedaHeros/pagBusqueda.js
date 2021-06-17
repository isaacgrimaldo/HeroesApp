import React, { useMemo } from 'react'
import queryString from'query-string'

import { UseFomrValues } from '../CustomHook-master/Hooks/useFomrValues'
import {CardHero} from '../heros/CardHero'
import { getHeroByName } from '../Helpers/getHeroByName'

export const pagBusqueda = ({history , location}) => {
 

      //para optenr lo querySelectors de la url
         const locationSearch = location.search ;
         const {q =''} = queryString.parse(locationSearch);
           
       const [formsValues , handlerChangen] =  UseFomrValues({nameHero: ''});
       const {nameHero} = formsValues; 

       const herosFilter = getHeroByName(nameHero)

        const HandelSubmit = (e) => {
            e.preventDefault()
            history.push(`?q=${nameHero}`) 
            console.log(herosFilter)
        };     

    return (
        <>
        <div className= 'container' style ={{ textAlign :'center'}}>
                     <h4>Busca a tu heróe favorito</h4>
                     <hr></hr>
                     <form>
                          <h5>Busca a tu heroe</h5>
                          <input  
                            type='text'
                            name ='nameHero'
                            placeholder='ingrese un heroe'
                            className='form-control'
                            value ={nameHero}
                            onChange ={handlerChangen}
                          />
                          <button
                            className ='btn btn-primary'
                            onClick = { (e) => HandelSubmit(e) }
                          >
                              Buscar
                          </button>
                     </form>
            </div>   
            <div className='herolist' >
                       {
                          (q === '')
                                 
                             ?
                             <div className = 'alert alert-danger'>
                                Error de busqueda
                             </div> 
                             :
                             herosFilter.map( hero => (
                              <CardHero Hero= {hero} key ={hero.id}/>
                              ))   
                       }              
                </div>
        </>   
     )
}



/*Nota : uso de queryString
  
  el uso de esta libreria es para optener los datos de la url de una manera mas eficiente si se estab hablamdo de cuerriselectors (?nv= valor )
 y hace que la refrescar la pagina lo datos no se borren
  
 */