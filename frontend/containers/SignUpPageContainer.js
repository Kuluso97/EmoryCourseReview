import React, {Component} from 'react'
import { connect } from 'react-redux';
import axios from 'axios';

class SignUpPageContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: "",
      password: ""
    }
  }

  updateEmail(event){
    this.setState({email: event.target.value});
  }

  updatePassword(event){
    this.setState({password: event.target.value});
  }

  signup() {
        // Send a POST request
        console.log(this.state.email)
        console.log(this.state.password)
        axios({
          method: 'post',
          url: 'http://localhost:3000/account/signup',
          data: {
            email: this.state.email,
            password: this.state.password
          }
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
  }
  render() {
    return(
      <div>

      <div className = "header">
          <div className = "header-title"> <span className = "header-title-emory">Emory</span> Course Critique </div>
      </div>

      <div className = "register-body">
        <div className = "register-body-main-component">
          <div className = "register-body-title">Sign Up</div>

          <div className = "first-last-name">
          <div className = "name-col">
          <input
           type="text"
           placeholder="First name"
           className="user-input"
          />
          </div>

          <div className = "name-col">
          <input
           type="text"
           placeholder="Last name"
           className="user-input"
          />
          </div>
          </div>


          <div className = "inputs-sizes">
          <input
           type="text"
           value={this.state.email}
           placeholder="Email Address"
           className="user-input"
           onChange={(event) => this.updateEmail(event)}
          />
          </div>

          <div className = "inputs-sizes">
          <input
           type="text"
           value={this.state.password}
           placeholder="Password"
           className="user-input"
           onChange={(event) => this.updatePassword(event)}
          />
          </div>

          <div className = "inputs-sizes">
          <input
           type="text"
           placeholder="Repeat Password"
           className="user-input"
          />
          </div>

          <div className="submit-button-row">
          <button
          type="button"
          className="submit-button"
          onClick={() => this.signup()}>
          Submit
          </button>
          </div>


          </div>
        </div>
      </div>
    )
  }
};

const mapStateToProps = state => {
  return{
  }
}

const mapDispatchToProps = dispatch => {
  return {
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUpPageContainer);
