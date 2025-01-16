
import { useState } from "react";
import styles from "./App.module.scss";

function App() {

  const [position, setPosition] = useState({ x: 0, y: 0 })


  function handleDragEnd(event: React.DragEvent<HTMLDivElement>) {
    console.log(event)
    setPosition({ x: event.clientX, y: event.clientY });
  }

  function handleDrag(event: React.DragEvent<HTMLDivElement>) {
    console.log(event)
  }

  return (
    <>
      <div
        className={styles.box}
        draggable
        onDragEnd={handleDragEnd}
        onDrag={handleDrag}
        style={{ left: position.x, top: position.y }}
      />

    </>
  )
}

export default App
