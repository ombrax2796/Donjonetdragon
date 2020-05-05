import React, { Component } from 'react';
import '../App.css';
import {Link} from "react-router-dom";

class Repos extends Component{

    render(){
        return (
        <div className="bodyrepos">
            <div className="banniere">
              <div className="text_banniere">
                <p>Vous méritez un bon repos</p>
              </div>
            </div>
            <Link to ='/Porte'>
              <button>Partir</button>
            </Link>
        </div>   
        )
    } 
}

export default Repos;