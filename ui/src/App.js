import "./App.css";
import { useState, useEffect } from "react";
import { getInfo } from "./services/InfoService";

function App() {
  const [msg, setMsg] = useState("");

  useEffect(() => {
    console.log("App.js: useEffect");
    getInfo().then((data) => {
      console.log("data:", data);
      setMsg(data);
    });
  }, []);

  return (
    <>
      <div className="App">
        <h1>Hello</h1>
      </div>
    </>
  );
}

export default App;
