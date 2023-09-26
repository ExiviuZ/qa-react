import { useState } from "react";
import Item from "./Item";

// Packing List
export default function PackingList({
  itemObj: { items, onRemoveItem, onToggleItem, onRemoveAllItems },
}) {
  const [sortMethod, setSortMethod] = useState(1);
  let sortedArray;

  if (Number(sortMethod) === 1) sortedArray = items;
  if (Number(sortMethod) === 2)
    sortedArray = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  if (Number(sortMethod) === 3)
    sortedArray = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  return (
    <div className="list">
      <ul>
        {sortedArray.map((item) => {
          return (
            <Item
              item={item}
              onToggleItem={onToggleItem}
              onRemoveItem={onRemoveItem}
              key={item.id}
            />
          );
        })}
      </ul>
      <div className="actions">
        <select
          disabled={!items.length ? true : false}
          value={sortMethod}
          onChange={(e) => setSortMethod(e.target.value)}
        >
          <option value={1}>Sort by input order</option>
          <option value={2}>Sort by description</option>
          <option value={3}>Sort by packed status</option>
        </select>
        <button
          disabled={!items.length ? true : false}
          onClick={onRemoveAllItems}
        >
          Clear List
        </button>
      </div>
    </div>
  );
}
