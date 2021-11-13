import Item from "../Item/Item";
// Format Currency
const rupiahFormat = (value) => {
  const format = value.toString().split('').reverse().join('');
  const convert = format.match(/\d{1,3}/g);
  return 'Rp ' + convert.join('.').split('').reverse().join('')
}
// Format Complete Date
const dateFormat = (value) => {
  const rawDate = new Date(value)
  const day = rawDate.toLocaleString('en-US', { day: '2-digit' })
  const month = rawDate.toLocaleString('en-US', { month: 'long' })
  const year = rawDate.getFullYear()  
  return [day, month, year]
}
const ListItem = (props) => {
  return (
    <ul >
      {props.transactions.map((item) => {
        const { id, beneficiary_name, status, beneficiary_bank, sender_bank, completed_at, created_at, unique_code, remark, fee, amount, account_number } = item;

        const rupiah = rupiahFormat(amount)        
        const completeDate = dateFormat(completed_at)        
        const createdDate = dateFormat(created_at)
        return (
          <li key={id} className={status.toLowerCase()}>
            <Item
              id={id}
              name={beneficiary_name}
              status={status}
              receiver={beneficiary_bank}
              sender={sender_bank}
              created_date={createdDate.join(" ")}
              complete_date={completeDate.join(" ")}
              amount={rupiah}
              account_number={account_number}
              fee={fee}
              remark={remark}
              unique_code={unique_code}
            />
          </li>
        )
      })}
    </ul>
  );
}

export default ListItem;