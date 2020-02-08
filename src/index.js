import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import About from './About';
import Contact from './Contact';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));



class ContactLink extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isToggleOn: true };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(state => ({ isToggleOn: !state.isToggleOn }));
        ReactDOM.render(<Contact />, document.getElementById('root'));
    }

    render() {
        return (
            <a href="#contact" class={this.state.isToggleOn ? 'active' : 'OFF'} onClick={this.handleClick}>Contact</a>
        );
    }
}

class AboutLink extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isToggleOn: true };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(state => ({ isToggleOn: !state.isToggleOn }));
        ReactDOM.render(<About />, document.getElementById('root'));
    }

    render() {
        return (
            <a href="#about"  class={this.state.isToggleOn ? 'active' : 'OFF'} onClick={this.handleClick}>About</a>
        );
    }
}


ReactDOM.render(<AboutLink />, document.getElementById('about'));
ReactDOM.render(<ContactLink />, document.getElementById('contact'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
