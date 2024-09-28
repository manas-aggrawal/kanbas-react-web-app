export default function Assignments() {
  return (
    <div id='wd-assignments'>
      <input id='wd-search-assignment' placeholder='Search for Assignments' />
      <button id='wd-add-assignment-group'>+ Group</button>
      <button id='wd-add-assignment'>+ Assignment</button>
      <h3 id='wd-assignments-title'>
        ASSIGNMENTS 40% of Total <button>+</button>
      </h3>
      <ul id='wd-assignment-list'>
        <li className='wd-assignment-list-item'>
          <a
            className='wd-assignment-link'
            href='#/Kanbas/Courses/5610/Assignments/5610'
          >
            A1 - ENV + HTML
          </a>
          <p className='wd-assignment-link'>
            Multiple Modules | <b>Not Available until</b> October 1, 2024 <br />
            <b>Due </b> October 20, 2024
          </p>
        </li>

        <li className='wd-assignment-list-item'>
          <a
            className='wd-assignment-link'
            href='#/Kanbas/Courses/5610/Assignments/5610'
          >
            A2 - CSS + Bootstrap
          </a>
          <p className='wd-assignment-link'>
            Multiple Modules | <b>Not Available until</b> October 2, 2024 <br />
            <b>Due </b> October 21, 2024
          </p>
        </li>

        <li className='wd-assignment-list-item'>
          <li className='wd-assignment-list-item'>
            <a
              className='wd-assignment-link'
              href='#/Kanbas/Courses/5610/Assignments/5610'
            >
              A3 - JavaScript + React
            </a>
            <p className='wd-assignment-link'>
              Multiple Modules | <b>Not Available until</b> October 3, 2024{" "}
              <br />
              <b>Due </b> October 22, 2024
            </p>
          </li>
        </li>
      </ul>
    </div>
  );
}
