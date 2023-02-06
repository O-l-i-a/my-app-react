import React, { useState } from "react";
import Result from "./Result";

export default function Search() {
  let [city, setCity] = useState(null);
  let [result, setResult] = useState(null);
  function searchForCity(event) {
    event.preventDefault();
    setResult(<Result city={city} />);
  }
  function updateCity(event) {
    setCity(event.target.value);
  }

  return (
    <div className="Search">
      <form onSubmit={searchForCity}>
        <input type="search" onChange={updateCity}></input>
        <input type="submit"></input>
      </form>
      {result}
    </div>
  );
}
