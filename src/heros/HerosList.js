import { GetHeroByPublisher } from "../Helpers/GetHeroBypublic";
import PropTypes from 'prop-types'
import { CardHero } from "./CardHero";


export const Heroslist = ({publisher}) => {

    const Heros  =  GetHeroByPublisher(publisher)

    return (
        <>
            <ul className='container'>
                {
                     Heros.map( hero  => (
                         <CardHero Hero = {hero} key ={hero.id}/>
                     ))
                }
            </ul>
        </>
    )
}

Heroslist.propTypes ={
     publisher: PropTypes.string.isRequired
}