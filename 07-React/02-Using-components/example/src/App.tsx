import "./App.css";

//component
import Header from "./view/components/header/Header";
import Card from "./view/components/card/Card";

function App() {
 
  return (
    <>
      <Header />
      <Card title={"Michael"} />
      <Card title={"Olga"}/>
      <Card title={"Maya"} />
      <Card title={"Orly"}/>
      <Card title={"Israel"}/>
  
    </>
  );
}

export default App;
