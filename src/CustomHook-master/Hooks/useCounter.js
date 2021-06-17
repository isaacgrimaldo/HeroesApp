import { useState } from "react"

export const useCounter = (initialState = 10) => {
      
      const [counter, setstate] = useState(initialState)
     
        const Incrementar = (Rango) => {
                setstate( counter + Rango)
        }

        const Decremetar = (Rango) => {
            setstate( counter - Rango)
        }
        
        const Reset = () => {
            setstate( initialState)
        }

 return {  counter,  Incrementar , Decremetar , Reset }

}