import "./App.css";
import { useItems } from "./stores/useStore.jsx";
function App() {
  const items = useItems();
  console.log(items[1].email);

  return (
    <div className="App">
      <h1>Items List</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
