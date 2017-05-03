import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { localLogin , fbDoLogin} from './authAction'

const Login = ({login, fbLogin})=>{
  let username
  let password
  const _login = () => {
    login(username.value, password.value)
  } 
  const _fbLogin=()=>{
    fbLogin()
  }
  return (
    <div>
      <br/>
      <div className="form-group">
        <input type="text" id="log_username" placeholder="Username" className="form-control " ref={ (node) => username = node }/>
      </div>
      <br/>
      <div className="form-group">
        <input type="password" id="log_password" placeholder="Password" className="form-control" ref={ (node) => password = node }/>
      </div>
      <button className="btn btn-success float_right" id="login" onClick={ _login }>Login</button>
      <button className="btn btn-defualt float_right" id="fbLogin" onClick={ _fbLogin }>Login with Facebook</button>
      <br/>
      <br/>
    </div>
  )
}
export default connect(null, dispatch => ({
  login: (username, password) => {
      dispatch(localLogin(username, password))
    },
  fbLogin: ()=> dispatch(fbDoLogin())
  })
)(Login)
