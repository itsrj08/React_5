import React, { useEffect, useState } from 'react'
import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from './config';
import Home from './Home';

function Signin() {
    const [value, setValue] =useState('');

    const handleClick = () => {
        signInWithPopup(auth, provider)
        .then((data) => {
            setValue(data.user.email);
            localStorage.setItem("email", data.user.email);
        })
        .catch((error) => {
            console.log(error)
        })
    }

    useEffect(() => {
        let userEmail = localStorage.getItem("email")
        if(userEmail) {
            setValue(userEmail);
        }
    }, []);

  return (
    <div>
      <div className="signin-container">
        {value ? <home
        setValue={setValue}
        /> :
            <button className='signin-button' onClick={handleClick}>
                Sign-in with Google
            </button>}
      </div>
    </div>
  )
}

export default Signin
