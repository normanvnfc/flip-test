import Card from "../UI/Card";

const Item = (props) => {
  const { id, name, status, receiver, sender, complete_date, amount } = props;
  return (
    <Card>
      <div id={id} className="card-body">
        <div className="card-info">
          <div className="card-field bank">
            <p className="text">{sender}</p>
            <i className="icon-arrow fas fa-arrow-right"></i>
            <p className="text">{receiver}</p>
          </div>
          <div className="card-field">
            <p className="text">{name}</p>
          </div>
          <div className="card-field ">
            <p className="text">{amount}</p>
            <span className="dot"></span>
            <p className="text">{complete_date}</p>
          </div>
        </div>
        <div className="badge">
          {status === 'SUCCESS' ? 'Berhasil' : 'Pengecekan'}
        </div>
      </div>
    </Card>
  );
}

export default Item;