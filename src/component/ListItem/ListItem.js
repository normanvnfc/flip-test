import Item from "../Item/Item";

const ListItem = (props) => {
  return (
    <ul >
      {props.transactions.map((item) => {
        const { id, beneficiary_name, status, beneficiary_bank, sender_bank, completed_at, amount } = item;
        const format = amount.toString().split('').reverse().join('');
        const convert = format.match(/\d{1,3}/g);
        const rupiah = 'Rp ' + convert.join('.').split('').reverse().join('')
        const rawDate = new Date(completed_at)
        const day = rawDate.toLocaleString('en-US', { day: '2-digit' })
        const month = rawDate.toLocaleString('en-US', { month: 'long' })
        const year = rawDate.getFullYear()
        const date = [day, month, year]
        return (
          <li key={id} className={status.toLowerCase()}>
            <Item
              id={id}
              name={beneficiary_name}
              status={status}
              receiver={beneficiary_bank}
              sender={sender_bank}
              complete_date={date.join(" ")}
              amount={rupiah}
            />
          </li>
        )
      })}
    </ul>
  );
}

export default ListItem;