import "./App.css";

function App() {
  return (
    <>
      <Footballer name="Ronaldo" age="40" bestPl="Yes"></Footballer>
      <Footballer name="Messi" age="38" bestPl="No"></Footballer>
      <Footballer name="Neymar" age="35" bestPl="No"></Footballer>
      <Pet name="ululu" status="bangali"></Pet>
      <Pet name="tomcat" status="persian"></Pet>
    </>
  );
}
// using destructuring method
// const {name, status} = {name: 'ululu', status: 'bangali'}

function Pet({ name, status }) {
  return (
    <div
      style={{
        border: "2px solid blue",
        textAlign: "left",
        padding: "20px",
        color: "black",
        fontWeight: "bold",
      }}
    >
      <p>Cat Name: {name}</p>
      <p>Deshi na bideshi : {status}</p>
    </div>
  );
}
//using props method holds the whole object array
function Footballer(props) {
  const design = {
    color: "purple",
    border: "2px solid purple",
    textAlign: "left",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  };
  // console.log(props.name);
  return (
    <div style={design}>
      <h4>Name: {props.name}</h4>
      {/* object element styling */}
      <h4
        style={{
          color: "black",
        }}
      >
        Age:{props.age}
      </h4>
      <h4>Best player in the world? : {props.bestPl}</h4>
    </div>
  );
}

export default App;
