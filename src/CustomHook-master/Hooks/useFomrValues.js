import { useState } from "react"


export const UseFomrValues = (values) => {
  
       const [formsValues, setValues] = useState(values);

        
    const  handlerChangen =({target}) => {
        setValues({
             ...formsValues,
             [target.name]:target.value, // = [name]: value;
        });
  };

  const Reset = () => {
      setValues(values);
  }


      
  return [formsValues , handlerChangen , Reset];
}
