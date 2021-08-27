import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import {
  LoginWrapper,
  LoginBox,
  Input,
  Button,
} from './style';

class Login extends PureComponent {
    render() {
        return (
          <LoginWrapper>
            <LoginBox>
              <Input placeholder='Username' ref={(input) => {this.account = input}}/>
              <Input placeholder='Password' type='password' ref={(input) => {this.password = input}}/>
              <Button onClick={() => this.props.login(this.account, this.password)}>Log In</Button>
            </LoginBox>
          </LoginWrapper>
            
        )
    }
    componentDidMount() {
    }
}



const mapDispatch = (dispatch) => ({
  login(accountElem, passwordElem) {
    console.log(accountElem.value, passwordElem.value);
  }
})

export default connect(null, mapDispatch)(Login);