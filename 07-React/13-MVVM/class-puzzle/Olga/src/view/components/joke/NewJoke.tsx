import { useState } from 'react';
import { useJoke } from './JokeMV';

const NewJoke = () => {
    const { handleAddJoke } = useJoke();
    const [jokeText, setJokeText] = useState<string>('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (jokeText.trim() !== '') {
            const joke = { joke: jokeText };
          handleAddJoke(joke);
          setJokeText('');
        }
      };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={jokeText}
        onChange={(e) => setJokeText(e.target.value)}
        placeholder="Enter your joke"
      />
      <button type="submit">Add Joke</button>
    </form>
  )
}

export default NewJoke