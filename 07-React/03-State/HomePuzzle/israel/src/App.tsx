import { useState, useEffect } from "react";
import "./App.css";
import Card from "./view/components/Card/Card";

function App() {
  const[url, setUrl] = useState<string | undefined>("");

  useEffect(() => {
    console.log("rendering");
    fetch("https://foodish-api.com/api/").then(async (response) => {
      const data = await response.json();
      console.log(data);
      setUrl(data.image);
      console.log(url);


    });


  }, []);
return <Card url={url}/>

}

export default App;
