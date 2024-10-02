import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    // <div id='wd-dashboard'>
    //   <h1 id='wd-dashboard-title'>Dashboard</h1> <hr />
    //   <h2 id='wd-dashboard-published'>Published Courses (12)</h2> <hr />
    //   <div id='wd-dashboard-courses' className='row'>
    //     {/* course 1 */}
    //     <div className='row row-cols-1 row-cols-md-5 g-4'>
    //       <div className='wd-dashboard-course col' style={{ width: "300px" }}>
    //         <div className='card rounded-3 overflow-hidden'>
    //           <Link
    //             to='/Kanbas/Courses/5610/Home'
    //             className='wd-dashboard-course-link text-decoration-none text-dark'
    //           >
    //             <img
    //               src='/images/Northeastern_Wordmark.webp'
    //               width={200}
    //               height={160}
    //               alt=''
    //             />
    //             <div className='card-body'>
    //               <h5 className='wd-dashboard-course-title card-title'>
    //                 CS5610
    //               </h5>
    //               <p className='wd-dashboard-course-title card-text'>
    //                 Full Stack software developer
    //               </p>
    //               <button className='btn btn-primary'> Go </button>
    //             </div>
    //           </Link>
    //         </div>
    //       </div>
    //       <br />
    //       <br />
    //       {/* course 2 */}
    //       <div className='wd-dashboard-course col' style={{ width: "300px" }}>
    //         <div className='card rounded-3 overflow-hidden'>
    //           <Link
    //             className='wd-dashboard-course-link text-decoration-none text-dark'
    //             to='/Kanbas/Courses/5600/Home'
    //           >
    //             <img
    //               src='/images/Northeastern_Wordmark.webp'
    //               width={200}
    //               alt=''
    //             />
    //             <div className='card-body'>
    //               <h5 className='wd-dashboard-course-title card-title'>
    //                 CS 5600
    //               </h5>
    //               <p className='wd-dashboard-course-title card-text'>
    //                 Operating Systems
    //               </p>
    //               <button className='btn btn-primary'> Go </button>
    //             </div>
    //           </Link>
    //         </div>
    //       </div>
    //       <br />
    //       <br />
    //       {/* course 3 */}
    //       <div className='wd-dashboard-course col' style={{ width: "300px" }}>
    //         {" "}
    //         <div className='card rounded-3 overflow-hidden'>
    //           <Link
    //             className='wd-dashboard-course-link text-decoration-none text-dark'
    //             to='/Kanbas/Courses/5010/Home'
    //           >
    //             <img
    //               src='/images/Northeastern_Wordmark.webp'
    //               width={200}
    //               alt=''
    //             />
    //             <div className='card-body'>
    //               <h5 className='wd-dashboard-course-title card-title'>
    //                 CS5010
    //               </h5>
    //               <p className='wd-dashboard-course-title card-text'>
    //                 Programming Design Paradigm
    //               </p>
    //               <button className='btn btn-primary'> Go </button>
    //             </div>
    //           </Link>{" "}
    //         </div>
    //       </div>
    //       <br />
    //       <br />
    //       {/* course 4 */}
    //       <div className='wd-dashboard-course col' style={{ width: "300px" }}>
    //         {" "}
    //         <div className='card rounded-3 overflow-hidden'>
    //           <Link
    //             className='wd-dashboard-course-link text-decoration-none text-dark'
    //             to='/Kanbas/Courses/5800/Home'
    //           >
    //             <img
    //               src='/images/Northeastern_Wordmark.webp'
    //               width={200}
    //               alt=''
    //             />
    //             <div className='card-body'>
    //               <h5 className='wd-dashboard-course-title card-title'>
    //                 CS5800
    //               </h5>
    //               <p className='wd-dashboard-course-title card-text'>
    //                 Algorithms
    //               </p>
    //               <button className='btn btn-primary'> Go </button>
    //             </div>
    //           </Link>{" "}
    //         </div>
    //       </div>
    //       <br />
    //       <br />
    //       {/* course 5 */}
    //       <div className='wd-dashboard-course col' style={{ width: "300px" }}>
    //         {" "}
    //         <div className='card rounded-3 overflow-hidden'>
    //           <Link
    //             className='wd-dashboard-course-link text-decoration-none text-dark'
    //             to='/Kanbas/Courses/6410/Home'
    //           >
    //             <img
    //               src='/images/Northeastern_Wordmark.webp'
    //               width={200}
    //               alt=''
    //             />
    //             <div className='card-body'>
    //               <h5 className='wd-dashboard-course-title card-title'>
    //                 CS6410
    //               </h5>
    //               <p className='wd-dashboard-course-title card-text'>
    //                 Compilers
    //               </p>
    //               <button className='btn btn-primary'> Go </button>
    //             </div>
    //           </Link>{" "}
    //         </div>
    //       </div>
    //       <br />
    //       <br />
    //       {/* course 6 */}
    //       <div className='wd-dashboard-course col' style={{ width: "300px" }}>
    //         {" "}
    //         <div className='card rounded-3 overflow-hidden'>
    //           <Link
    //             className='wd-dashboard-course-link text-decoration-none text-dark'
    //             to='/Kanbas/Courses/6640/Home'
    //           >
    //             <img
    //               src='/images/Northeastern_Wordmark.webp'
    //               width={200}
    //               alt=''
    //             />
    //             <div className='card-body'>
    //               <h5 className='wd-dashboard-course-title card-title'>
    //                 CS6640
    //               </h5>
    //               <p className='wd-dashboard-course-title card-text'>
    //                 Operating System Implementation
    //               </p>
    //               <button className='btn btn-primary'> Go </button>
    //             </div>
    //           </Link>{" "}
    //         </div>
    //       </div>
    //       <br />
    //       <br />
    //       {/* course 7 */}
    //       <div className='wd-dashboard-course col' style={{ width: "300px" }}>
    //         {" "}
    //         <div className='card rounded-3 overflow-hidden'>
    //           <Link
    //             className='wd-dashboard-course-link text-decoration-none text-dark'
    //             to='/Kanbas/Courses/6650/Home'
    //           >
    //             <img
    //               src='/images/Northeastern_Wordmark.webp'
    //               width={200}
    //               alt=''
    //             />
    //             <div className='card-body'>
    //               <h5 className='wd-dashboard-course-title card-title'>
    //                 CS6650
    //               </h5>
    //               <p className='wd-dashboard-course-title card-text'>
    //                 Building Scalable Distributed Systems
    //               </p>
    //               <button className='btn btn-primary'> Go </button>
    //             </div>
    //           </Link>{" "}
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <div id='wd-dashboard' className='container-fluid'>
      <h1 id='wd-dashboard-title'>Dashboard</h1>
      <hr />
      <h2 id='wd-dashboard-published'>Published Courses (7)</h2>
      <hr />
      <div
        id='wd-dashboard-courses'
        className='row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4'
      >
        {/* course 1 */}
        <div className='col'>
          <div className='card h-100 rounded-3 overflow-hidden'>
            <Link
              to='/Kanbas/Courses/5610/Home'
              className='wd-dashboard-course-link text-decoration-none text-dark'
            >
              <img
                src='/images/Northeastern_Wordmark.webp'
                className='card-img-top'
                alt=''
              />
              <div className='card-body d-flex flex-column'>
                <h5 className='wd-dashboard-course-title card-title'>CS5610</h5>
                <p className='wd-dashboard-course-title card-text flex-grow-1'>
                  Full Stack software developer
                </p>
                <button className='btn btn-primary mt-auto'>Go</button>
              </div>
            </Link>
          </div>
        </div>

        {/* course 2 */}
        <div className='col'>
          <div className='card h-100 rounded-3 overflow-hidden'>
            <Link
              to='/Kanbas/Courses/5610/Home'
              className='wd-dashboard-course-link text-decoration-none text-dark'
            >
              <img
                src='/images/Northeastern_Wordmark.webp'
                className='card-img-top'
                alt=''
              />
              <div className='card-body d-flex flex-column'>
                <h5 className='wd-dashboard-course-title card-title'>CS5600</h5>
                <p className='wd-dashboard-course-title card-text flex-grow-1'>
                  Computer Systems
                </p>
                <button className='btn btn-primary mt-auto'>Go</button>
              </div>
            </Link>
          </div>
        </div>
        {/* course 3 */}
        <div className='col'>
          <div className='card h-100 rounded-3 overflow-hidden'>
            <Link
              to='/Kanbas/Courses/5610/Home'
              className='wd-dashboard-course-link text-decoration-none text-dark'
            >
              <img
                src='/images/Northeastern_Wordmark.webp'
                className='card-img-top'
                alt=''
              />
              <div className='card-body d-flex flex-column'>
                <h5 className='wd-dashboard-course-title card-title'>CS6640</h5>
                <p className='wd-dashboard-course-title card-text flex-grow-1'>
                  Operating System Implementation
                </p>
                <button className='btn btn-primary mt-auto'>Go</button>
              </div>
            </Link>
          </div>
        </div>
        {/* course 4 */}
        <div className='col'>
          <div className='card h-100 rounded-3 overflow-hidden'>
            <Link
              to='/Kanbas/Courses/5610/Home'
              className='wd-dashboard-course-link text-decoration-none text-dark'
            >
              <img
                src='/images/Northeastern_Wordmark.webp'
                className='card-img-top'
                alt=''
              />
              <div className='card-body d-flex flex-column'>
                <h5 className='wd-dashboard-course-title card-title'>CS6410</h5>
                <p className='wd-dashboard-course-title card-text flex-grow-1'>
                  Compiler Design
                </p>
                <button className='btn btn-primary mt-auto'>Go</button>
              </div>
            </Link>
          </div>
        </div>
        {/* course 5 */}
        <div className='col'>
          <div className='card h-100 rounded-3 overflow-hidden'>
            <Link
              to='/Kanbas/Courses/5610/Home'
              className='wd-dashboard-course-link text-decoration-none text-dark'
            >
              <img
                src='/images/Northeastern_Wordmark.webp'
                className='card-img-top'
                alt=''
              />
              <div className='card-body d-flex flex-column'>
                <h5 className='wd-dashboard-course-title card-title'>CS5010</h5>
                <p className='wd-dashboard-course-title card-text flex-grow-1'>
                  Programming Design Paradigm
                </p>
                <button className='btn btn-primary mt-auto'>Go</button>
              </div>
            </Link>
          </div>
        </div>
        {/* course 6 */}
        <div className='col'>
          <div className='card h-100 rounded-3 overflow-hidden'>
            <Link
              to='/Kanbas/Courses/5610/Home'
              className='wd-dashboard-course-link text-decoration-none text-dark'
            >
              <img
                src='/images/Northeastern_Wordmark.webp'
                className='card-img-top'
                alt=''
              />
              <div className='card-body d-flex flex-column'>
                <h5 className='wd-dashboard-course-title card-title'>CS5011</h5>
                <p className='wd-dashboard-course-title card-text flex-grow-1'>
                  PDP Recitation
                </p>
                <button className='btn btn-primary mt-auto'>Go</button>
              </div>
            </Link>
          </div>
        </div>
        {/* course 7 */}
        <div className='col'>
          <div className='card h-100 rounded-3 overflow-hidden'>
            <Link
              to='/Kanbas/Courses/5610/Home'
              className='wd-dashboard-course-link text-decoration-none text-dark'
            >
              <img
                src='/images/Northeastern_Wordmark.webp'
                className='card-img-top'
                alt=''
              />
              <div className='card-body d-flex flex-column'>
                <h5 className='wd-dashboard-course-title card-title'>CS5800</h5>
                <p className='wd-dashboard-course-title card-text flex-grow-1'>
                  Algorithms
                </p>
                <button className='btn btn-primary mt-auto'>Go</button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
