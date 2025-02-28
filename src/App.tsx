import React from "react";
import ObjectForm from "./components/ObjectForm";
import ObjectList from "./components/ObjectList";
import { ObjectProvider } from "./context/ObjectContext";
import "./index.css";

function App() {
  return (
    <ObjectProvider>
      <div className='app'>
        <header className='app-header'>
          <h1>Object Management App</h1>
          <p className='app-description'>
            Create, edit, and manage objects with their relationships
          </p>
        </header>

        <main className='app-content'>
          <section className='form-section'>
            <h2>Add New Object</h2>
            <ObjectForm />
          </section>

          <section className='list-section'>
            <h2>Object List</h2>
            <ObjectList />
          </section>
        </main>
      </div>
    </ObjectProvider>
  );
}

export default App;
