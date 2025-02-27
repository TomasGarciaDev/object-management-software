import { useObjectContext } from "../context/ObjectContext";

export default function ObjectList() {
  const { objects } = useObjectContext();

  return (
    <div className='container'>
      <ul className='object-list-items'>
        {objects.map((obj) => (
          <li key={obj.id} className='object-list-item'>
            <div className='object-list-item-content'>
              <div className='object-list-item-name'>Name: {obj.name}</div>
              <div className='object-list-item-type'>Type: {obj.type}</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
