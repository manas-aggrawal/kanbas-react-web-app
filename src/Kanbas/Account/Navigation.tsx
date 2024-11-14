// import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
export default function AccountNavigation() {
  const { pathname } = useLocation();
  // const { currentUser } = useSelector((state: any) => state.accountReducer);
  // const links = currentUser ? ["Profile"] : ["Signin", "Signup"];
  return (
    <div id='wd-account-navigation' className='ps-3'>
      <Link
        to={`/Kanbas/Account/Signin`}
        className={`text-decoration-none ${
          pathname.includes("Signin")
            ? "text-black border-start border-dark border-3 ps-1 p-2 mb-2 align-items-center"
            : "text-danger"
        }`}
      >
        {" "}
        Signin{" "}
      </Link>{" "}
      <br />
      <br />
      <Link
        to={`/Kanbas/Account/Signup`}
        className={`text-decoration-none ${
          pathname.includes("Signup")
            ? "text-black border-start border-dark border-3 ps-1 p-2 mb-2 align-items-center"
            : "text-danger"
        }`}
      >
        {" "}
        Signup{" "}
      </Link>{" "}
      <br />
      <br />
      <Link
        to={`/Kanbas/Account/Profile`}
        className={`text-decoration-none ${
          pathname.includes("Profile")
            ? "text-black border-start border-dark border-3 ps-1 p-2 mb-2 align-items-center"
            : "text-danger"
        }`}
      >
        {" "}
        Profile{" "}
      </Link>{" "}
      <br />
      <br />
    </div>
  );
}
