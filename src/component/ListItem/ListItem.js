import Item from "../Item/Item";
const ListItem = (props) => {
  return (
    <ul >
      {props.transactions.map((item) => {
        const { id, beneficiary_name, status, beneficiary_bank, sender_bank, completed_at, created_at, unique_code, remark, fee, amount, account_number } = item;
        const format = amount.toString().split('').reverse().join('');
        const convert = format.match(/\d{1,3}/g);
        const rupiah = 'Rp ' + convert.join('.').split('').reverse().join('')   
        // Format Complete Date     
        const completeRawDate = new Date(completed_at)
        const completeDay = completeRawDate.toLocaleString('en-US', { day: '2-digit' })
        const completeMonth = completeRawDate.toLocaleString('en-US', { month: 'long' })
        const completeYear = completeRawDate.getFullYear()
        const completeDate = [completeDay, completeMonth, completeYear]
        // Format Create Date     
        const createedRawDate = new Date(created_at)
        const createdDay = createedRawDate.toLocaleString('en-US', { day: '2-digit' })
        const createdMonth = createedRawDate.toLocaleString('en-US', { month: 'long' })
        const createdYear = createedRawDate.getFullYear()
        const createdDate = [createdDay, createdMonth, createdYear]
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