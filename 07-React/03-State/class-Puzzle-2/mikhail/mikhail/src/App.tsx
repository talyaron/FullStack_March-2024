import { useState , useEffect} from 'react'
import './App.scss'
import CatComponent from './components/cats/CatComponent';

function App() {
  const [url, setUrl] = useState<string | undefined>("");
  const colors = ["red", "blue", "green"];
  const [cards, setCard] = useState(url);
  
  
  useEffect(() => {
    fetch("https://api.thecatapi.com/v1/images/search?limit=10").then(
      async (response) => {
        response.json().then((data) => {
          const catImg: { url: string; color: string }[] = [];
          data.forEach(cat => {
            catImg.push(cat.url,colors[0]);
          });
          
          setCard(catImg);
          console.log(data[0].url);
        });
      }
    );
  }, []); 

  return (
    <div >
      
      {catImg.map((catImg) => (
        <CatComponent url={url} color={color} />
      ))}
    </div>
  );
}

export default App
