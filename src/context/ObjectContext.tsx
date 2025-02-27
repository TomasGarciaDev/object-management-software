import { createContext, useContext, useState, useEffect } from "react";

// Define object type
export type ObjectType = {
  id: string;
  name: string;
  description: string;
  linkObjs: ObjectType[];
  type: string;
};

interface ObjectContextType {
  objects: ObjectType[];
  addObject: (obj: ObjectType) => void;
  deleteObject: (id: string) => void;
  editObject: (obj: ObjectType) => void;
  linkObjects: (obj: ObjectType) => void; // Expose linkObjects function
}

// Create context
const ObjectContext = createContext<ObjectContextType | undefined>(undefined);

// Context Provider Component
export const ObjectProvider = ({ children }: { children: React.ReactNode }) => {
  // Load objects from localStorage only on the first render
  const [objects, setObjects] = useState<ObjectType[]>(() => {
    const storedObjects = localStorage.getItem("objects");
    return storedObjects ? JSON.parse(storedObjects) : [];
  });

  // Save to localStorage whenever objects state updates
  useEffect(() => {
    localStorage.setItem("objects", JSON.stringify(objects));
  }, [objects]);

  // CRUD functions
  const addObject = (obj: ObjectType) => {
    // Ensure linkIds is always an array
    const newObj = {
      ...obj,
      linkIds: obj.linkObjs || [],
    };
    setObjects([...objects, newObj]);
  };

  // Delete objects
  const deleteObject = (id: string) => {
    setObjects(objects.filter((obj) => obj.id !== id));
  };

  // Edit objects
  const editObject = (updated: ObjectType) => {
    // Ensure linkIds is always an array
    const updatedObj = {
      ...updated,
      linkIds: updated.linkObjs || [],
    };
    setObjects(
      objects.map((obj) => (obj.id === updated.id ? updatedObj : obj))
    );
  };

  const linkObjects = (obj: ObjectType) =>
    setObjects([...objects, { ...obj, linkObjs: obj.linkObjs || [] }]);

  return (
    <ObjectContext.Provider
      value={{ objects, addObject, deleteObject, editObject, linkObjects }}
    >
      {children}
    </ObjectContext.Provider>
  );
};

export const useObjectContext = () => {
  const context = useContext(ObjectContext);
  if (!context)
    throw new Error("useObjectContext must be used within ObjectProvider");
  return context;
};
