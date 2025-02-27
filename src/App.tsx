import React from "react";
import ObjectForm from "./components/ObjectForm";
import ObjectList from "./components/ObjectList";
import { ObjectProvider } from "./context/ObjectContext";
import "./index.css";

function App() {
  return (
    <ObjectProvider>
      <div className='app'>
        <main>
          <section>
            <h2>Add New Object</h2>
            <ObjectForm />
          </section>

          <section>
            <h2>Object List</h2>
            <ObjectList />
          </section>
        </main>
      </div>
    </ObjectProvider>
  );
}

export default App;
