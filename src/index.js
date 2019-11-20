import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Menu from './componentes/menu/Menu'
import Home from './componentes/home/Home'
import Servicios from './componentes/home/servicios/Servicios'
import Slider from './componentes/home/slider/Slider'
import Footer from './componentes/footer/Footer'
import * as serviceWorker from './serviceWorker';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'; // Archivo CSS de Bootstrap 4 
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'; // Archivo Javascript de Bootstrap 4 


ReactDOM.render(<Menu />, document.getElementById('menu'));
ReactDOM.render(<Home />, document.getElementById('home'));
ReactDOM.render(<Slider />, document.getElementById('slider'));

//ReactDOM.render(<Servicios />, document.getElementById('servicios'));

//ReactDOM.render(<Footer />, document.getElementById('footer'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
