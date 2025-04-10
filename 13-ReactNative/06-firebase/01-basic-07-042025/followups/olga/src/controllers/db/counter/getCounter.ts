import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../config";

export function listenCounter(setCounter: (counter: number) => void) {
  console.log("listenCounter works");
  const counterRef = doc(db, "counter", "counter");
  onSnapshot(counterRef, (doc) => {
    const data = doc.data();
    console.log(data);
    if (data && data.counter) {
      setCounter(data.counter);
    }
  });
}
