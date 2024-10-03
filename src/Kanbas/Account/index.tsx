import { Routes, Route, Navigate } from "react-router";
import Profile from "./Profile";
import Signin from "./signin";
import Signup from "./Signup";
import AccountNavigation from "./Navigation";
export default function Account() {
  return (
    <div id='wd-account-screen' className='mb-3 ms-3 mt-4'>
      <h2>Account</h2>
      <table>
        <tr>
          <td valign='top'>
            <AccountNavigation />
          </td>
          <td valign='top'>
            <Routes>
              <Route
                path='/'
                element={<Navigate to='/Kanbas/Account/Signin' />}
              />
              <Route path='/Signin' element={<Signin />} />
              <Route path='/Profile' element={<Profile />} />
              <Route path='/Signup' element={<Signup />} />
            </Routes>
          </td>
        </tr>
      </table>
    </div>
  );
}
