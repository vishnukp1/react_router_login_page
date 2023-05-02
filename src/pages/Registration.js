import React from 'react'
import {Link} from 'react-router-dom'

function Registration() {
    return (
        <div>
            <h1>Registration</h1>
            <form>
  <label for="name">Name:</label>
  <input type="text" id="name" name="name" /> <br />

  <label for="email">Email:</label>
  <input type="email" id="email" name="email" /><br />

  <label for="password">Password:</label>
  <input type="password" id="password" name="password" />
  <br />

  <label for="confirm-password">Confirm Password:</label>
  <input type="password" id="confirm-password" name="confirm-password" /> <br />

  
  <Link to="/login"><button type="submit">Register</button></Link>
     
</form>

           
            
        </div>
    )
}

export default Registration