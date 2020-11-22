import {Route,Switch} from 'react-router-dom';
import './App.css';
import Cheetos from "./Components/Cheetos";
import Lays from "./Components/Lays";
import Kitkat from "./Components/Kitkat";
import VendingMachine from "./Components/VendingMachine";
import NavBar from "./Components/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" component={VendingMachine} />
        <Route exact path="/Cheetos" component={Cheetos} />
        <Route exact path="/Lays" component={Lays} />
        <Route exact path="/Kitkat" component={Kitkat} />
      </Switch>
    </div>
  );
}

export default App;
