import { useState, useEffect } from "react";
import { JokeModel } from "./jokeModel";

interface UseJokeOutput {
  joke: JokeModel | null;
  error: string | null;
  loading: boolean;
  handleGetJoke: () => void;
}

export function useJoke(): UseJokeOutput {
  const [joke, setJoke] = useState<JokeModel | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  function getJoke() {
    setLoading(true);
    setError(null); 
    fetch("http://localhost:3000/api/jokes/get-random-joke")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch joke");
        }
        return response.json();
      })
      .then((data) => {
        setJoke(data);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  useEffect(() => {
    getJoke();
  }, []);

  function handleGetJoke() {
    getJoke();
  }

  return {
    joke,
    error,
    loading,
    handleGetJoke,
  };
}
