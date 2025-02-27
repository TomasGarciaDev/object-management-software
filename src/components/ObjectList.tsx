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

  return (
    <div className='container'>
      <ul className='object-list-items'>
        {objects.map((obj) => (
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
