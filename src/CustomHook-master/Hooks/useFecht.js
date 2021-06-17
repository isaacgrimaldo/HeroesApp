import { useEffect, useRef, useState } from "react"


export const useFecht = (url) => {
      
     const CanShow = useRef(true)
       
      const [Datos, setDatos] = useState({
           data:null,
           loading:true,
           error: null,
      })
  

     useEffect(() => {
     
          return () => {
             CanShow.current = false
          }
     }, [])


     useEffect(() => {
         
          fetch(url)
             .then( resp => resp.json())
             .then(datos => {
     
                         if(CanShow.current){ //para cuando el elemento no exits no se llame la setData para no tener problemas cuando el objeto no este montando 

                              setDatos({
                              data:datos,
                              loading:false,
                              error: null,  
                              })
                             }
             })

     }, [url])  
        
     return Datos 
     
}


/** Notas
 *  
 *  si la peticion que use effec  se complreta pero el componete ya no esta a la vista de usaurio
 *  esto genera un error hara fallar nuesta aplicacion, 
 *  
 *  par eso puede usarse el useRef para determinar si este elemeto sigue construido o no
 *  
 * de esta froma nuestra pruebas puden pasar correctamenteloas 
 *  
 */