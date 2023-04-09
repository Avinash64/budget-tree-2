import React from 'react'
import "./Register.css"
function Register() {
  return (
    <div className="registerPage">
        <div className='register'>
            <h1 className='text-center'>Register</h1>
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

                <div className='form-group'>
                    <label className='form-label' for="confirmPassword">Confirm Password</label>
                    <input className='form-control' id="confirmPassword" type="password" required></input>
                    <div className='invalid-feedback'>
                        Please enter a valid
                    </div>
                </div>

                <div className='form-group'>
                    <label className='form-label' for="email">Email</label>
                    <input className='form-control' type="email" id="email" required></input>
                    <div className='invalid-feedback'>
                        Please enter a valid
                    </div>
                </div>

                <div className='form-group'>
                    <label className='form-label' for="confirmEmail">Confirm Email</label>
                    <input className='form-control' id="confirmEmail" required></input>
                    <div className='invalid-feedback'>
                        Please enter a valid
                    </div>
                </div>

                <input className='btn btn-success w-100' type="submit" value="Register"></input>

            </form>


        </div>
    </div>
  )
}

export default Register