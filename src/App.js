import "./App.css";
import AddUser from "./components/AddUser";
import AllUsers from "./components/AllUsers";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NotFound from "./components/NotFound";
import EditUser from "./components/EditUser";
import EditModal from "./components/Modal";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/adduser">
            <AddUser />
          </Route>
          <Route path="/edit/:id">
            <EditUser />
          </Route>
          <Route path="/edit/:id">
            <EditModal />
          </Route>
          <Route path="/">
            <AllUsers />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
