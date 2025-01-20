
import { useState } from "react";
import styles from "./App.module.scss";

function App() {

  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [delta, setDelta] = useState({ x: 0, y: 0 })

  function handleDragEnd(event: React.DragEvent<HTMLDivElement>) {
    console.log("end", event.clientX, event.clientY)
    console.log("delta", delta.x, delta.y)
    // setDelta({ x: event.clientX - position.x, y: event.clientY - position.y })
    setPosition({ x: event.clientX, y: event.clientY });
    // console.log(event.clientX, event.clientY, event.screenX, event.screenY, event.pageX, event.pageY)
  }
  const handleDragStart = (event: React.DragEvent<HTMLDivElement>) => {
    setDelta({ x: event.clientX - position.x, y: event.clientY - position.y })
    console.log("delta", delta.x, delta.y)

    console.log("previous", position.x, position.y)
    console.log("delta", delta.x, delta.y)
    console.log("end", event.clientX, event.clientY)
    console.log("current", event.clientX + position.x, event.clientY + position.y)

    // console.log(event.clientX, event.clientY, event.screenX, event.screenY, event.pageX, event.pageY)
  }
  function handleDrag(event: React.DragEvent<HTMLDivElement>) {
    // console.log(event)

  }

  return (
    <>
      <div
        className={styles.box}
        draggable
        onDragEnd={handleDragEnd}
        onDrag={handleDrag}
        style={{ left: position.x, top: position.y }}
        onDragStart={handleDragStart}
      />

    </>
  )
}

export default App
