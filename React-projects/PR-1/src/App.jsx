import "./App.css";
import React, { useState } from "react";

export default function App() {

  const countries = [
    { name: "India", info: "Famous for Taj Mahal and rich culture" },
    { name: "USA", info: "Known for technology and Hollywood" },
    { name: "Canada", info: "Beautiful nature and maple syrup" },
    { name: "Japan", info: "Advanced technology and anime culture" }
  ];

  const [index, setIndex] = useState(0);

  const changeCountry = () => {
    if (index === countries.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };

  return (
    <div>
      <h1>Country: {countries[index].name}</h1>

      <p>{countries[index].info}</p>


      <button onClick={changeCountry}>
        Change Country
      </button>
    </div>
  );
}