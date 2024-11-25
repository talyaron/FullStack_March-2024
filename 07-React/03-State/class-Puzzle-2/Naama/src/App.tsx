import { useState, useEffect } from "react";
import "./App.css";
import Card from "./view/components/card/Card";

interface ColorImg {
  url: string;
  color: string;
}

function App() {
  const [count, setCount] = useState(0);
  const [url, setUrl] = useState<string | undefined>("");
  const colors = [
    "red",
    "blue",
    "green",
    "red",
    "blue",
    "green",
    "red",
    "blue",
    "green",
    "yellow",
  ];
  const [array, setArray] = useState<ColorImg[]>([]);

  useEffect(() => {
    console.log("rendering");
    fetch("https://api.thecatapi.com/v1/images/search?limit=10").then(
      async (response) => {
        response.json().then((data) => {
          console.log(data);
          const _array: ColorImg[] = [];
          for (let i = 0; i < 10; i++) {
            _array[i] = {
              url: data[i].url,
              color: colors[i],
            };
          }
          setArray(_array);
          //console.log(data[0].url);
        });
      }
    );
  }, []); // run only once when the component is mounted
  // fetch('/api/hello') -> renders the response from the server

  return (
    <div onClick={() => setCount((count) => count + 1)}>
      test {count}
      {array.map((array) => (
        <Card url={array.url} color={array.color} />
      ))}
    </div>
  );
}

export default App;
