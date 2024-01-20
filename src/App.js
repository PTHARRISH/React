
import './App.css';

function App() {
const firstName='John'
const lastName='Wick'
const age='33'
const job='Assasin'
  return (
    <div className="App">
     <h3> Full Name: {firstName+" "+ lastName} </h3>
     <p>Age: {age}</p>
     <p>Job: {job}</p>
   </div>
  );
}

export default App;
