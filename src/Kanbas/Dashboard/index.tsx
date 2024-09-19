import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div id='wd-dashboard'>
      <h1 id='wd-dashboard-title'>Dashboard</h1> <hr />
      <h2 id='wd-dashboard-published'>Published Courses (12)</h2> <hr />
      <div id='wd-dashboard-courses'>
        {/* course 1 */}
        <div className='wd-dashboard-course'>
          <Link
            className='wd-dashboard-course-link'
            to='/Kanbas/Courses/5610/Home'
          >
            <img
              src='src/assets/images/Northeastern_Wordmark.webp'
              width={200}
              alt=''
            />
            <div>
              <h5>CS5610</h5>
              <p className='wd-dashboard-course-title'>
                Full Stack software developer
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        {/* course 2 */}
        <div className='wd-dashboard-course'>
          <Link
            className='wd-dashboard-course-link'
            to='/Kanbas/Courses/5600/Home'
          >
            <img
              src='src/assets/images/Northeastern_Wordmark.webp'
              width={200}
              alt=''
            />
            <div>
              <h5>CS 5600</h5>
              <p className='wd-dashboard-course-title'>Operating Systems</p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        {/* course 3 */}
        <div className='wd-dashboard-course'>
          {" "}
          <Link
            className='wd-dashboard-course-link'
            to='/Kanbas/Courses/5010/Home'
          >
            <img
              src='src/assets/images/Northeastern_Wordmark.webp'
              width={200}
              alt=''
            />
            <div>
              <h5>CS5010</h5>
              <p className='wd-dashboard-course-title'>
                Programming Design Paradigm
              </p>
              <button> Go </button>
            </div>
          </Link>{" "}
        </div>
        {/* course 4 */}
        <div className='wd-dashboard-course'>
          {" "}
          <Link
            className='wd-dashboard-course-link'
            to='/Kanbas/Courses/5800/Home'
          >
            <img
              src='src/assets/images/Northeastern_Wordmark.webp'
              width={200}
              alt=''
            />
            <div>
              <h5>CS5800</h5>
              <p className='wd-dashboard-course-title'>Algorithms</p>
              <button> Go </button>
            </div>
          </Link>{" "}
        </div>
        {/* course 5 */}
        <div className='wd-dashboard-course'>
          {" "}
          <Link
            className='wd-dashboard-course-link'
            to='/Kanbas/Courses/6410/Home'
          >
            <img
              src='src/assets/images/Northeastern_Wordmark.webp'
              width={200}
              alt=''
            />
            <div>
              <h5>CS6410</h5>
              <p className='wd-dashboard-course-title'>Compilers</p>
              <button> Go </button>
            </div>
          </Link>{" "}
        </div>
        {/* course 6 */}
        <div className='wd-dashboard-course'>
          {" "}
          <Link
            className='wd-dashboard-course-link'
            to='/Kanbas/Courses/6640/Home'
          >
            <img
              src='src/assets/images/Northeastern_Wordmark.webp'
              width={200}
              alt=''
            />
            <div>
              <h5>CS6640</h5>
              <p className='wd-dashboard-course-title'>
                Operating System Implementation
              </p>
              <button> Go </button>
            </div>
          </Link>{" "}
        </div>
        {/* course 7 */}
        <div className='wd-dashboard-course'>
          {" "}
          <Link
            className='wd-dashboard-course-link'
            to='/Kanbas/Courses/6650/Home'
          >
            <img
              src='src/assets/images/Northeastern_Wordmark.webp'
              width={200}
              alt=''
            />
            <div>
              <h5>CS6650</h5>
              <p className='wd-dashboard-course-title'>
                Building Scalable Distributed Systems
              </p>
              <button> Go </button>
            </div>
          </Link>{" "}
        </div>
      </div>
    </div>
  );
}
