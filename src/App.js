import logo from './logo.svg';
import './App.css';
import { Card } from "./Card";

function App() {
  const onCardClicked = () => {
    console.log('Hello')
  }

  return (
    <div className="App">
      <Card name={`Daniel`} onClicked={onCardClicked} />
    </div>
  );
}

export default App;
