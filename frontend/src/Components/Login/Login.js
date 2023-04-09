import React from 'react'
import "./Login.css"
function Login() {
  return (
    <div className="loginPage">
        <div className='login'>
            <h1 className='text-center'>Login</h1>
            <form className='needs-validation'>
                <div className='form-group'>
                    <label className='form-label' for="username">Username</label>
                    <input className='form-control' id="username" required></input>
                    <div className='invalid-feedback'>
                        Please enter a valid
                    </div>
                </div>

                <div className='form-group'>
                    <label className='form-label' for="password">Password</label>
                    <input className='form-control' id="password" type="password" required></input>
                    <div className='invalid-feedback'>
                        Please enter a valid
                    </div>
                </div>

                

                <input className='btn btn-success w-100' type="submit" value="login"></input>

            </form>


        </div>
    </div>
  )
}

export default Login