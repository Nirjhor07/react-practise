// export default function ToDo({ name, amVirgin }) {
//   if (amVirgin === true) {
//     return <li>My name is : {name}</li>;
//   }
//   return <li>My name is : {name}</li>;
// }

// using ternery
export default function ToDo({ name, amVirgin }) {
  return amVirgin === true ? (
    <li>My name is : {name} </li>
  ) : (
    <li>Not found : {name}</li>
  );
}

// //using and operator &&
// export default function ToDo({ name, amVirgin }) {
//   return amVirgin && <li>my name is : {name}</li>;
// }

// //using || operatotr 'or'
// export default function ToDo({ name, amVirgin }) {
//   return amVirgin || <li>My name is : {name}</li>;
// }
