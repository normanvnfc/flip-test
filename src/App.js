import { Route, Routes } from "react-router";
import Home from "./Page/Home";
import Detail from "./Page/Detail";
const App = () => {
  return (
    <main className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:detailId" element={<Detail />} />
      </Routes>
    </main>
  );
}

export default App;
