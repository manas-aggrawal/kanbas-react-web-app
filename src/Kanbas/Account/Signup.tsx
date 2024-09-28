import React from "react";
import { Link } from "react-router-dom";
export default function Signup() {
  return (
    <div id='wd-signup-screen'>
      <h3>Sign up</h3>
      <input placeholder='username' id='wd-signup-username' />
      <br />
      <input placeholder='password' type='password' id='wd-signup-pwd' />
      <br />
      <input
        placeholder='verify password'
        type='password'
        id='wd-signup-verify-pwd'
      />
      <br />
      <Link to='/Kanbas/Account/Profile'> Sign up </Link>
      <br />
      <Link to='/Kanbas/Account/Signin'>Sign in</Link>
    </div>
  );
}
