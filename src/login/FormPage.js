import React, {Component}from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';

class FormPage extends Component{

  constructor(props) {
    super(props);

   // userService.logout();

    this.state = {
        username: '',
        password: '',
        submitted: false,
        loading: false,
        error: ''
    };

    this.handleChange = this.handleChange.bind(this);
   this.handleSubmit = this.handleSubmit.bind(this);
    
}
handleChange(e) {
    const { name, value } = e.target;
    
    this.setState({ [name]: value });
}

handleSubmit(e) {
    //e.preventDefault();
   

    this.setState({ submitted: true });
    const { username, password, returnUrl } = this.state;

    // stop here if form is invalid
    
    this.setState({ loading: true });
     if(username==='test' && password==='test') {
        this.setState({ submitted: true });
     
             
             const { from } =  { from: { pathname: "/" } };
                this.props.history.push(from);
            
            }
      
     else{      
          this.setState({ loading: false })
         }
            
    
     
}
  render(){

    const { username, password, submitted, loading, error } = this.state;
  return (
    
    <div>
      
          <form 
          className="needs-validation" 
          onSubmit={this.handleSubmit} 
          noValidate
          > 
           <p className="h5 text-left md-6">Sign in</p>
           <MDBRow>
           <MDBCol md="6">
           <div className={'form-group' + (submitted && !username ? ' has-error' : '')}>
              <MDBInput
                value={username}
                onChange={this.handleChange}
                name="username"
                label="Type your username"
                icon="user"
                id="materialFormRegisterNameEx"
                type="text"
                
              
               ><div className="invalid-feedback">
               Please provide a  valid username 
             </div>
                <div className="valid-feedback">Looks good!</div>
              </MDBInput>
              </div>
              <MDBInput 
                value={password}
                onChange={this.handleChange}
                label="Type your password"
                icon="lock"
                name="password"
                type="password"
                
               
                required 
                validate={true}
              >
                 <div className="invalid-feedback">
                  Please provide a  valid password
                </div>
                <div className="valid-feedback">Looks good!</div>
              </MDBInput>
            <div className="text-center">
              <MDBBtn type='submit' disabled={loading}>Login</MDBBtn>
             
            </div>
               </MDBCol>
          </MDBRow>
          {error &&
                  <div className={'alert alert-danger'}>{error}</div>
              }
          </form>
     
    </div>
  );
};
  
}
export default FormPage;