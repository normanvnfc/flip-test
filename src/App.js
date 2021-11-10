import { useEffect, useState } from "react";
import ListItem from "./component/ListItem/ListItem";
const App = () => {
  const url = 'https://api.github.com/users';
  const [users, setUsers] = useState([]);

  const getUsers = async() => {
    const response = await fetch(url);
    const users = await response.json();
    setUsers(users)
    console.log(users)
  }

  useEffect(() => {
    getUsers()
  }, [])
  return (
    <div className="App">
      <ListItem data={users} />
    </div>
  );
}

export default App;
