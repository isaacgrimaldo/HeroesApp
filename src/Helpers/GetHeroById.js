import { heroes } from "../Data/heros";

export const GetHeroById = (HeroId) => {
  
     return heroes.find( heros => heros.id ===  HeroId);
};