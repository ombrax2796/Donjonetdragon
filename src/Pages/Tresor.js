import React, { Component } from 'react';
import '../App.css';
import {Link} from "react-router-dom";

class Tresor extends Component{

    constructor(props) {
        super(props);
        this.state = {mode: 'view'};
        
        this.Open = this.Open.bind(this);
    }
      
    Open() {
        this.setState({ mode: 'result' });
    }


    render(){
        if(this.state.mode === 'view'){
            return (
                <div className="bodytresor">
                    <div className="banniere">
                        <div className="text_banniere">
                            <p>Tu as trouvé un trésor!!!</p>
                        </div>
                    </div>
                    <button onClick={this.Open}>Ouvrir</button>
                </div> 
            )
        }else{
            return (
                <div className="bodytresor">
                    <div className="banniere">
                        <div className="text_banniere">
                            <p>Tu as trouvé un trésor!!!</p>
                        </div>
                    </div>
                    <div className="Recompense">
                        <h2>Vous avez gagné:</h2>
                        <p>500 or et une épée courbe</p>
                    </div>
                    <Link to ='/Porte'>
                        <button>Etage suivant</button>
                    </Link>
                </div> 
            )
        }  
    }

}

export default Tresor;