import React from 'react';
import LoginPage from '../login/loginPage'
import FormPage from '../login/FormPage'
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {PrivateRoute} from '../login/__componentes/PrivateRoute'
import {HomePage} from '../componentes/HomePage'
class App extends React.Component {
  render() {
      return (
          <div className="jumbotron">
              <div className="container" id='container'>
                  <div className="col-sm-8 col-sm-offset-2" id='hijo-container'>
                      <Router>
                          <div>
                              <Route exact path="/" component={HomePage} />
                            <div>  <Route path="/login" component={FormPage} /> </div>
                              
                          </div>
                      </Router>
                  </div>
              </div>
          </div>
      );
  }
}
export default App;
