import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInbox,
  faCalendar,
  faClock,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
export default function Header() {
  return (
    <header className="header">
      <menu className="header__menu">
        <li className="header__menu-item">
          <Link to="/">
            <FontAwesomeIcon icon={faInbox} />
            Inbox
          </Link>
        </li>
        <li className="header__menu-item">
          <Link to="task-manager/">
            <FontAwesomeIcon icon={faCalendar} />
            <p> Today</p>
          </Link>
        </li>
        <li className="header__menu-item">
          <Link to="categories-management/">
            <FontAwesomeIcon icon={faClock} />
            <p> Upcoming</p>
          </Link>
        </li>
        <li className="header__menu-item">
          <Link to="settings/">
            <FontAwesomeIcon icon={faCheck} />
            <p> Completed</p>
          </Link>
        </li>
      </menu>
    </header>
  );
}
