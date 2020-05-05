import React, { Component } from 'react';
import Tresor from './Pages/Tresor';
import Marche from './Pages/Marche';
import Monstre from './Pages/Monstre';
import Porte from './Pages/Porte';
import Repos from './Pages/Repos';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import'./App.css';


class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {vie: '50', attaque: '10', or:'20'};
  }

  render (){
    return(
      <div className="App">
        <header className="App-header">
          <h1>Donjons & <br/> dragons</h1>
          <p>Vie {this.state.vie}/50</p>
          <p>Or : {this.state.or}</p>
          <div className="option">
            <button>Option</button>
          </div>
        </header>
        <Router>
          <div >
            <Switch>
              <Route path="/" exact component={Accueil} />
              <Route path="/Tresor" exact component={Tresor} />
              <Route path="/Marche" component={Marche} />
              <Route path="/Monstre" component={Monstre} />
              <Route path="/Porte" component={Porte} />
              <Route path="/Repos" component={Repos} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

const Accueil = () =>(
  <div className="body">
      <div className="banniere">
        <div className="text_banniere">
          <p>Bienvenue</p>
        </div>
      </div>
      <Link to ='/Monstre'>
        <button>Jouer</button>
      </Link>
  </div>
);

export default App;