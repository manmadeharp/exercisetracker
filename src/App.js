import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter as Router, Route} from "react-router-dom"
import Navbar from "./components/navbar-component.js"
import ExcerciseList from "./components/excercises_list_component"
import EditExcercise from "./components/edit_excercise_component"
import CreateExcercise from "./components/create_excercise-component"
import CreateUser from "./components/create_user_component"
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <br/>
      <Route path="/" exact component={ExcerciseList}/>
      <Route path="/edit:id" exact component={EditExcercise}/>
      <Route path="/create" exact component={CreateExcercise}/>
      <Route path="/user" exact component={CreateUser}/>
    </Router>
  );
}

export default App;
