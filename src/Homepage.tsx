import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className='container mt-4'>
      <h1 id='wd-name' className='mb-4 fw-bold'>
        Manas Aggrawal Section 3
      </h1>
      <h1 id='wd-name' className='mb-4 fw-bold'>
        Rachana Sudhakar Section 2
      </h1>
      <nav className='navbar navbar-expand-lg navbar-light bg-dark rounded-1'>
        <div className='container-fluid'>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarNav'
            aria-controls='navbarNav'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarNav'>
            <ul className='navbar-nav'>
              <li id='wd-kanbas' className='nav-item'>
                <a
                  className='nav-link bg-danger text-white align-items-center me-2 rounded-1'
                  href='#/kanbas'
                >
                  Kanbas
                </a>
              </li>
              <li id='wd-labs' className='nav-item'>
                <a
                  className='nav-link bg-danger text-white align-items-center me-2 rounded-1'
                  href='#/labs'
                >
                  Labs
                </a>
              </li>
              <li id='wd-github' className='nav-item'>
                <Link
                  to='https://github.com/manas-aggrawal/kanbas-react-web-app'
                  className='nav-link bg-danger text-white align-items-center me-2 rounded-1'
                >
                  Team PowerRangers Kanbas-quiz project Github Repo
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
