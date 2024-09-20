import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div>
      <h1 id='wd-name'>Manas Aggrawal Section 3</h1>
      <nav>
        <ul>
          <li id='wd-kanbas'>
            <a href='#/kanbas'>Kanbas</a>
          </li>
          <li id='wd-labs'>
            <a href='#/labs'>Labs</a>
          </li>
          <li id='wd-github'>
            <Link
              to='https://github.com/manas-aggrawal/kanbas-react-web-app'
              id='wd-github'
            >
              Manas Aggrawal Kanbas Github Repo
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
