import ModulesControls from "./ModulesControls";
import { BsGripVertical } from "react-icons/bs";
import "./../../styles.css";
import LessonControlButtons from "./LessonControlButtons";
import ModuleControlButtons from "./ModuleControlButtons";
import { useParams } from "react-router";
import * as db from "../../Database";

export default function Modules() {
  const { cid } = useParams();
  const modules = db.modules;
  return (
    <div>
      <ModulesControls />
      <br />
      <br />
      <br />
      <br />
      <ul id='wd-modules' className='list-group rounded-0'>
        {/* <li className='wd-module list-group-item p-0 mb-5 fs-5 border-gray'>
          <div className='wd-title p-3 ps-2 bg-secondary'>
            {" "}
            <BsGripVertical className='me-2 fs-3' />
            Week 1<ModuleControlButtons />
          </div>
          <ul className='wd-lessons list-group rounded-0'>
            <li className='wd-lesson list-group-item p-3 ps-1'>
              LEARNING OBJECTIVES <LessonControlButtons />
            </li>
            <li className='wd-lesson list-group-item p-3 ps-1'>
              Introduction to the course <LessonControlButtons />
            </li>
            <li className='wd-lesson list-group-item p-3 ps-1'>
              Learn what is Web Development <LessonControlButtons />
            </li>
            <li className='wd-lesson list-group-item p-3 ps-1'>
              {" "}
              Technologies in Web Development
              <LessonControlButtons />{" "}
            </li>
            <li className='wd-lesson list-group-item p-3 ps-1'>
              {" "}
              Technologies which we are going to cover in this course
              <LessonControlButtons />{" "}
            </li>
          </ul>
        </li>
        <li className='wd-module list-group-item p-0 mb-5 fs-5 border-gray'>
          <div className='wd-title p-3 ps-2 bg-secondary'>
            {" "}
            <BsGripVertical className='me-2 fs-3' />
            Week 2<ModuleControlButtons />
          </div>
          <ul className='wd-lessons list-group rounded-0'>
            <li className='wd-lesson list-group-item p-3 ps-1'>
              LEARNING OBJECTIVES <LessonControlButtons />
            </li>
            <li className='wd-lesson list-group-item p-3 ps-1'>
              {" "}
              HTML
              <LessonControlButtons />{" "}
            </li>
            <li className='wd-lesson list-group-item p-3 ps-1'>
              {" "}
              HTML Syntax
              <LessonControlButtons />{" "}
            </li>
            <li className='wd-lesson list-group-item p-3 ps-1'>
              {" "}
              HTML Tags and Elements
              <LessonControlButtons />{" "}
            </li>
            <li className='wd-lesson list-group-item p-3 ps-1'>
              {" "}
              HTML class and id
              <LessonControlButtons />{" "}
            </li>
          </ul>
        </li>
        <li className='wd-module list-group-item p-0 mb-5 fs-5 border-gray'>
          <div className='wd-title p-3 ps-2 bg-secondary'>
            {" "}
            <BsGripVertical className='me-2 fs-3' />
            Week 3<ModuleControlButtons />
          </div>
          <ul className='wd-lessons list-group rounded-0'>
            <li className='wd-lesson list-group-item p-3 ps-1'>
              LEARNING OBJECTIVES <LessonControlButtons />
            </li>
            <li className='wd-lesson list-group-item p-3 ps-1'>
              {" "}
              CSS
              <LessonControlButtons />{" "}
            </li>
            <li className='wd-lesson list-group-item p-3 ps-1'>
              {" "}
              CSS Syntax
              <LessonControlButtons />{" "}
            </li>
            <li className='wd-lesson list-group-item p-3 ps-1'>
              {" "}
              Basic CSS styling
              <LessonControlButtons />{" "}
            </li>
          </ul>
        </li> */}

        {modules
          .filter((module: any) => module.course === cid)
          .map((module: any) => (
            <li className='wd-module list-group-item p-0 mb-5 fs-5 border-gray'>
              <div className='wd-title p-3 ps-2 bg-secondary'>
                <BsGripVertical className='me-2 fs-3' /> {module.name}{" "}
                <ModuleControlButtons />
              </div>
              {module.lessons && (
                <ul className='wd-lessons list-group rounded-0'>
                  {module.lessons.map((lesson: any) => (
                    <li className='wd-lesson list-group-item p-3 ps-1'>
                      <BsGripVertical className='me-2 fs-3' /> {lesson.name}{" "}
                      <LessonControlButtons />
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
      </ul>{" "}
    </div>
  );
}
