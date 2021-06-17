import React, { useContext } from 'react'
import { ContextAuth } from '../auth/ContexAuht'
import { Types } from '../types/types'

export const LoginPgh = ({history}) => {
    
 
    //nunca debe de estar dentro de una funcion
    const {dispatch} = useContext(ContextAuth)

    const LoginEntert = () => {
    
        // history.push('/') // este no manda la ruta establecida pero porder haceder a la aneterior con la barra de navegacion de chorme
       // history.replace('/') // este hace lo mismo pero con la retricion de que no puede volver atras

       //tarea de autuentificacion 
       
       dispatch({
          type: Types.logged,  
          payload:{ name : 'Isaac'},
       })
      
       //optemos la ultima localizacion de los usuario
       const lastPath = localStorage.getItem('lastPaht') || '/' ;
       
       //para mostrar la ultima busqueda 
       if(lastPath == '/busqueda'){
           if(localStorage.getItem('lastsearch')){
                 let lastSearch = localStorage.getItem('lastsearch');
                 history.replace(lastPath + lastSearch )
           }
       }

       history.replace(lastPath);
    }
    
    return (
        <> 
          <div className ='container'>
           <h1>Login</h1> 
            
              <button className = 'btn btn-primary '
                      onClick ={  () => LoginEntert() }
              >
                     Login
             </button>
          </div>
        </>
    )
}

/** Notas
 *  
 *   el Rourter no da muchas funcionalidades que pasa a sus  componentes hijos esto se encuentrar en la ventana de componetes
 *   1.push
 *   2.replace
 */
