import { Link, useLocation } from "react-router-dom";
export default function AccountNavigation() {
  const { pathname } = useLocation();
  return (
    <div id='wd-account-navigation'>
      <Link
        to={`/Kanbas/Account/Signin`}
        className={`${
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
        className={`${
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
        className={`${
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
