import { doc, setDoc } from "firebase/firestore";
import { db } from "../config";

export function setCounterTODB(counter: number) {
  const counterRef = doc(db, "counter", "counter");
  setDoc(counterRef, { counter: counter });
  console.log("Counter set to", counter);
}
