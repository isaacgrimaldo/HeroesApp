import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import  PropTypes from 'prop-types'


export const PrivateRouters = ({
    logged,
    component: Component,
    ...rest
}) => {
    
   //rest optine todo los datos de la ruta
   localStorage.setItem('lastPaht',rest.location.pathname);
        //ultima busqueda
   localStorage.setItem('lastsearch',rest.location.search);
   
    return (
        <Route {...rest}
               component ={ (props) =>(
                     (logged)
                       ?(<Component {...props}/>)
                       :(<Redirect to='/login'/>)
               )}     
        />
    )
}

PrivateRouters.propTypes = {
    logged: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired,
}