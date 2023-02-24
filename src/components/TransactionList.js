import React, {useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';


export const TransactionList = () => {

const { transactions }= useContext(GlobalContext);
// console.log(context);

  return (
    <div>
      <h3>History</h3>
      <ul id="list" class="list">
        {transactions.map(transaction => (
          <li class="minus">
          {transaction.text}<span>{transaction.amount}</span><button class="delete-btn">x</button>
        </li>

        ))}
      
      </ul>
      </div>
  )
}
