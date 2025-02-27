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
    </div>
  );
}
