import { useEffect, useState } from "react";
import Filter from "../component/Filter/Filter";
import ListItem from "../component/ListItem/ListItem";

const Home = () => {
  const [transactions, setTransactions] = useState([]);
  const [searchTerm, setSearchTerm] = useState("")
  const [selectTerm, setSelectTerm] = useState("")
  const [searchResults, setSearchResults] = useState([])  

  const searchHandler = (searchTerm) => {
    setSearchTerm(searchTerm)
    if (searchTerm !== "") {
      const newTransactionList = transactions.filter((item) => {
        const output = [item.beneficiary_bank, item.sender_bank, item.beneficiary_name]
        return Object.values(output).join("").toLowerCase().includes(searchTerm.toLowerCase())
      })
      setSearchResults(newTransactionList)
    } else {
      setSearchResults(transactions)
    }
  }

  const selectHandler = (selected) => {
    setSelectTerm(selected)
  }

  useEffect(() => {
    fetch(
      'https://nextar.flip.id/frontend-test'
    ).then((response) => {
      return response.json();
    }).then((data) => {
      const transactions = [];
      for (const key in data) {
        const transaction = {
          id: key,
          ...data[key]
        }
        transactions.push(transaction);
      }
      const sortArray = type => {
        const types = {
          ascending: 'ascending',
          descending: 'descending',
          oldest: 'oldest',
          newest: 'newest'
        };
        const sortProperty = types[type];
        const sorted = [...transactions].sort((a, b) => {
          if (sortProperty === 'ascending') {
            return a.beneficiary_name.localeCompare(b.beneficiary_name);
          } else if (sortProperty === 'descending') {
            return b.beneficiary_name.localeCompare(a.beneficiary_name);
          } else if (sortProperty === 'oldest') {
            return a.created_at.localeCompare(b.created_at);
          } else if (sortProperty === 'newest') {
            return b.created_at.localeCompare(a.created_at);
          } else {
            return b[sortProperty] - a[sortProperty];
          }
        });
        setTransactions(sorted);
      };
      sortArray(selectTerm);
    });
  }, [selectTerm]);
  return (
    <section className="home">
      <div className="header">
        <div className="title-wrapper">
          <h1 className="title">Daftar Transaksi</h1>
        </div>
        <div className="text-wrapper">
          <h4 className="subtitle">Halo Kak!</h4>
          <p className="text">Kamu telah melakukan transaksi sebesar <strong>RP 5.000.000</strong> sejak menggunakan Flip.</p>
        </div>
      </div>
      <Filter term={searchTerm} searchKeyword={searchHandler} select={selectTerm} onChangeFilter={selectHandler} />
      <ListItem transactions={searchTerm.length < 1 ? transactions : searchResults} />
    </section>
  );
}

export default Home;