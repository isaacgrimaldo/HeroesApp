import { heroes } from "../Data/heros";


export const getHeroByName = (name = '') => {
    
  
   let namelo = name.toLowerCase(); 
   let heroSearch = heroes.filter(hero => hero.superhero.toLowerCase().includes(namelo) )   ; 

    if(name === ''){
        return [];
    }

    return heroSearch;
   
}
