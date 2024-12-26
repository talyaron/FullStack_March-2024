import { useEffect, useState } from "react";
import { JokeModel } from "./JokeModel";

interface UseJokeOutput {
    joke: JokeModel | null;
    error: string | null;
    loading: boolean;
    handleGetJoke: () => void;
    addJoke: (newJoke: JokeModel) => void;
    deleteJoke: (id: string) => void;
    editJoke: (id: string, joke: JokeModel) => void;
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


    function addJoke(newJoke: JokeModel) {
        setLoading(true);
        setError(null);
        fetch("http://localhost:3000/api/jokes/add-joke", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newJoke),
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Failed to add joke");
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



    function deleteJoke(id: string) {
        setLoading(true);
        setError(null);
        fetch(`http://localhost:3000/api/jokes/delete-joke/${id}`, {
            method: "DELETE",
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Failed to delete joke");
                }
                return response.json();
            })
            .then(() => {
                setJoke(null); // Clear joke after deletion
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => {
                setLoading(false);
            });
    }

    function editJoke(id: string, joke: JokeModel) {
        setLoading(true);
        setError(null);
        fetch(`http://localhost:3000/api/jokes/update-joke/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(joke),
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Failed to update joke");
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
        addJoke({} as JokeModel);
        deleteJoke("");
        editJoke("", {} as JokeModel);
    }

    return {
        joke,
        error,
        loading,
        handleGetJoke,
        addJoke,
        deleteJoke,
        editJoke,
    };
}

export default useJoke;
