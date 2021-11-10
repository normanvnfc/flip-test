import Card from "../UI/Card";

const Item = (props) => {
  const { id, name} = props;
  return (
    <Card id={id} >
      {name}
    </Card>
  );
}

export default Item;