import { useState } from "react";
import { useObjectContext, ObjectType } from "../context/ObjectContext";
import Modal from "./Modal";
import ObjectDetails from "./ObjectDetails";

export default function ObjectList() {
  const { objects, deleteObject } = useObjectContext();
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
  const [selectedObject, setSelectedObject] = useState<ObjectType | null>(null);

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
