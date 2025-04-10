import { setDoc, doc } from "firebase/firestore";
import { db } from "../config"; // Import the initialized Firebase app


export function setCounterToDB(counter: number) {

    const counterRef = doc(db, "counter", "counter"); // reference to the document in the database

    //save in the database
    setDoc(counterRef, {
        counter: counter
    });
}