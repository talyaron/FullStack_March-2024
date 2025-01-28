
import { Link, useParams } from 'react-router'
import { useGetPokemonByNameQuery } from '../../../services/pokemon'

const Pokemon = () => {
    const { pokemonName = "ditto" } = useParams<{ pokemonName: string }>();
    const { data, error, isLoading } = useGetPokemonByNameQuery(pokemonName );

    console.log(data, error, isLoading);

    
    return (
        <div className="App">
            <div>
                <Link to="/pokemon/ditto">Ditto</Link>
                <Link to="/pokemon/charmander">Charmander</Link>
            </div>
            {error ? (
                <>Oh no, there was an error</>
            ) : isLoading ? (
                <>Loading...</>
            ) : data ? (
                <>
                    <h3>{data.species.name}</h3>
                    <img src={data.sprites.front_shiny ?? ''} alt={data.species.name} />
                </>
            ) : null}
        </div>
    )
}

export default Pokemon