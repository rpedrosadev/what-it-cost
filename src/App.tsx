import "./App.css";
import { Movement } from "./components/Movement";

function App() {
  return (
    <div className="m-4">
      <Movement
        date="27/02/2025"
        imgSrc="https://images.ctfassets.net/4cd45et68cgf/Rx83JoRDMkYNlMC9MKzcB/2b14d5a59fc3937afd3f03191e19502d/Netflix-Symbol.png?w=700&h=456"
        monetaryTotal="34678,23€"
        name="Netflix"
        type="income"
        monetaryUpdate="-19,99€"
      />
    </div>
  );
}

export default App;
