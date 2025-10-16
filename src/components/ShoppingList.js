import React, { useState } from "react";
import Item from "./Item";
import itemData from "../data/items";

function ShoppingList() {
  const [items, setItems] = useState(itemData);

  function handleFilterChange(event) {
    const selectedCategory = event.target.value;
    if (selectedCategory === "All") {
      setItems(itemData);
    } else {
      const filteredItems = itemData.filter(
        (item) => item.category === selectedCategory
      );
      setItems(filteredItems);
    }
  }

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleFilterChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {items.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;