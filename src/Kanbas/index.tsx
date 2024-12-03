import { Routes, Route, Navigate } from "react-router-dom";
import Accounts from "./Account";
import Dashboard from "./Dashboard/index";
import Courses from "./Courses/index";
import AccountNavigation from "./Navigation";
import "./styles.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProtectedRoute from "./Account/ProtectedRoute";
import Session from "./Account/Session";
import * as courseClient from "./Courses/client";
import * as userClient from "./Account/client";
import { setCourses, setEnrollments } from "./Dashboard/reducer";

const Kanbas = () => {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const [courses, setCurrCourses] = useState([] as any[]);
  const [enrollments, setCurrEnrollments] = useState([] as any[]);

  const dispatch = useDispatch();

  const fetchCourses = async () => {
    let courses = [];
    try {
      courses = await userClient.findMyCourses();
    } catch (error) {
      console.error(error);
    }
    dispatch(setCourses(courses));
    setCurrCourses(courses);
  };

  useEffect(() => {
    fetchCourses();
  }, [currentUser]);

  const addNewCourse = async (course: {
    name: string;
    description: string;
  }) => {
    const newCourse = await userClient.createCourse(course);

    const updatedCourses = [...courses, newCourse];
    dispatch(setCourses(updatedCourses));
    setCurrCourses(updatedCourses);
  };

  const deleteCourse = async (courseId: any) => {
    await courseClient.deleteCourse(courseId);
    const updatedCourses = courses.filter(
      (course: { _id: any }) => course._id !== courseId
    );
    dispatch(setCourses(updatedCourses));
    setCurrCourses(updatedCourses);

    const updatedEnrollments = enrollments.filter(
      (enrollment: { course: any }) => enrollment.course !== courseId
    );
    dispatch(setEnrollments(updatedEnrollments));
    setCurrEnrollments(updatedEnrollments);
  };

  const updateCourse = async (course: any) => {
    const updatedCourse = await courseClient.updateCourse(course);

    const updatedCourses = courses.map((c: { _id: any }) =>
      c._id === course._id ? updatedCourse : c
    );

    dispatch(setCourses(updatedCourses));

    setCurrCourses(updatedCourses);
  };

  return (
    // <Provider store={store}>
    <div id='wd-kanbas' className='kanbas'>
      <Session>
        <div>
          <table>
            <tbody>
              <AccountNavigation />
              <div className='wd-main-content-offset p-3'>
                <Routes>
                  <Route
                    path='/'
                    // element={<Navigate to="Accounts/SignIn" replace />}
                    element={<Navigate to='Dashboard' replace />}
                  />
                  <Route path='Account/*' element={<Accounts />} />
                  <Route
                    path='Dashboard/*'
                    element={
                      <ProtectedRoute>
                        <Dashboard
                          courses={courses}
                          setCurrCourses={setCurrCourses}
                          enrollments={enrollments}
                          setCurrEnrollments={setCurrEnrollments}
                          addNewCourse={addNewCourse}
                          deleteCourse={deleteCourse}
                          updateCourse={updateCourse}
                        />
                      </ProtectedRoute>
                    }
                  />
                  <Route
                    path='Courses/:cid/*'
                    element={
                      <ProtectedRoute>
                        <Courses courses={courses} />
                      </ProtectedRoute>
                    }
                  />
                  <Route path='Calendar' element={<h1>Calendar</h1>} />
                  <Route path='Inbox' element={<h1>Inbox</h1>} />
                </Routes>
              </div>
            </tbody>
          </table>
        </div>
      </Session>
    </div>
    // </Provider>
  );
};

export default Kanbas;
