import React from "react";
import ObjectForm from "./components/ObjectForm";
import { ObjectProvider } from "./context/ObjectContext";
import "./index.css";

function App() {
  return (
    <ObjectProvider>
      <div className='app'>
        <header className='App-header'>
          <ObjectForm />
        </header>
      </div>
    </ObjectProvider>
  );
}

export default App;
