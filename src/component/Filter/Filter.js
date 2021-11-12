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
      <div className="filter">
        <div className="input-wrapper">
          <input className="form-control" type="text" value={props.term} onChange={getSearchTerm} ref={inputEl}  placeholder="Cari nama atau bank"/>
          <i className="icon-search fas fa-search"></i>
        </div>
        <div className="select-wrapper">
          <select className="form-control" value={props.select} onChange={getSelectTerm}>
            <option value="">Urutkan</option>
            <option value="ascending">Nama A-Z</option>
            <option value="descending">Nama Z-A</option>
            <option value="oldest">Tanggal Terlama</option>
            <option value="newest">Tanggal Terbaru</option>
          </select>
          <i className="icon-select fas fa-chevron-down"></i>
        </div>
      </div>
    </div>
  );
}

export default Filter;