import { ObjectType } from "../context/ObjectContext";

interface ObjectDetailsProps {
  object: ObjectType;
}

export default function ObjectDetails({ object }: ObjectDetailsProps) {
  return (
    <div>
      <p className='details-paragraph'>
        <strong>Name:</strong> {object.name}
      </p>
      <p className='details-paragraph'>
        <strong>Description:</strong> {object.description}
      </p>
      <p className='details-paragraph'>
        <strong>Type:</strong> {object.type}
      </p>
      <p className='details-paragraph'>
        <strong>Linked Objects:</strong>
      </p>
      <ul className='linked-object-list'>
        {object.linkObjs?.length ? (
          object.linkObjs.map((item) => (
            <li key={item.id} className='linked-object-list-item'>
              - {item.name}
            </li>
          ))
        ) : (
          <li>No linked objects</li>
        )}
      </ul>
    </div>
  );
}
