import React,{Component} from 'react';
import "./Pokecard.css"

function Card(m){
    let id = m.id;
    if(id<10){
        id=`00${id}`;
    }
    else if(id<100){
        id=`0${id}`;
    }
    const source = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${id}.png`
    return (
        <div className="cards">
        <h3>{m.name}</h3>    
        <img className="Pokecard-img"src={source} alt="Images"/>
        <p>Type : {m.type}</p>
        <p>Exp : {m.base_experience}</p>
        </div>
    )
}

class Pokecard extends Component{    
    render(){
        const {pokemon} = this.props;
        return(
            <div className="Pokecard">
                {pokemon.map(Card)}
            </div>
        )
    }
}


export default Pokecard;