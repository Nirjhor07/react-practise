export default function Persons({ person }) {
  return (
    <ul>
      <li>Name : {person.name}</li>
      <li>Age : {person.age} </li>
      <p>{person.isGood ? "good boy" : "bad boy"}</p>
    </ul>
  );
}
