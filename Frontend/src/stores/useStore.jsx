import { useContext, useEffect, useState, createContext } from "react";
const ItemContext = createContext();
export function ItemsProvider({ children }) {
  const [items, setItems] = useState([]);
  async function loadItems() {
    const res = await fetch("http://localhost:5000");
    const data = await res.json();
    setItems(data);
  }

  useEffect(() => {
    loadItems();
  }, []);

  return <ItemContext.Provider value={items}>{children}</ItemContext.Provider>;
}
export function useItems() {
  return useContext(ItemContext);
}
