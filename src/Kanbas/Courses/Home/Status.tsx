import { FaCheckCircle } from "react-icons/fa";
import { MdAnnouncement, MdDoNotDisturbAlt } from "react-icons/md";
import { BiHomeAlt, BiImport } from "react-icons/bi";
import { LiaFileImportSolid } from "react-icons/lia";
import { IoAnalytics, IoNotifications } from "react-icons/io5";

export default function CourseStatus() {
  return (
    <div id='wd-course-status' style={{ width: "300px" }}>
      <h2>Course Status</h2>
      <div className='d-flex'>
        <div className='w-50 pe-1'>
          <button className='btn btn-lg btn-secondary w-100 text-nowrap '>
            <MdDoNotDisturbAlt className='me-2 fs-5' /> Unpublish{" "}
          </button>
        </div>
        <div className='w-50'>
          <button className='btn btn-lg btn-success w-100'>
            <FaCheckCircle className='me-2 fs-5' /> Publish{" "}
          </button>
        </div>
      </div>
      <br />
      <button className='btn btn-lg btn-secondary w-100 mt-1 text-start'>
        <BiImport className='me-2 fs-5' /> Import Existing Content{" "}
      </button>
      <button className='btn btn-lg btn-secondary w-100 mt-1 text-start'>
        <LiaFileImportSolid className='me-2 fs-5' /> Import from Commons{" "}
      </button>

      {"\n"}
      <button className='btn btn-lg btn-secondary w-100 mt-1 text-start'>
        <BiHomeAlt />
        Choose Home Page
      </button>
      <br></br>
      <button className='btn btn-lg btn-secondary w-100 mt-1 text-start'>
        View course stream
      </button>
      {"\n"}
      <button className='btn btn-lg btn-secondary w-100 mt-1 text-start'>
        <MdAnnouncement />
        New Announcements
      </button>
      {"\n"}
      <button className='btn btn-lg btn-secondary w-100 mt-1 text-start'>
        <IoAnalytics />
        New Analytics
      </button>
      {"\n"}
      <button className='btn btn-lg btn-secondary w-100 mt-1 text-start'>
        <IoNotifications />
        View Course Notifications
      </button>
    </div>
  );
}
