import { useState } from "react";
import "./App.css";
function App() {
  return (
    <>
      <a
        href={"./website-files/myFile.zip"}
        download
        className="bg-red-500 p-3 hover:bg-red-800"
      >
        download
      </a>
    </>
  );
}

export default App;
