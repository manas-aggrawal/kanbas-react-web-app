import React from "react";
import { Link } from "react-router-dom";
export default function Signup() {
  return (
    <div id='wd-signup-screen' className='ms-5'>
      <h3>Sign up</h3>
      <input
        placeholder='username'
        id='wd-signup-username'
        className='form-control mb-2'
      />
      <br />
      <input
        placeholder='password'
        type='password'
        id='wd-signup-pwd'
        className='form-control mb-2'
      />
      <br />
      <input
        placeholder='verify password'
        type='password'
        id='wd-signup-verify-pwd'
        className='form-control mb-2'
      />
      <br />
      <Link to='/Kanbas/Account/Profile' className='btn btn-primary w-100'>
        {" "}
        Sign up{" "}
      </Link>
      <br />
      <Link to='/Kanbas/Account/Signin'>Sign in</Link>
    </div>
  );
}
