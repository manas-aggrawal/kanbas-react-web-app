import { Link, useLocation } from "react-router-dom";
import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";
import "./styles.css";

export default function KanbasNavigation() {
  const { pathname } = useLocation();

  return (
    <>
      <img
        src='/images/Canvas_Stacked_ByInstructure_Color_RGB.webp'
        alt='Menu'
        className='navbar-toggler-icon custom-toggler d-md-none position-fixed top-0 start-0 mt-2 ms-2 z-3'
        data-bs-toggle='offcanvas'
        data-bs-target='#kanbasNavOffcanvas'
      />

      {/* Toggle kanbas navigation */}
      <div
        className='offcanvas offcanvas-start d-md-none w-100'
        data-bs-backdrop='false'
        tabIndex={-1}
        id='kanbasNavOffcanvas'
      >
        <div className='offcanvas-header'>
          <img
            src='/images/Canvas_Stacked_ByInstructure_Color_RGB.webp'
            className='toggle-menu-img d-md-none position-fixed top-0 start-0 mt-2 ms-2 z-3 me-5'
            alt=''
          />{" "}
          <h5
            className='offcanvas-title ms-5 text-danger'
            id='kanbasNavOffcanvasLabel'
          >
            Kanbas
          </h5>
          <button
            type='button'
            className='btn-close'
            data-bs-dismiss='offcanvas'
          ></button>
        </div>
        <div className='offcanvas-body'>
          <div
            id='wd-kanbas-navigation'
            className='list-group rounded-0 bg-white'
          >
            {/* navigation items */}
            <a
              id='wd-neu-link'
              target='_blank'
              href='https://www.northeastern.edu/'
              className='list-group-item text-center border-0 bg-white text-danger'
              rel='noreferrer'
            >
              <img
                src='/images/Northeastern_Huskies_.webp'
                width='75px'
                alt=''
              />
            </a>
            <br />
            <Link
              to='/Kanbas/Account'
              id='wd-account-link'
              className={`list-group-item text-center border-0 bg-white text-danger`}
            >
              <FaRegCircleUser className={`fs-1 text-danger`} />
              <br />
              Account{" "}
            </Link>
            <br />
            <Link
              to='/Kanbas/Dashboard'
              id='wd-dashboard-link'
              className='list-group-item text-center border-0 bg-white text-danger'
            >
              <AiOutlineDashboard className='fs-1 text-danger' />
              <br />
              Dashboard{" "}
            </Link>
            <br />
            <Link
              to='/Kanbas/Courses/5610/Home'
              id='wd-course-link'
              className='list-group-item text-center border-0 bg-white text-danger'
            >
              <LiaBookSolid className='fs-1 text-danger' />
              <br />
              Courses{" "}
            </Link>

            <br />
            <Link
              to='/Kanbas/Calendar'
              id='wd-calendar-link'
              className='list-group-item text-center border-0 bg-white text-danger'
            >
              <IoCalendarOutline className='fs-1 text-danger' />
              <br />
              Calendar
            </Link>
            <br />
            <Link
              to='/Kanbas/Inbox'
              id='wd-inbox-link'
              className='list-group-item text-center border-0 bg-white text-danger'
            >
              <FaInbox className='fs-1 text-danger' />
              <br />
              Inbox
            </Link>
            <br />
            <Link
              to='/Labs'
              id='wd-labs-link'
              className='list-group-item text-center border-0 bg-white text-danger'
            >
              <LiaCogSolid className='fs-1 text-danger' />
              <br />
              Labs
            </Link>
          </div>
        </div>
      </div>

      {/* Main Kanbas navigation */}
      <div
        id='wd-kanbas-navigation'
        style={{ width: 120 }}
        className='list-group rounded-0 position-fixed
           bottom-0 top-0 d-none d-md-block bg-black z-2'
      >
        {/* navigation items */}
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
    </>
  );
}
