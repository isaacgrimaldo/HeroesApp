import React, { useContext } from 'react';
import {
    BrowserRouter as Router,
    Switch,
  } 
from "react-router-dom";



import {ContextAuth} from '../auth/ContexAuht'
import { LoginPgh } from '../login/LoginPgh';
import { AppRoutersUser } from './AppRoutersUser';
import { PrivateRouters } from './PrivateRouters';
import { PublicRouters } from './publicRouters';
  
  export const AppRouter = () => {   
     
    const {user} = useContext(ContextAuth)
   
    console.log(user)
    return (
      <Router>
          <div>
          
           <Switch>  
             {
                    (user.logged)
                      ?<PrivateRouters   exact logged = {user.logged}  component ={AppRoutersUser}  />
                      :<PublicRouters  exact logged ={user.logged} component = {LoginPgh}  />
             }
                
                
           </Switch>
       
        </div>
      </Router>
    )
  }


/***
 *   Dentro del Router puede aver componentes que tenga otro switch  y tengan su propia estructura  de rutas
 *   
 *  1. push = nos redirije  a la ruta que programemos (con la posivilidad de volver atras)
 *  
 *  2.reoalce  
 *   
 */
