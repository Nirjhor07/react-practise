export default function ToDo({ name, amVirgin }) {
  if (amVirgin === true) {
    return <li>My name is : {name}</li>;
  }
  return <li>My name is : {name}</li>;
}
