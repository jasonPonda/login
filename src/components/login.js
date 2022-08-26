import React, { useState } from 'react';

import "../styles/style.css";

function Login ()  {

    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    const database = [
        {

        username: "user1",
        password: "pass1"
        
    },
       {
        username: "user2",
        password: "pass2"
       }
    ];

    const errors = {
        uname: 'invalid username',
        pass: 'invalid password'
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        let { uname, pass } = document.forms[0];

        // Find user login info
        const userData = database.find((user) => user.username === uname.value);

        // compare user info
        if(userData) {
            if(userData.password !== pass.value) {
                // invalid password
                setErrorMessages({ name: "pass", message: errors.pass });
            } else {
                setIsSubmitted(true);
            }
        } else {
            setErrorMessages({ name: "uname", message: errors.uname });
        }
    };

    // generate jsx code for error message
    const renderErrorMessage = (name) =>
    name === errorMessages.name && (
        <div className='error'>{errorMessages.message}</div>
    );

    // jsx code for login form
    const renderForm = (
        <div className='form'>
            <form onSubmit={handleSubmit}>
                <div className='input-container'>
                    <label htmlFor='username'>Username</label>
                    <input type='text' name='uname' required />
                    {renderErrorMessage("uname")}
                </div>
                <div className='input-container'>
                    <label htmlFor='pass'>Password</label>
                    <input type='password' name='pass' required />
                    {renderErrorMessage("pass")}
                </div>
                <div className='button-container'>
                    <input type='submit' />
                </div>
            </form>
        </div>
    )

  return (
    <div className='log'>
        <div className='login-form'>
            <div className='title'>Sign In</div>
            {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
        </div>
    </div>
  )
}

export default Login