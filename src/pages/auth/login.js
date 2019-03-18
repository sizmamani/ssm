import React from 'react';
import { Link } from 'react-router-dom';
import Authentication from './HOC';
import './login.scss';

const Login = ({
  username,
  password,
  handleTextChange,
  handleChangeMode
}) => {
    return (
      <div className="login">
        <h1>Login Page</h1>  
        <input type="text" style={styles.username} value={username} name="username" onChange={(event)=>{handleTextChange(event)}}/><br/>
        <input type="text" value={password} name="password" onChange={(event)=>{handleTextChange(event)}}/><br/>
        <button onClick={()=>{console.log("you clicked login")}}>Login</button><br/>
        <Link to="/register/">Register</Link>
      </div>
    )
}

const styles = {
  username: {
    fontWeight: 'bold',
  }
}

export default Authentication(Login);
