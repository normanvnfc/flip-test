import { useEffect, useState } from "react";
import Filter from "../component/Filter/Filter";
import ListItem from "../component/ListItem/ListItem";

const Home = () => {
  const [transactions, setTransactions] = useState([]);
  const [searchTerm, setSearchTerm] = useState("")
  const [searchResults, setSearchResults] = useState([])
  const url = 'https://nextar.flip.id/frontend-test';
  const getData = async() => {
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
  const searchHandler = (searchTerm) => {
    setSearchTerm(searchTerm)
    if (searchTerm !== "") {
      const newTransactionList = transactions.filter((item) => {
        const output = [item.beneficiary_bank, item.sender_bank, item.beneficiary_name ]        
        return Object.values(output).join("").toLowerCase().includes(searchTerm.toLowerCase())
      })
      setSearchResults(newTransactionList)      
    } else {
      setSearchResults(transactions)
    }
  }

  useEffect(() => {
    getData()
  }, []);
  return (
    <div >      
      <Filter term={searchTerm} searchKeyword={searchHandler}/>
      <ListItem transactions={ searchTerm.length < 1 ? transactions : searchResults} />
    </div>
  );
}

export default Home;