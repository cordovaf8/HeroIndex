import React, {Component} from 'react';

export default class NavButton extends React.Component {

   
    render() {
        const { onChangeClick, id,text } =this.props
        return (
          
            <button onClick={()=> onChangeClick && onChangeClick(id)}>
                {text}
                
            </button>
          
        );
    }
}