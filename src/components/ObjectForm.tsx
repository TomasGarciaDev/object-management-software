import { useState } from "react";
import { useObjectContext } from "../context/ObjectContext";

export default function ObjectForm() {
  const { addObject } = useObjectContext();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    addObject({
      id: Date.now().toString(),
      name,
      description,
      type,
    });

    setName("");
    setDescription("");
    setType("");
  };

  console.log(name);
  return (
    <form onSubmit={handleSubmit} className='form'>
      <label htmlFor='Name'>Name</label>
      <input
        type='text'
        placeholder='Name'
        value={name}
        onChange={(e) => setName(e.target.value)}
        className='input'
      />

      <label htmlFor='Description'>Description</label>
      <input
        type='text'
        placeholder='Description'
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className='input'
      />

      <label htmlFor='Type'>Type</label>
      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option value=''>Select a type</option>
        <option value='Desk'>Desk</option>
        <option value='Computer'>Computer</option>
        <option value='Server'>Server</option>
        <option value='Human'>Human</option>
      </select>

      <button type='submit'>Add Object</button>
    </form>
  );
}
