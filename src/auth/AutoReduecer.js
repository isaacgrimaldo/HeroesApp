import { Types } from "../types/types";

export const AuthReducer = (state = {} , action) => {
   
     switch (action.type) {
         case Types.logged
                  :return {
                       ...action.payload,
                        logged: true
                  };

        case Types.loggout: 
                 return {  
                     name: '',
                     logged: false
                 }         
     
         default:
               return state ;
     }
}