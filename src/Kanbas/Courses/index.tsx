import { Routes, Route, Navigate, useParams, useLocation } from "react-router";
import CoursesNavigation from "./Navigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import { FaAlignJustify } from "react-icons/fa6";
import Users from "../Account/Users";
import Quizzes from "./Quizzes";
// import Attempt from "./Quizzes/Attempt";
import QuizDetails from "./Quizzes/QuizDetails";
import QuizEditor from "./Quizzes/QuizEditor";
import QuizPreview from "./Quizzes/QuizPreview";
import QuizReview from "./Quizzes/QuizReview";
// import TakeQuiz from "./Quizzes/TakeQuiz";

export default function Courses({ courses }: { courses: any[] }) {
  const { cid } = useParams();

  const { pathname } = useLocation();
  const course = courses.filter((course) => {
    return course._id === cid;
  })[0];

  return (
    <div id='wd-courses'>
      <h2 className='text-danger'>
        <FaAlignJustify className='me-4 fs-4 mb-1' />
        {course && course.name} &gt; {pathname.split("/")[4]}
      </h2>
      <hr />
      <div className='d-flex'>
        <div className='d-none d-md-block'>
          <CoursesNavigation />
        </div>
        <div className='flex-fill'>
          <Routes>
            <Route path='/' element={<Navigate to='Home' />} />
            <Route path='Home' element={<Home />} />
            <Route path='Modules' element={<Modules />} />
            <Route path='Assignments' element={<Assignments />} />
            <Route path='Assignments/:aid' element={<AssignmentEditor />} />
            <Route path='People' element={<Users />} />
            {/* <Route path='Quizzes' element={<Quizzes />} />
            <Route path='Quizzes/:qid' element={<QuizDetails />} />
            <Route path='Quizzes/:qid/editor' element={<QuizEditor />} />
            <Route path='Quizzes/:qid/start' element={<TakeQuiz />} />
            <Route
              path='Quizzes/:qid/attempt/:attemptNumber'
              element={<Attempt />} */}
            {/* /> */}

            <Route path='Quizzes' element={<Quizzes />} />
            <Route path='Quizzes/:qid' element={<QuizDetails />} />
            <Route
              path='Quizzes/:qid/Edit/*'
              element={
                // <ProtectedRouteQuizEditor>
                <QuizEditor />
                // </ProtectedRouteQuizEditor>
              }
            />
            <Route
              path='Quizzes/:qid/Preview'
              element={
                // <ProtectedRouteQuizEditor>
                <QuizPreview />
                // </ProtectedRouteQuizEditor>
              }
            />
            <Route path='Quizzes/:qid/Review' element={<QuizReview />} />
            <Route path='Quizzes/:qid/Attempt' element={<QuizPreview />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
