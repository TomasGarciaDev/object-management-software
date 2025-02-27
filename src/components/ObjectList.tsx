import { useState } from "react";
import { useObjectContext, ObjectType } from "../context/ObjectContext";
import Modal from "./Modal";
import ObjectDetails from "./ObjectDetails";
import ObjectForm from "./ObjectForm";

export default function ObjectList() {
  const { objects, deleteObject } = useObjectContext();
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
  const [selectedObject, setSelectedObject] = useState<ObjectType | null>(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editingObject, setEditingObject] = useState<ObjectType | null>(null);
  const [search, setSearch] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);

  // Filter objects based on search input
  const filteredObjects = objects.filter(
    (obj) =>
      obj.name.toLowerCase().includes(search.toLowerCase()) ||
      obj.description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className='container'>
      {/* Search Input with auto-complete */}
      <input
        type='text'
        placeholder='Search objects...'
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          setShowSuggestions(e.target.value.length > 0); // Show dropdown if input is not empt
        }}
        className='input'
      />

      {/* Autocomplete Suggestions Dropdown */}
      {showSuggestions && filteredObjects.length > 0 && (
        <ul>
          {filteredObjects.map((obj) => (
            <li key={obj.id}>
              {obj.name} - {obj.type}
            </li>
          ))}
        </ul>
      )}

      {/* Object List */}
      {filteredObjects.length > 0 ? (
        <ul className='object-list-items'>
          {filteredObjects.map((obj) => (
            <li key={obj.id} className='object-list-item'>
              <div
                className='object-list-item-content'
                onClick={() => {
                  setSelectedObject(obj);
                  setIsDetailsModalOpen(true);
                }}
              >
                <div className='object-list-item-name'>Name: {obj.name}</div>
                <div className='object-list-item-type'>Type: {obj.type}</div>
              </div>

              <div className='object-list-item-actions'>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setEditingObject(obj);
                    setIsEditModalOpen(true);
                  }}
                  className='button warning'
                >
                  Edit
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    deleteObject(obj.id);
                  }}
                  className='button danger'
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <div className='no-objects-message'>No objects available</div>
      )}

      {/* Edit Object Modal*/}
      <Modal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        title='Edit Object'
      >
        <ObjectForm
          editingObject={editingObject}
          clearEditing={() => {
            setEditingObject(null);
            setIsEditModalOpen(false);
          }}
        ></ObjectForm>
      </Modal>

      {/* Object Details Modal */}
      <Modal
        isOpen={isDetailsModalOpen}
        onClose={() => setIsDetailsModalOpen(false)}
        title={"Object Details"}
      >
        {selectedObject && <ObjectDetails object={selectedObject} />}
      </Modal>
    </div>
  );
}
