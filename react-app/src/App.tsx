import ListGroup from "./components/ListGroup";
import './App.css';

function App() {

  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  return (
    <div>
      <ListGroup items={items} heading="Cites" onSelectItem={() => {}} />
    </div>
  );
}

export default App;
