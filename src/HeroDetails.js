import React from 'react';

export default class HeroCard extends React.Component {

   
    render() {
        const { name,rank,imageUrl, quirk,quirkex, gifURL, abilities, ShowHeroDetails, onToggleOffClick} = this.props;
        return (
          
      <div className="hero-details">
      <button className="exit-button" onClick={()=> onToggleOffClick && onToggleOffClick()}>X</button>
      <br/>
      <img src={gifURL} className="hero-image" ></img>
      <div>
         <label> {name}</label>
           <br/> 
           <label> Rank </label># {rank}
           <br/> <br/>
           <label>Quirk: </label>{quirk} - {quirkex} <br/> <br/> 
           <label>Abilities:</label>{abilities}
           </div>
      
    
          </div>
          
        );
    }
}