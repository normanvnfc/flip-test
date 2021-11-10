import { useEffect, useState } from "react";
import ListItem from "../component/ListItem/ListItem";

const Home = () => {
  const [transactions, setTransactions] = useState([]);
  const [search, setSearch] = useState("")
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
  const searchHandler = (event) => {
    setSearch(event.target.value)
  }

  useEffect(() => {    
    getUsers()
  }, []);
  return (
    <div >
      <div className="form">
        <div className="input-wrapper">
          <input type="text" value={search} onChange={searchHandler}/>
          {search}
        </div>
      </div>
      <ListItem transactions={transactions} />
    </div>
  );
}

export default Home;