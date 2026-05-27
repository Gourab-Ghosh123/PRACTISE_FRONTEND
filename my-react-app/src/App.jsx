import { useState } from "react";

function App() {
  const [dark , setDark] = useState(false);

  return (
    <div>
      <button 
      onClick={() => setDark(!dark)}
      >Toggle Theme</button>

      <div
      style = {{
        backgroundColor : dark ? "black" : "white",
        height : "100vh",
  }}>
    </div>
    </div>

    
    
  );
}
export default App;