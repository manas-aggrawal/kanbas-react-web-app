import { Link } from "react-router-dom";
import * as db from "./Database";

export default function Dashboard() {
  const courses = db.courses;
  return (
    <div id='wd-dashboard' className='container-fluid'>
      <h1 id='wd-dashboard-title'>Dashboard</h1>
      <hr />
      <h2 id='wd-dashboard-published'>Published Courses ({courses.length})</h2>
      <hr />
      <div
        id='wd-dashboard-courses'
        className='row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4'
      >
        {courses.map((course) => (
          <div className='col'>
            <div className='card h-100 rounded-3 overflow-hidden'>
              <Link
                to={`/Kanbas/Courses/${course._id}/Home`}
                className='wd-dashboard-course-link text-decoration-none text-dark'
              >
                <img
                  src={`/images/${course.image}`}
                  className='card-img-top'
                  alt=''
                />
                <div className='card-body d-flex flex-column'>
                  <h5 className='wd-dashboard-course-title card-title'>
                    {course.number}
                  </h5>
                  <p className='wd-dashboard-course-title card-text flex-grow-1'>
                    {course.name}
                  </p>
                  <p
                    className='wd-dashboard-course-title card-text overflow-y-hidden'
                    style={{ maxHeight: 100 }}
                  >
                    {course.description}{" "}
                  </p>
                  <button className='btn btn-primary mt-auto'>Go</button>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
