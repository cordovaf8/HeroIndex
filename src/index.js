import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import * as serviceWorker from './serviceWorker';



function render(){
ReactDOM.render(<App />, document.getElementById('root'));
}
render();
serviceWorker.unregister();
