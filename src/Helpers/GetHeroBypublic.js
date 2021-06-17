import { heroes } from "../Data/heros";

export const GetHeroByPublisher = (publiseher) => {
   
    const   VerifcPublissher = ['DC Comics' , 'Marvel Comics' ];
    
   if(!VerifcPublissher.includes(publiseher)){
       throw   new Error('Lista no encontrada') 
   }
    return heroes.filter( hero => hero.publisher === publiseher); 

};