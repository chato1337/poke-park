import React, {useContext} from 'react'
import PokemonContext from '../../context/PokemonContext'

const PokeDexDisplay = () => {
    const {pokemonSelected} = useContext(PokemonContext)
    
    return (
			<div className="display-container">
				<div className="display-image">
					<img
						src={pokemonSelected.sprites.front_default}
						alt={pokemonSelected.name}
						title={pokemonSelected.name}
					/>
					<span>{pokemonSelected.name}</span>
				</div>
				<div className="display-info">
					<ul>
                        {
                            pokemonSelected.abilities.map(ab => {
                                return (
                                    <li key={ab.slot}>{ab.ability.name}</li>
                                )
                            })
                        }
                    </ul>
				</div>
			</div>
		);
}

export default PokeDexDisplay
