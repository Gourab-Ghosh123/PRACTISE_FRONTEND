import {useState} from "react";

function App() {
  const [search , setSearch] = useState("");

  const users = [
    "gourab" , "herry" , "tom" , 'jerry'
  ]

  const filteredUsers = users.filter((user) => {
    return user.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div>
      <input type="text" placeholder="Search user..." value={search} onChange={((e) => setSearch(e.target.value0))}/>

      {
        filteredUsers.map((user , index) => (
          <h1 key = {index}>{user}</h1>
        ))
      }
    </div>
  )
}

export default App;