import { useState } from "react";

function App() {
  const [text, setText] = useState();
  return (
    <div className="app">
      <h1>Salam,mən {text}</h1>
      <button onClick={() => setText("Nəbiyəm.")}>0</button>
      <button onClick={() => setText("əlaçıyam.")}>1</button>
      <button onClick={() => setText("yaxşı oxuyanam.")}>2</button>
      <button onClick={() => setText("orta oxuyanam.")}>3</button>
    </div >
  );
}

export default App;
