// import transactions from '../../transactions.json';
import css from './TransactionHistory.module.css';
import clsx from 'clsx';

export default function TransactionHistory({ transactions }) {
  const Table = transactions.map((transaction, index) => {
    // const even = !((index + 1) % 2) ? true : false;
    const textClass = clsx(
      css.transactionhistory__row,
      !((index + 1) % 2) && css.transactionhistory__row_even
    );
    return (
      <tr key={transaction.id} className={textClass}>
        <td>{transaction.type}</td>
        <td>{transaction.amount}</td>
        <td>{transaction.currency}</td>
      </tr>
    );
  });
  return (
    <table className={css.transactionhistory__container}>
      <thead className={css.transactionhistory__header}>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>{Table}</tbody>
    </table>
  );
}
