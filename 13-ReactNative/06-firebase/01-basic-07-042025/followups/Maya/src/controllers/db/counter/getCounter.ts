import {doc, onSnapshot} from "firebase/firestore";
import { db } from "../config";

export function listenToCounter(setCounter: (counter: number) => void) {
    const counterRef = doc(db, "counters", "counter"); // Reference to the document in the "counters" collection
    onSnapshot(counterRef, (doc) => {
        const data = doc.data();
        if (data?.counter) {
            setCounter(data.counter);
        }
    });
}