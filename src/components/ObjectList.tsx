import { useObjectContext } from "../context/ObjectContext";

export default function ObjectList() {
  const { objects } = useObjectContext();

  return (
    <ul>
      {objects.map((obj) => (
        <li key={obj.id}>
          <div className='object-list-item-name'>{obj.name}</div>
          <div className='object-list-item-type'>{obj.type}</div>
        </li>
      ))}
    </ul>
  );
}
