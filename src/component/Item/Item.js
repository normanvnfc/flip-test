import { Link } from 'react-router-dom';
import Card from "../UI/Card";

const Item = (props) => {
  const { id, name, status, receiver, sender, complete_date, amount, account_number, created_date, remark, unique_code } = props;
  return (
    <Link
      to={ `/detail/${id}`}
      state= {{
        id: id,
        sender: sender,
        receiver: receiver,
        accountNumber: account_number,
        name: name,
        amount: amount,
        unique_code: unique_code,
        remark: remark,
        created_date: created_date
      }}
      >
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
    </Link>
  );
}

export default Item;