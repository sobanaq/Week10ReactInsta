import "./App.css";
import Box from "./components/box";
import { useState, useEffect } from "react";

function App() {
  const [user, setUser] = useState("Harry");

  return (
    <div className="App">
      {/* && is the equivalent of an IF statement */}
      {/* ? and : are the equivalent of an IF ELSE statement */}
      <input onChange={(event) => setUser(event.target.value)} />
      {user && <Box name={user} />}
      {/* If user exists then display the username in the Box
     components */}
      {user == "Harry" ? (
        <Box name="harry logged in" />
      ) : (
        <Box name="harry not logged in" />
      )}
      <Box name="Hermoine" />
      <Box name="Mafalda" />
      <Box name="Percy" />
    </div>
  );
}

export default App;
