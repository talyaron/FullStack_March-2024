import { useJoke } from './JokeMV';

const Joke = () => {
    const { joke, error, loading, handleGetJoke } = useJoke();

  return (
    <div>
        {loading?<span>Loading...</span>:<p>{joke.joke}</p>}
        {error && <div>{error}</div>}
        <button onClick={handleGetJoke}>Get new Joke</button>
    </div>
  )
}

export default Joke