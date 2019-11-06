import React from 'react';
import $ from "jquery";
function expandButton(params) {
       
}
export default class HeroCard extends React.Component {

 
    render() {
        const {hero, onToggleClick,key } =this.props
        return (
          <div id={hero.name}>
            <button onClick={()=> onToggleClick && onToggleClick()} class="hero-card">
                <img src={hero.imageUrl} className="hero-image" ></img>
                <div>{hero.name} <br/> Rank # {hero.rank} <br/>Quirk: {hero.quirk}</div>
            </button>
            </div>
          
        );
    }
}