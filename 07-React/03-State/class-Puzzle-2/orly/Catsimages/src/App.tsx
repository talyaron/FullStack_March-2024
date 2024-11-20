import { useState, useEffect } from 'react'
import Card from './view/components/card'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [url, setUrl] = useState<string | undefined>("");
  const colors = ["purple", "blue", "pink", "yellow"];

  useEffect(() => {
    console.log("rendering");
    fetch("https://api.thecatapi.com/v1/images/search").then(
      async (response) => {
        response.json().then((data) => {
          console.log(data);
          setUrl(data[0].url);
          console.log(data[0].url);
        });
      }
    );
  }, []); 
  return (
    <div onClick={() => setCount((count) => count + 1)}>
      test {count}
      {colors.map((color) => (
        <Card url ={url} color={color} />
      ))}
    </div>
  );
}   

export default App;
