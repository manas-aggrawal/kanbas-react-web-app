import { Link } from "react-router-dom";
export default function Profile() {
  return (
    <div id='wd-profile-screen' className='ms-5'>
      <h3>Profile</h3>
      <input
        id='wd-username'
        value='manas'
        placeholder='username'
        className='form-control mb-2'
      />
      <br />
      <input
        id='wd-password'
        value='123'
        placeholder='password'
        type='password'
        className='form-control mb-2'
      />
      <br />
      <input
        id='wd-firstname'
        value='manas'
        placeholder='First Name'
        className='form-control mb-2'
      />
      <br />
      <input
        id='wd-lastname'
        value='aggrawal'
        placeholder='Last Name'
        className='form-control mb-2'
      />
      <br />
      <input
        id='wd-dob'
        value='1999-01-07'
        type='date'
        className='form-control mb-2'
      />
      <br />
      <input
        id='wd-email'
        value='manasagg7199@gmail.com'
        type='email'
        className='form-control mb-2'
      />
      <br />
      <select id='wd-role' className='form-select mb-2'>
        <option value='USER'>User</option>
        <option value='ADMIN'>Admin</option>
        <option value='FACULTY'>Faculty</option>
        <option value='STUDENT'>Student</option>
      </select>
      <br />
      <Link
        to='/Kanbas/Account/Signin'
        className='btn btn-primary w-100 bg-danger text-white'
      >
        Sign out
      </Link>
    </div>
  );
}
