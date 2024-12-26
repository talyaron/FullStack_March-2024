import styles from './Joke.module.scss';
import { useJoke } from './JokeVM';
import { useState } from 'react';

const Joke = () => {
    const { joke, error, loading, handleGetJoke, addJoke, deleteJoke, editJoke } = useJoke();

    const [newJoke, setNewJoke] = useState("");
    const [jokeId, setJokeId] = useState("");
    const [updatedJoke, setUpdatedJoke] = useState("");

    const handleAddJoke = () => {
        if (!newJoke.trim()) {
            alert("Please enter a valid joke.");
            return;
        }
        addJoke({ content: newJoke });
        setNewJoke(""); // Clear the input after adding
    };

    const handleDeleteJoke = () => {
        if (!jokeId.trim()) {
            alert("Please enter a valid joke ID.");
            return;
        }
        deleteJoke(jokeId);
        setJokeId(""); // Clear the input after deleting
    };

    const handleEditJoke = () => {
        if (!jokeId.trim() || !updatedJoke.trim()) {
            alert("Please enter both a valid joke ID and updated content.");
            return;
        }
        editJoke(jokeId, { content: updatedJoke });
        setUpdatedJoke(""); // Clear the input after editing
    };

    return (
        <div className={styles.joke}>
            <h1>Joke App</h1>
            {loading ? (
                <span>Loading...</span>
            ) : (
                <p>{joke?.joke || "No joke available."}</p>
            )}
            {error && <div className={styles.error}>Error: {error}</div>}
            <button onClick={handleGetJoke}>Reload Joke</button>

            <div className={styles.addJoke}>
                <h2>Add Joke</h2>
                <input
                    type="text"
                    value={newJoke}
                    onChange={(e) => setNewJoke(e.target.value)}
                    placeholder="Enter a new joke"
                />
                <button onClick={handleAddJoke}>Add Joke</button>
            </div>

            <div className={styles.deleteJoke}>
                <h2>Delete Joke</h2>
                <input
                    type="text"
                    value={jokeId}
                    onChange={(e) => setJokeId(e.target.value)}
                    placeholder="Enter the joke ID to delete"
                />
                <button onClick={handleDeleteJoke}>Delete Joke</button>
            </div>

            <div className={styles.editJoke}>
                <h2>Edit Joke</h2>
                <input
                    type="text"
                    value={jokeId}
                    onChange={(e) => setJokeId(e.target.value)}
                    placeholder="Enter the joke ID to edit"
                />
                <input
                    type="text"
                    value={updatedJoke}
                    onChange={(e) => setUpdatedJoke(e.target.value)}
                    placeholder="Enter the updated joke content"
                />
                <button onClick={handleEditJoke}>Edit Joke</button>
            </div>
        </div>
    );
};

export default Joke;
