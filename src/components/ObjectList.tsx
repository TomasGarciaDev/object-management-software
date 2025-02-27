import { useObjectContext } from "../context/ObjectContext";

export default function ObjectList() {
  const { objects } = useObjectContext();

  return (
    <div className='container'>
      <ul className='object-list-items'>
        {objects.map((obj) => (
          <li key={obj.id} className='object-list-item'>
            <div>{obj.name}</div>
            <div>{obj.type}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
