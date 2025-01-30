import React, { FC } from 'react'
import { useGetRandomUserNameQuery } from '../../../services/randomUser'
import './Pokemon.scss'
import { useDispatch } from 'react-redux'

interface PokemonProps {
    name: string,
    left: string,
    bottom: string
}

const Pokemon: FC<PokemonProps> = ({ name, left, bottom }) => {
    const { data, error, isLoading } = useGetRandomUserNameQuery(name);
    const dispatch = useDispatch();
    console.log(data)
    const handleClickImg = () => {
        dispatch({ type: 'randomUser/setRandomUserName', payload: data!.results[0].name })
    }
    return (
        <>
            {error ? <div>{JSON.stringify(error)}</div> : null}
            {isLoading ? <div>Loading...</div> : null}
            {data &&
                data ?
                <div
                    className='random-user-wrapper'
                    style={{
                        bottom: bottom,
                        left: left
                    }}
                    onClick={handleClickImg}>
                    <img src={data.results[0].picture.large}
                        alt={data.results[0].name.first}
                        style={{
                            width: '90%',
                            justifyContent: 'center',
                            display: 'flex'
                        }} />
                    <label>{data.results[0].name.first + data.results[0].name.last}</label>
                </div >
                : 'Loading...'}
        </>
    )
}

export default Pokemon