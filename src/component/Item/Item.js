import Card from "../UI/Card";

const Item = (props) => {
  const { id, name, status, receiver, sender, complete_date, amount } = props;
  return (
    <Card id={id} >
      Name: {name}
      Status: {status}
      Receiver: {receiver}
      Complete Date: {complete_date}
      Sender: {sender}
      Amount: {amount}
    </Card>
  );
}

export default Item;