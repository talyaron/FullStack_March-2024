import React, { useEffect, useState } from "react";

interface UseJokeOutput {
    joke: { joke: string, _id: string };
    loading: boolean;
    error: any;
    handleGetJoke: () => void;
    handleDeleteJoke: () => void;
}


export const useJoke = (): UseJokeOutput => {
    try {

        const [joke, setJoke] = useState<{ joke: string, _id: string }>({ joke: '', _id: '' });
        const [loading, setLoading] = useState<boolean>(true);
        const [error, setError] = useState();

        function getJoke() {
            try {
                fetch('http://localhost:3000/api/jokes/get-random-joke')
                    .then(response => response.json())
                    .then(data => {
                        console.log(data)
                        setJoke(data)
                        setLoading(false)
                    })
                    .catch(error => {
                        setError(error)
                        setLoading(false)
                    })
            } catch (error) {
                console.log(error)
            }
        }
        function handleGetJoke() {
            getJoke();
        }

        function handleDeleteJoke() {
            console.log(joke)
            fetch('http://localhost:3000/api/jokes/delete-joke', {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ _id: joke._id })
            })
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                    getJoke()
                })
                .catch(error => {
                    console.log(error)
                })
        }


        useEffect(() => {
            getJoke()
        }, [])
        return { joke, loading, error, handleGetJoke, handleDeleteJoke }
    } catch (error: any) {
        return {
            joke: { joke: '', _id: '' },
            loading: false,
            error: error.message,
            handleGetJoke: () => { },
            handleDeleteJoke: () => { }
        }
    }
}