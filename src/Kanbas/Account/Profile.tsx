import { Link } from "react-router-dom";
export default function Profile() {
  return (
    <div id='wd-profile-screen'>
      <h3>Profile</h3>
      <input id='wd-username' value='manas' placeholder='username' />
      <br />
      <input
        id='wd-password'
        value='123'
        placeholder='password'
        type='password'
      />
      <br />
      <input id='wd-firstname' value='manas' placeholder='First Name' />
      <br />
      <input id='wd-lastname' value='aggrawal' placeholder='Last Name' />
      <br />
      <input id='wd-dob' value='1999-01-07' type='date' />
      <br />
      <input id='wd-email' value='manasagg7199@gmail.com' type='email' />
      <br />
      <select id='wd-role'>
        <option value='USER'>User</option>
        <option value='ADMIN'>Admin</option>
        <option value='FACULTY'>Faculty</option>
        <option value='STUDENT'>Student</option>
      </select>
      <br />
      <Link to='/Kanbas/Account/Signin'>Sign out</Link>
    </div>
  );
}
