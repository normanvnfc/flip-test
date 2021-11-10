import Item from "../Item/Item";

const ListItem = (props) => {  
  return (
    <div >
      {props.data.map((item) => {
        return (
          <Item 
            key={item.id}
            id={item.id}
            name={item.login}
          />
        )
      })}      
    </div>
  );
}

export default ListItem;