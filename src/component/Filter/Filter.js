import { useRef } from "react";

const Filter = (props) => {
  const inputEl = useRef("")

  const getSearchTerm = () => {
    props.searchKeyword(inputEl.current.value)
  }
  const getSelectTerm = (event) => {
    props.onChangeFilter(event.target.value);
  }  
  return (
    <div >
      <div className="form">
        <div className="input-wrapper">
          <input type="text" value={props.term} onChange={getSearchTerm} ref={inputEl} />
        </div>
        <div className="select-wrapper">
          <select value={props.select} onChange={getSelectTerm}>
            <option value="">Urutkan</option>
            <option value="ascending">Nama A-Z</option>
            <option value="descending">Nama Z-A</option>
            <option value="oldest">Tanggal Terlama</option>
            <option value="newest">Tanggal Terbaru</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default Filter;