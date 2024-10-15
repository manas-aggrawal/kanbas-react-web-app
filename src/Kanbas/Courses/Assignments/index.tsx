import { FaPlus, FaSearch } from "react-icons/fa";
import "./../../styles.css";
import { BsGripVertical } from "react-icons/bs";
import { IoEllipsisVertical } from "react-icons/io5";
import AssignmentControls from "./AssignmentControls";
import GreenCheckmark from "../Modules/GreenCheckmark";

export default function Assignments() {
  return (
    <div id='wd-assignments'>
      <div className='d-flex justify-content-between align-items-center mb-5'>
        {" "}
        {/* Flex container for alignment */}
        <div className='input-group' style={{ width: "300px" }}>
          {/* Search box with fixed width */}
          <span className='input-group-text bg-white'>
            <FaSearch /> {/* Magnifying glass icon */}
          </span>
          <input
            type='text'
            className='form-control border-start-0'
            placeholder='Search...'
            aria-label='Search'
          />
        </div>
        <div>
          {" "}
          {/* Container for buttons to align them to the right */}
          <button
            id='wd-add-assignment-group'
            className='btn btn-secondary bg-gray ms-2' // Added margin start
          >
            + Group
          </button>
          <button
            id='wd-add-assignment'
            className='btn btn-secondary text-white bg-danger ms-2' // Added margin start
          >
            + Assignment
          </button>
        </div>
      </div>

      <div className='border border-1 border-dark'>
        <h5
          id='wd-assignments-title'
          className='p-2 border-bottom border-dark bg-secondary d-flex justify-content-between align-items-center mb-0'
          style={{ height: "80px" }}
        >
          <div>
            <BsGripVertical className='me-2 fs-3' />
            ASSIGNMENTS
          </div>
          <span className='float-end'>
            <span className='border border-1 border-dark bg-white p-2 rounded-5'>
              40% of Total
            </span>
            <FaPlus className='ms-2' />
            <IoEllipsisVertical className='fs-4 ms-2' />
          </span>
        </h5>

        <ul
          id='wd-assignment-list'
          className='assignment-list-group list-group rounded-0'
        >
          <li className='wd-assignment-list-item p-2 d-flex align-items-center border border-1'>
            <AssignmentControls />
            <div className='ms-2'>
              <a
                className='wd-assignment-link text-decoration-none text-black fw-bold'
                href='#/Kanbas/Courses/5610/Assignments/5610'
              >
                A1 - ENV + HTML
              </a>
              <p className='wd-assignment-link mb-0 fs-6'>
                <span className='text-danger'>Multiple Modules</span> |{" "}
                <b>Not Available until</b> October 1, 2024 |
                <br />
                <b>Due</b> October 20, 2024
              </p>
            </div>
            {/* Icons added here and aligned to the right */}
            <div className='ms-auto d-flex'>
              <GreenCheckmark />
              <IoEllipsisVertical className='fs-4' />
              {/* Second icon with right margin */}
            </div>
          </li>

          <li className='wd-assignment-list-item p-2 d-flex align-items-center border border-1'>
            <AssignmentControls />
            <div className='ms-2'>
              <a
                className='wd-assignment-link text-decoration-none text-black fw-bold'
                href='#/Kanbas/Courses/5610/Assignments/5610'
              >
                A2 - CSS + Bootstrap
              </a>
              <p className='wd-assignment-link mb-0'>
                <span className='text-danger'>Multiple Modules</span> |{" "}
                <b>Not Available until</b> October 2, 2024 | <br />
                <b>Due </b> October 21, 2024
              </p>
            </div>
            {/* Icons added here and aligned to the right */}
            <div className='ms-auto d-flex'>
              <GreenCheckmark />
              <IoEllipsisVertical className='fs-4' />
              {/* Second icon with right margin */}
            </div>
          </li>

          <li className='wd-assignment-list-item p-2 d-flex align-items-center border border-1'>
            <AssignmentControls />
            <div className='ms-2'>
              <a
                className='wd-assignment-link text-decoration-none text-black fw-bold'
                href='#/Kanbas/Courses/5610/Assignments/5610'
              >
                A3 - JavaScript + React
              </a>
              <p className='wd-assignment-link mb-0'>
                <span className='text-danger'>Multiple Modules</span> |{" "}
                <b>Not Available until</b> October 3, 2024 | <br />
                <b>Due </b> October 22, 2024
              </p>
            </div>
            {/* Icons added here and aligned to the right */}
            <div className='ms-auto d-flex'>
              <GreenCheckmark />
              <IoEllipsisVertical className='fs-4' />
              {/* Second icon with right margin */}
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
