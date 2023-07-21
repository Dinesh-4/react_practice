import { useState } from "react";

function App() {
  const [cart, setCard] = useState({
    discount: .1,
    items: [
      {id: 1, tittle: 'Product 1', quantity: 1},
      {id: 1, tittle: 'Product 1', quantity: 1}
    ]
  });

  const handleClick = () => {
    setCard({ ...cart, items: cart.items.map(item => item.id === 1 ? { ...item, quantity: item.quantity +1 } : item)})
  } 

  return (
    <div>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default App;
