import { useEffect, useState } from "react";
import { JokeModel } from "./jokeModel";

interface UseJokeOutput {
    joke: JokeModel,
    error: string | null,
    loading: boolean,
    handleGetJoke: () => void,
    handleAddJoke: (joke: JokeModel) => void
}

export function useJoke(): UseJokeOutput {
    try {
        const [joke, setJoke] = useState<JokeModel>({} as JokeModel);
        const [error, setError] = useState<string | null>(null);
        const [loading, setLoading] = useState<boolean>(false);

        useEffect(() => {
            getJoke();
        }, []);

        function getJoke() {
            setLoading(true);
            fetch("http://localhost:3000/api/jokes/get-random-joke")
                .then(response => response.json())
                .then(data => {
                    setJoke(data);
                    setLoading(false);
                }).catch(error => {
                    setError(error.message);
                });
        }

        function handleGetJoke() {
            getJoke();
        }

        function addJoke(joke: JokeModel) {
            fetch("http://localhost:3000/api/jokes/add-joke", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(joke)
            })
                .then(response => response.json())
                .then(data => {
                    setJoke(data);
                }).catch(error => {
                    setError(error.message);
                });
        }

        function handleAddJoke(joke: JokeModel) {
            addJoke(joke);
        }

        return {
            joke,
            error,
            loading,
            handleGetJoke,
            handleAddJoke
        }
    } catch (error: any) {
        return {
            joke: {} as JokeModel,
            error: error.message,
            loading: false,
            handleGetJoke: () => { },
            handleAddJoke: () => { }
        }
    }
}