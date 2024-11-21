import { useState, useEffect } from "react";
import "./App.css";
import Card from "./view/components/Card";

// const urls = [
//   "https://some-random-api.com/animal/cat",
//   "https://some-random-api.com/animal/dog",
//   "https://some-random-api.com/animal/panda",
//   "https://some-random-api.com/animal/fox",
//   "https://some-random-api.com/animal/red_panda",
//   "https://some-random-api.com/animal/koala",
//   "https://some-random-api.com/animal/bird",
//   "https://some-random-api.com/animal/raccoon",
// ];

function App() {
  
  const endpoints = [
    { title: "Cats", url: "https://some-random-api.com/animal/cat" },
    { title: "Dogs", url: "https://some-random-api.com/animal/dog" },
    { title: "Pandas", url: "https://some-random-api.com/animal/panda" },
    { title: "Foxs", url: "https://some-random-api.com/animal/fox" },
    { title: "Red Pandas", url: "https://some-random-api.com/animal/red_panda" },
    { title: "Koalas", url: "https://some-random-api.com/animal/koala" },
    { title: "Birds", url: "https://some-random-api.com/animal/bird" },
    { title: "Raccoons", url: "https://some-random-api.com/animal/raccoon" },
  ];

  const [data, setData] = useState(
    Array(endpoints.length).fill({ title: "", image: "", fact: "" })
  );

  const fetchData = async (title: string, url: string, index: number) => {
    const response = await fetch(url);
    const result = await response.json();
    setData((prevData) => {
      const newData = [...prevData];
      newData[index] = { title, image: result.image, fact: result.fact };
      return newData;
    });
  };

  useEffect(() => {
    endpoints.forEach((endpoint, index) => fetchData(endpoint.title, endpoint.url, index));
  }, []);

  return (
    <>
    <h1>Interesting Facts About Animals</h1>
    <div className="grid">
      {data.map((item, index) => (
        <Card
          key={index}
          title={item.title}
          image={item.image}
          fact={item.fact}
          onUpdate={() => fetchData(item.title, endpoints[index].url, index)}
        />
      ))}
    </div>
    </>
  );
}

export default App;
