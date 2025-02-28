import { useState, useEffect } from "react";
import { useObjectContext, ObjectType } from "../context/ObjectContext";

export default function ObjectForm({
  editingObject,
  clearEditing,
}: {
  editingObject?: ObjectType | null;
  clearEditing?: () => void;
}) {
  const { addObject, editObject, objects } = useObjectContext();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [linkObjs, setLinkObjs] = useState<ObjectType[]>([]);
  const [type, setType] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [search, setSearch] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);

  // Load data when editing an object
  useEffect(() => {
    if (editingObject) {
      setName(editingObject.name);
      setDescription(editingObject.description);
      setLinkObjs(editingObject.linkObjs);
      setType(editingObject.type);
      setIsEditing(true);
    } else {
      setName("");
      setDescription("");
      setLinkObjs([]);
      setType("");
      setIsEditing(false);
    }
  }, [editingObject]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !description || !type)
      return alert("All fields are required!");

    if (isEditing && editingObject) {
      editObject({ id: editingObject.id, name, description, type, linkObjs });
      clearEditing?.(); // Close modal after editing
    } else {
      addObject({
        id: Date.now().toString(),
        name,
        description,
        linkObjs,
        type,
      });
    }

    setName("");
    setDescription("");
    setType("");
    setLinkObjs([]);
    setIsEditing(false);
  };

  const filteredObjects = objects.filter(
    (obj) =>
      obj.name.toLowerCase().includes(search.toLowerCase()) ||
      obj.description.toLowerCase().includes(search.toLowerCase())
  );

  const handleSelectObject = (obj: ObjectType) => {
    setLinkObjs([...(linkObjs || []), obj]);
    setSearch(obj.name); // Fill input with selected object
    setShowSuggestions(false); // Hide suggestions
    setSearch("");
  };

  const handleUnlink = (id: string) => {
    const filterdObjs = linkObjs.filter((obj) => obj.id !== id);
    setLinkObjs(filterdObjs);
  };

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

      <div>
        <label htmlFor='Link Object'>Link Object</label>
        <input
          type='text'
          placeholder='Search objects...'
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setShowSuggestions(e.target.value.length > 0); // Show dropdown if input is not empty
          }}
          className='input'
        />

        {showSuggestions && filteredObjects.length > 0 && (
          <ul className='autocomplete-list'>
            {filteredObjects.map((obj) => (
              <li
                key={obj.id}
                onClick={() => handleSelectObject(obj)}
                className='autocomplete-item'
              >
                {obj.name} - {obj.type}
              </li>
            ))}
          </ul>
        )}
      </div>

      <ul className='linked-object-list'>
        {(linkObjs || []).map((item) => {
          return (
            <li key={item.id} className='linked-object-list-item'>
              - {item.name}
              <button
                onClick={() => handleUnlink(item.id)}
                className='modal-close'
              >
                x
              </button>
            </li>
          );
        })}
      </ul>

      <label htmlFor='Type'>Type</label>
      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option value=''>Select a type</option>
        <option value='Desk'>Desk</option>
        <option value='Computer'>Computer</option>
        <option value='Server'>Server</option>
        <option value='Human'>Human</option>
      </select>

      <button type='submit' className='primary'>
        {isEditing ? "Update Object" : "Add Object"}
      </button>
      {isEditing && <button onClick={clearEditing}>Cancel</button>}
    </form>
  );
}
