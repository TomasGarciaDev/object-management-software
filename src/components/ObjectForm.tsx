import { useState, useEffect } from "react";
import { useObjectContext, ObjectType } from "../context/ObjectContext";

export default function ObjectForm({
  editingObject,
  clearEditing,
}: {
  editingObject?: ObjectType | null;
  clearEditing?: () => void;
}) {
  const { addObject, editObject } = useObjectContext();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  // Load data when editing an object
  useEffect(() => {
    if (editingObject) {
      setName(editingObject.name);
      setDescription(editingObject.description);
      setType(editingObject.type);
      setIsEditing(true);
    } else {
      setName("");
      setDescription("");
      setType("");
      setIsEditing(false);
    }
  }, [editingObject]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !description || !type)
      return alert("All fields are required!");

    if (isEditing && editingObject) {
      editObject({ id: editingObject.id, name, description, type });
      clearEditing?.(); // Close modal after editing
    } else {
      addObject({
        id: Date.now().toString(),
        name,
        description,
        type,
      });
    }

    setName("");
    setDescription("");
    setType("");
    setIsEditing(false);
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

      <button type='submit'>
        {isEditing ? "Update Object" : "Add Object"}
      </button>
      {isEditing && (
        <button onClick={clearEditing} className='cancel-btn'>
          Cancel
        </button>
      )}
    </form>
  );
}
