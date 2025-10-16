import React, { useState } from "react";
import ShoppingList from "./ShoppingList";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  function handleClick() {
    setIsDarkMode(!isDarkMode);
  }

  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <header>
        <h2>Shopper's Delight</h2>
        <button onClick={handleClick}>
          {isDarkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </header>

      <ShoppingList />
    </div>
  );
}

export default App;