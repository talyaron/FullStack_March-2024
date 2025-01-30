import React from 'react'
import Pokemon from '../../components/pokemon/Pokemon'
import './HomePokemon.scss'
import { useDispatch, useSelector } from 'react-redux'
import { selectRandomUser } from '../../../model/slices/randomUserSlice'
import { useGetRandomUserNameQuery } from '../../../services/randomUser'


const HomePokemons = () => {
    const pokemonName = useSelector(selectRandomUser)
    const { data, error, isLoading } = useGetRandomUserNameQuery('');

    return (

        <>
            <div className='home-wrapper'>
                <h1 className='text-3xl text-center'>Choose your Pokemon!</h1>
                {data &&
                    <div >
                        <img src={data.results[0].picture.large}
                            alt={data!.results[0].name.first} />
                    </div>
                }
            </div>
            <div>

                <Pokemon name='bulbasaur' left='2vw' bottom='5vh' />
                <Pokemon name='charmander' left='12vw' bottom='5vh' />
                <Pokemon name='squirtle' left='22vw' bottom='5vh' />
                <Pokemon name='pikachu' left='32vw' bottom='5vh' />
                <Pokemon name='jigglypuff' left='42vw' bottom='5vh' />

            </div>
        </>
    )

}

export default HomePokemons