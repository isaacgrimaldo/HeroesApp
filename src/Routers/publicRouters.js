import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import  PropTypes from 'prop-types'


export const PublicRouters = ({
    logged,
    component:Component,
    ...rest
}) => {
    return (
        <Route {...rest}
               component ={ (props) => (
                     (!logged)
                      ?<Component {...props}/>
                      :<Redirect  to ='/'/>
               )}
              
        />
    )
}
PublicRouters.propTypes = {
    logged: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired,
}