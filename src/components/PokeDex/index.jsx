import React, {useState, useContext} from 'react'
import PokemonContext from '../../context/PokemonContext';
import PokeDexDisplay from './PokeDexDisplay';
import './pokedex_styles.scss'
import PokeApi from '../../constants/main_constants'

const PokeDex = () => {
    const [showHideState, setShowHideState] = useState(false);
	const {pokemonSelected, getPokemon} = useContext(PokemonContext)

    const handleClick = () => {
			setShowHideState(!showHideState);
		};

	const handleRandom = () => {
		let randomNumber = Math.floor(Math.random()*50)
		let url = `${PokeApi.SINGLE_POKE}${randomNumber}/`;
		getPokemon({url: url})
	}

	const handleNav = (num) => {
		
	}

    return (
			<div
				className={
					showHideState ? "pokedex-container show" : "pokedex-container hide"
				}
			>
				<div className="pokedex">
					<div className="pokedex__display">
						{pokemonSelected ? (
							<PokeDexDisplay />
						) : (
							<h2>selecciona un poke-mondongo para empezar</h2>
						)}
					</div>
					<div className="pokedex__buttons">
						<button onClick={() => handleRandom()}>Random pokemon</button>
						<button>next</button>
						<button>prev</button>
					</div>
				</div>
				<div onClick={(e) => handleClick()} className="tab-view">
					{showHideState ? "hide" : "show"}
				</div>
			</div>
		);
}

export default PokeDex
