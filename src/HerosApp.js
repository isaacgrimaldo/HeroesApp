import React, { useEffect, useReducer } from 'react'

import {AppRouter} from './Routers/AppRouter'
import {AuthReducer} from './auth/AutoReduecer'
import { ContextAuth } from './auth/ContexAuht';

const init = () => {

    return JSON.parse (localStorage.getItem('user')) || { logged: false , name:'' };
}


export const HerosApp = () => {
    
     const [user, dispatch] = useReducer(AuthReducer, {  }, init)
        
     useEffect(() => {
           localStorage.setItem('user', JSON.stringify(user))
     }, [user])

    return (
        <> 
           <ContextAuth.Provider value = {{user , dispatch}}>
            <AppRouter/>
           </ContextAuth.Provider>
        </>
    )
}
