import { Routes, Route, Navigate } from "react-router";
import CoursesNavigation from "./Navigation";
import Modules from "../Modules";
import Status from "./Status";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";

export default function Courses() {
  return (
    <div id='wd-courses'>
      <h2>Course 5610</h2>
      <hr />
      <table>
        <tr>
          <td valign='top'>
            <CoursesNavigation />
          </td>
          <td valign='top'>
            <Routes>
              <Route path='/' element={<Navigate to='Home' />} />
              <Route path='Home' element={<Home />} />
              <Route path='Modules' element={<Modules />} />
              <Route path='Assignments' element={<Assignments />} />
              <Route path='Assignments/:aid' element={<AssignmentEditor />} />
              <Route path='People' element={<h2>People</h2>} />
            </Routes>
          </td>
          <td valign='top'>
            <Status />
          </td>
        </tr>
      </table>
    </div>
  );
}
