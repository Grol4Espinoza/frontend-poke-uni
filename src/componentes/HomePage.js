import React from 'react';
import { Link } from 'react-router-dom';
import Menu from './menu/Menu'
import Home from './home/Home'
import Servicios from './home/servicios/Servicios'
import Slider from './home/slider/Slider'
import Footer from './footer/Footer'
import HomeContainer from '../services/HomeContainer'

//import { userService } from '../_services';

class HomePage extends React.Component {
    
    constructor(props) {
        super(props);

        this.state = {
            user: {},
            users: []
        };
    }

    componentDidMount() {
        this.setState({ 
            user: JSON.parse(localStorage.getItem('user')),
            users: { loading: true }
        });
      //  userService.getAll().then(users => this.setState({ users }));
    }

    render() {
        const { user, users } = this.state;
        return (
            <div>
            <div> <Menu /> </div>
            <div><HomeContainer/></div>
        </div>
            /*
ReactDOM.render(<Menu />, document.getElementById('menu'));
ReactDOM.render(<Home />, document.getElementById('home'));
ReactDOM.render(<Slider />, document.getElementById('slider'));
*/
        );
    }
}

export { HomePage };