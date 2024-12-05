import css from './TransactionHistory.module.css';
import clsx from 'clsx';

export default function TransactionHistory({ items }) {
  const Table = items.map((item, index) => {
    const textClass = clsx(
      css.transactionhistory__row,
      index % 2 && css.transactionhistory__row_even
    );
    return (
      <tr key={item.id} className={textClass}>
        <td>{item.type}</td>
        <td>{item.amount}</td>
        <td>{item.currency}</td>
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
