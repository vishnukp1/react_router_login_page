import React from 'react'
import { Link } from "react-router-dom";

function Login() {
    return (
        <div>
            <h1>This is the Login page</h1>
          
  <label for="username">Username:</label>
  <input type="text" id="username" name="username" /> <br/>

  <label for="password">Password:</label>
  <input type="password" id="password" name="password" /> <br />

  



            <Link to="/"><button type="submit">Login</button></Link>
      
     
        </div>
    )
}

export default Login