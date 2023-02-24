import React from 'react'

export const Transaction = ({transaction}) => {
  const sign = transaction.amount < 0 ? '-' : '+';

  return (
    <li class="minus">
    {transaction.text}<span>{sign}Ksh{transaction.amount}</span><button class="delete-btn">x</button>
  </li>
  )
}
