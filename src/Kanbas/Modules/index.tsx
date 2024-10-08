export default function Modules() {
  return (
    <div>
      {/* Implement Collapse All button, View Progress button, etc. */}
      <button>Collapse All</button>
      <button>View Progress</button>
      <select name='module-action' id=''>
        <option value='publish-all'>Publish All</option>
      </select>
      <button>Module</button>
      <ul id='wd-modules'>
        <li className='wd-module'>
          <div className='wd-title'>Week 1</div>
          <ul className='wd-lessons'>
            <li className='wd-lesson'>
              <span className='wd-title'>LEARNING OBJECTIVES</span>
              <ul className='wd-content'>
                <li className='wd-content-item'>Introduction to the course</li>
                <li className='wd-content-item'>
                  Learn what is Web Development
                </li>
                <li className='wd-content-item'>
                  Different Web Development Technologies
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li className='wd-module'>
          <div className='wd-title'>Week 2</div>
          <ul className='wd-lessons'>
            <li className='wd-lesson'>
              <span className='wd-title'>LEARNING OBJECTIVES</span>
              <ul className='wd-content'>
                <li className='wd-content-item'>Introduction to the HTML</li>
                <li className='wd-content-item'>HTML syntax</li>
                <li className='wd-content-item'>HTML Tags</li>
              </ul>
            </li>
          </ul>
        </li>
        <li className='wd-module'>
          <div className='wd-title'>Week 3</div>
          <ul className='wd-lessons'>
            <li className='wd-lesson'>
              <span className='wd-title'>LEARNING OBJECTIVES</span>
              <ul className='wd-content'>
                <li className='wd-content-item'>Introduction to the CSS</li>
                <li className='wd-content-item'>CSS syntax</li>
                <li className='wd-content-item'>CSS styling</li>
                <li className='wd-content-item'>CSS class and id</li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}
