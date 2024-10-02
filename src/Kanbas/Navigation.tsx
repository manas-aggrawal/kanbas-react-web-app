import { Link, useLocation } from "react-router-dom";
import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";

export default function KanbasNavigation() {
  const { pathname } = useLocation();
  return (
    <div
      id='wd-kanbas-navigation'
      style={{ width: 120 }}
      className='list-group rounded-0 position-fixed
         bottom-0 top-0 d-none d-md-block bg-black z-2'
    >
      <a
        id='wd-neu-link'
        target='_blank'
        href='https://www.northeastern.edu/'
        className='list-group-item text-center border-0 bg-black text-white'
        rel='noreferrer'
      >
        <img src='/images/Northeastern_Huskies_.webp' width='75px' alt='' />
      </a>
      <br />
      <Link
        to='/Kanbas/Account'
        id='wd-account-link'
        className={`list-group-item text-center border-0  ${
          pathname.includes("Account")
            ? "bg-white text-danger"
            : "bg-black text-white"
        }`}
      >
        <FaRegCircleUser
          className={`fs-1 ${
            pathname.includes("Account") ? "text-danger" : "text-white"
          }`}
        />
        <br />
        Account{" "}
      </Link>
      <br />
      <Link
        to='/Kanbas/Dashboard'
        id='wd-dashboard-link'
        className={`list-group-item text-center border-0  ${
          pathname.includes("Dashboard")
            ? "bg-white text-danger"
            : "bg-black text-white"
        }`}
      >
        <AiOutlineDashboard className='fs-1 text-danger' />
        <br />
        Dashboard{" "}
      </Link>
      <br />
      <Link
        to='/Kanbas/Courses/5610/Home'
        id='wd-course-link'
        className={`list-group-item text-center border-0  ${
          pathname.includes("Courses")
            ? "bg-white text-danger"
            : "bg-black text-white"
        }`}
      >
        <LiaBookSolid className='fs-1 text-danger' />
        <br />
        Courses{" "}
      </Link>

      <br />
      <Link
        to='/Kanbas/Calendar'
        id='wd-calendar-link'
        className={`list-group-item text-center border-0  ${
          pathname.includes("Calendar")
            ? "bg-white text-danger"
            : "bg-black text-white"
        }`}
      >
        <IoCalendarOutline className='fs-1 text-danger' />
        <br />
        Calendar
      </Link>
      <br />
      <Link
        to='/Kanbas/Inbox'
        id='wd-inbox-link'
        className={`list-group-item text-center border-0  ${
          pathname.includes("Inbox")
            ? "bg-white text-danger"
            : "bg-black text-white"
        }`}
      >
        <FaInbox className='fs-1 text-danger' />
        <br />
        Inbox
      </Link>
      <br />
      <Link
        to='/Labs'
        id='wd-labs-link'
        className={`list-group-item text-center border-0  ${
          pathname.includes("Labs")
            ? "bg-white text-danger"
            : "bg-black text-white"
        }`}
      >
        <LiaCogSolid className='fs-1 text-danger' />
        <br />
        Labs
      </Link>
    </div>
  );
}
