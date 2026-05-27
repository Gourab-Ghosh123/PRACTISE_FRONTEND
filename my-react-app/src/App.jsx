import  { useState } from "react";

function App() {

  const [email , setEmail] = useState("");
  const [password , setPassword] = useState("");

  function handleSubmit(e) {
    e.PreventDefault();
    alert("Form Submitted")
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="Enter email..."
        onChange = {(e) => setEmail(e.target.value)} />

        <br /><br />
        <br /><br />

        <input type="Password" placeholder="Enter Password"
        onChange={(e) => setPassword(e.target.value)}/>

        <br /><br />
        <br /><br />

        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default App;