import { useEffect, useRef, useState } from "react";


const connect = () => console.log('Conneting');
const disconnect = () => console.log('Disconnecting');

function App() {
  
  useEffect(() => {
    connect();

    return () => disconnect();
  })

  return <div></div>
}

export default App;
