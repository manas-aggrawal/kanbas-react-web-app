import { Link } from "react-router-dom";

export default function TOC() {
  return (
    <ul>
      <li>
        <Link to='/' id='wd-home-link'>
          Home
        </Link>
      </li>
      <li>
        <Link to='/Labs' id='wd-labs-link'>
          Labs
        </Link>
      </li>
      <li>
        <Link to='/Labs/Lab1' id='wd-lab1-link'>
          Lab 1
        </Link>
      </li>
      <li>
        <Link to='/Labs/Lab2' id='wd-lab2-link'>
          Lab 2
        </Link>
      </li>
      <li>
        <Link to='/Labs/Lab3' id='wd-lab3-link'>
          Lab 3
        </Link>
      </li>
      <li>
        <Link to='/Kanbas' id='wd-kanbas-link'>
          Kanbas
        </Link>
      </li>
      <li>
        <Link
          to='https://github.com/manas-aggrawal/kanbas-react-web-app'
          id='wd-github'
        >
          Manas Aggrawal Kanbas Github Repo
        </Link>
      </li>
    </ul>
  );
}
