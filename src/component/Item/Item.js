import Card from "../UI/Card";

const Item = (props) => {
  const { id, name, status, receiver, sender, complete_date, amount } = props;
  return (
    <Card>
      <div id={id} className="card-body">
        Name: {name}
        {/* Status: {status} */}
        {status === 'SUCCESS' ? 'Berhasil' : 'Pengecekan'}
        Receiver: {receiver}
        Complete Date: {complete_date}
        Sender: {sender}
        Amount: {amount}
      </div>
    </Card>
  );
}

export default Item;