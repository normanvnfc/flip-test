import { useRef } from "react";

const Filter = (props) => {
  const inputEl = useRef("")
  
  const getSearchTerm = () => {
    props.searchKeyword(inputEl.current.value)
  }  
  return (
    <div >
      <div className="form">
        <div className="input-wrapper">
          <input type="text" value={props.term} onChange={getSearchTerm} ref={inputEl} />
        </div>        
      </div>
    </div>
  );
}

export default Filter;