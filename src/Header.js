import React from 'react';
import logo from './logo.png';
import NavButton from './NavButton';
export default class Header extends React.Component {
    render() {

        return (
            <div class="container">
                <div class="jumbotron">
                <img class="header-image"src={logo} alt="logo" />
                    <h1>My Hero Academia Hero Index</h1>
                    <p>See Heroe's Rankings, Quirks, and personal information.</p>
                <div class="button-group text-center">
                  <NavButton text="Heroes" onChangeClick={() => this.props.onChangeClick('Heroes')}/>
                  <NavButton text="Students" onChangeClick={() => this.props.onChangeClick('Students')}/>
                  <NavButton text="Villans" onChangeClick={() => this.props.onChangeClick('Villans')}/>
                  </div>
                </div>
            </div>
        );
    }
}