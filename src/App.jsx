import "./App.css";

function App() {
  return (
    <>
      <Person></Person>
      <Person></Person>
      <Person></Person>
      <Person></Person>
      <Person></Person>
      <Person></Person>
      <Person></Person>
      <Person></Person>
      <Pet></Pet>
    </>
  );
}
function Pet() {
  return <h1>I am a cat</h1>;
}

function Person() {
  return <p>My name is Nirjhor Akash</p>;
}

export default App;
