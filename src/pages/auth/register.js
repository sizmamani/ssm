import React from 'react';
import { Link } from 'react-router-dom'
import Authentication from './HOC';
import './register.scss';

const Register = ({
  username,
  password,
  handleTextChange,
  handleChangeMode
}) => {
    return (
      <div className="register">
        <h1>Register Page</h1>  
        <input type="text" style={styles.username} value={username} name="username" onChange={(event)=>{handleTextChange(event)}}/><br/>
        <input type="text" value={password} name="password" onChange={(event)=>{handleTextChange(event)}}/><br/>
        <button onClick={()=>{console.log("you clicked register")}}>Register</button><br/>
        <Link to="/login/">Login</Link>
      </div>
    )
}

const styles = {
  username: {
    fontWeight: 'bold',
  }
}

export default Authentication(Register);
