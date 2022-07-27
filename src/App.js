import logo from "./logo.svg";
import JSONDATA from "./csvjson.json";
import "./App.css";
import { useState } from "react";

function App() {
  const [change, setChange] = useState("");
  return (
    <div className="App">
      <input
        type="text"
        placeholder="search..."
        onChange={(e) => setChange(e.target.value)}
      />
      {JSONDATA.filter((value) => {
        if (change == "") {
          return value;
        } else if (
          value.first_name.toLowerCase().includes(change.toLowerCase())
        )
          return value;
      }).map((item, index) => {
        const { id, first_name, last_name, email } = item;
        return (
          <div key={id}>
            <p>{first_name}</p>
          </div>
        );
      })}
    </div>
  );
}

export default App;
