import { useJoke } from './JokeVM'
import style from './Joke.module.scss'

const Joke = () => {
    const { joke, loading, error, handleGetJoke, handleDeleteJoke } = useJoke()

    console.log(joke, loading, error)
    return (
        <div>

            <h1 className={style.title}>Jokes</h1>
            <div className={style.addJoke}>
                <input type="text" className={style.addJoke__input} placeholder='Insert New Joke' />
                <button className={`${style.buttons} ${style.buttons__add}`}>Add</button>
            </div>
            <div className={style.jokeWrapper}>
                {loading ? <p>Loading...</p> : <p className={style.joke}>{joke.joke}</p>}

                <p>{error && <span>{error}</span>}</p>
                <button onClick={handleGetJoke} className={`${style.buttons} ${style.buttons__update}`}>Update</button>
                <button id={joke._id} onClick={handleDeleteJoke} className={`${style.buttons} ${style.buttons__delete}`}>Delete</button>
            </div>
        </div>
    )
}

export default Joke