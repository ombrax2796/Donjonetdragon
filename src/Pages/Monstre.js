import React, { Component } from 'react';
import '../App.css';
import Porte from './Porte';
import {BrowserRouter as Router,Route,Link} from "react-router-dom";

class Monstre extends  React.Component{

    constructor(props) {
        super(props);
        this.state = {viemonstre: '52',attaquemonstre:'19',attaque:'10', faiblesse: 'feu'};
        
        this.handleChange = this.handleChange.bind(this);
    }
    

    /*componentDidMount(){
        return fetch('http://192.168.0.47/php/monstre.php')
        .then((response) => response.json())
        .then((responseJson) => {
            this.setState({
            isLoading: false,
            }, function() {
            // In this block you can do something with new state.
            });
        })
        .catch((error) => {
            console.error(error);
        });
    }*/

    handleChange() {
        this.setState({ viemonstre: this.state.viemonstre - this.state.attaque });

    }
      
       
    render () {
        if(this.state.viemonstre <= '0'){
            return (
                <div className="bodymonstre">
                    <div className="banniere">
                        <div className="text_banniere">
                            <p>Bravo !!!<br/> Tu as gagné !</p>
                        </div>
                    </div>
                    <div className="Recompense">
                        <h2>Vous avez gagné:</h2>
                        <p>500 or</p>
                    </div>
                    <Link to ='/Porte'>
                        <button>Etage suivant</button>
                    </Link>
                </div>
            );
        }else{
            return (
                <div className="bodymonstre">
                    <div className="banniere">
                        <div className="text_banniere">
                            <p>Attention!!! Un Basilic<br/> vous attaque!!!!</p>
                        </div>
                    </div>
                    <div className="lemonstre">
                        <p>Vie: {this.state.viemonstre}</p>
                        <p>Force:{this.state.attaquemonstre}</p>
                        <p>Faiblesse:{this.state.faiblesse}</p>
                    </div>
                    <button onClick={this.handleChange}>Attaque</button>
                </div>
            );
        } 
    }
}

export default Monstre;