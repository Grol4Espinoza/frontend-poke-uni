import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App/App';
import Menu from './componentes/menu/Menu'
import Home from './componentes/home/Home'
import Servicios from './componentes/home/servicios/Servicios'
import Slider from './componentes/home/slider/Slider'
import Footer from './componentes/footer/Footer'
import * as serviceWorker from './serviceWorker';



ReactDOM.render(<App/>,document.getElementById('root'));
/*
ReactDOM.render(<Menu />, document.getElementById('menu'));
ReactDOM.render(<Home />, document.getElementById('home'));
ReactDOM.render(<Slider />, document.getElementById('slider'));
*/
//ReactDOM.render(<Servicios />, document.getElementById('servicios'));

//ReactDOM.render(<Footer />, document.getElementById('footer'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
