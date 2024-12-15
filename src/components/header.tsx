import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <menu className="header__menu">
        <Link to="/" className="header__menu-item">
          Home
        </Link>
        <Link to="task-manager/" className="header__menu-item">
          Task manager
        </Link>
        <Link to="categories-management/" className="header__menu-item">
          Categories management
        </Link>
        <Link to="settings/" className="header__menu-item">
          Settings
        </Link>
      </menu>
    </header>
  );
}
