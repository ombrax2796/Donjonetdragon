import React, { Component } from 'react';
import '../App.css';
import {Link} from "react-router-dom";

class Marche extends Component{

    render(){
        return (
        <div className="bodymarche">
            <div className="banniere">
              <div className="text_banniere">
                <p>Bonjour ! Que voulez-vous<br/>acheter?</p>
              </div>
            </div>
            <div className="marche">
                <div className="marcheatk">
                    <p>atk+10</p>
                    <p>atk+10</p>
                    <p>atk+10</p>
                    <p>atk+10</p>
                </div>
                <div className="marchedef">
                    <p>def+10</p>
                    <p>def+10</p>
                    <p>def+10</p>
                    <p>def+10</p>
                </div>
            </div>
            <Link to ='/Porte'>
              <button>Partir</button>
            </Link>
        </div>   
        )
    } 
}

export default Marche;