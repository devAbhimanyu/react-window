import './App.css';
import list from 'data/data';

const newList = [
  ...list,
  ...list,
  ...list,
  ...list,
  ...list,
  ...list,
  ...list,
  ...list,
  ...list,
  ...list,
  ...list,
  ...list,
  ...list,
  ...list,
  ...list,
  ...list,
  ...list,
  ...list,
  ...list,
  ...list,
  ...list,
  ...list,
];
function App() {
  return (
    <div className='App'>
      {newList.map((item, i) => (
        <div key={i + item._id}>{item.name}</div>
      ))}
    </div>
  );
}

export default App;
