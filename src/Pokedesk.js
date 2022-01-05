import React,{Component} from 'react';
import Pokecard from './Pokecard';
import "./Pokedesk.css"


class Pokedesk extends Component{
    render(){
        let title;
		if (this.props.isWinner) {
			title = <h1 className="Pokedesk-winner">Winning Hand</h1>;
		} else {
			title = <h1 className="Pokedesk-loser">Losing Hand</h1>;
		}
        return(
            <div >
                <div className="center">
                    {title}
                    <p>Total Exp : {this.props.exp}</p>
                </div>
                <Pokecard pokemon={this.props.pokemon}/>
            </div>
        )
    }
}



export default Pokedesk;
