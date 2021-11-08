import './App.css';

function App({ columns, data }) {
  const head = (
    <tr>
      {columns.map(label => (
        <th key={label}>{label}</th>
      ))}
    </tr>
  );

  const body = data.map(item => {
    const row = columns.map(column => {
      const value = item[column];
      return <td key={column}>{value}</td>;
    });

    return <tr key={item.id}>{row}</tr>;
  });

  return (
    <table>
      <thead>{head}</thead>
      <tbody>{body}</tbody>
    </table>
  );
}

export default App;
