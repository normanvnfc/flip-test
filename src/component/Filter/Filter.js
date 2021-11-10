import { useRef } from "react";

const Filter = (props) => {
  const inputEl = useRef("")
  const selectEl = useRef("")
  const getSearchTerm = () => {
    props.searchKeyword(inputEl.current.value)
  }
  const getSelectTerm = () => {
    props.sortFilter(selectEl.current.value)
  }  
  return (
    <div >
      <div className="form">
        <div className="input-wrapper">
          <input type="text" value={props.term} onChange={getSearchTerm} ref={inputEl} />
        </div>
        <div className="select-wrapper">
          <select value={props.select} onChange={getSelectTerm} ref={selectEl}>
            <option value="ascending">Nama A-Z</option>
            <option value="descending">Nama Z-A</option>            
          </select>
        </div>
      </div>
    </div>
  );
}

export default Filter;