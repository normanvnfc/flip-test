import { useEffect, useState } from "react";
import ListItem from "./component/ListItem/ListItem";
const App = () => {  
  const [transactions, setTransactions] = useState([]);
  const url = 'https://nextar.flip.id/frontend-test';
  const getUsers = async() => {
    const response = await fetch(url);
    const data = await response.json();
    const transactions = [];
    for (const key in data) {
      const transaction = {
        id: key,
        ...data[key]
      }
      transactions.push(transaction);        
    }   
    setTransactions(transactions)
    console.log(transactions);
  }

  useEffect(() => {    
    getUsers()
  }, []);
  return (
    <div className="App">
      <ListItem data={transactions} />
    </div>
  );
}

export default App;
