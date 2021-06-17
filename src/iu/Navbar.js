import React, { useContext } from 'react'
import { Link, NavLink , useHistory } from 'react-router-dom'
import { ContextAuth } from '../auth/ContexAuht'
import { Types } from '../types/types'


export const Navbar = () => {

   const {user , dispatch} = useContext(ContextAuth)
  
    //uso de un hook de router-dom para optener el histoty pues como no es una ruta del router este no le pasa lo argumentos necesatios para cambiar de ruta
    const history = useHistory()

   const handelLoggout = () => {
  
        dispatch({
             type:Types.loggout,
        }); 

        history.push('/login');
   }


    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            
            <Link 
                className="navbar-brand" 
                to="/home"
            >
                Asociaciones
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/dc"
                    >
                        DC
                    </NavLink>
                    <NavLink
                       activeClassName="active"
                       className="nav-item nav-link" 
                       exact
                       to= '/busqueda'
                    >
                     Busqueda     
                    </NavLink>
                      <samp className = 'nameUser'>{user.name}</samp>
                </div>
            </div>
                 
            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                <ul className="navbar-nav ml-auto">
                    <button
                        className="nav-item nav-link  loggin btn"
                        onClick = {handelLoggout} 
                    >
                        Logout
                    </button>
                </ul>
            </div>
        </nav>
    )
}