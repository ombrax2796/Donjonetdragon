import React, { Component } from 'react';
import '../App.css';
import {Link} from "react-router-dom";


function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

class Porte extends Component{

    constructor(props) {
        super(props);
        this.state = {liens:'', etage: '1'};
        this.Open = this.aléatoire.bind(this);
    }

    aléatoire(){
        var premier=getRandomInt(2);
        if( premier == 0){
            this.liens='/Monstre';
        }else{
            var deuxieme=getRandomInt(3);
            console.log(deuxieme)
            if(deuxieme == 0){
                this.liens='/Marche';
            }if(deuxieme == 1){
                this.liens='/Tresor';
            }else{
                this.liens='/Repos';
            }  
        }   
    }

    render(){
        return (
            <div className="bodyporte">
                <div className="banniere">
                    <div className="text_banniere">
                        <p>Etage :{this.state.etage} <br/>Par où passer?</p>
                    </div>
                </div>
                {this.aléatoire()}
                <Link to = {this.liens}>
                    <button>Gauche</button> 
                    <button>Devant</button>
                    <button>Droite</button>  
                </Link>    
            </div>    
        )
    } 
}

export default Porte;