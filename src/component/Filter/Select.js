const Select = (props) => {  
  const getSelectTerm = (event) => {
    props.onChangeFilter(event.target.value);
  }  
  return (
    <div className="select-wrapper">
      <select value={props.select} onChange={getSelectTerm}>
        <option value="">Urutkan</option>
        <option value="ascending">Nama A-Z</option>
        <option value="descending">Nama Z-A</option>
        <option value="oldest">Tanggal Terlama</option>
        <option value="newest">Tanggal Terbaru</option>
      </select>
    </div>
  );
}

export default Select;