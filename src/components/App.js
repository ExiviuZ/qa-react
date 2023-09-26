import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

export default function App() {
  const [items, setItems] = useState([]);
  function handleAddItem(newItem) {
    setItems((items) => [...items, newItem]);
  }
  function handleRemoveItem(oldItem) {
    setItems((items) => items.filter((element) => element.id !== oldItem.id));
  }
  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) => {
        return item.id === id ? { ...item, packed: !item.packed } : item;
      })
    );
  }
  function handleRemoveAllItems() {
    const isConfirmed = window.confirm(
      "Are you sure you wanna pop all your goodies?"
    );
    if (isConfirmed) setItems([]);
  }
  return (
    <div className="app">
      <Logo />
      <Form
        itemObj={{
          items,
          onAddItem: handleAddItem,
        }}
      />
      <PackingList
        itemObj={{
          items,
          onRemoveItem: handleRemoveItem,
          onToggleItem: handleToggleItem,
          onRemoveAllItems: handleRemoveAllItems,
        }}
      />
      <Stats items={items} />
    </div>
  );
}
