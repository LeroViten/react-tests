import { NavLink } from 'react-router-dom';
import './Navigation.scss';

export default function Navigation() {
  return (
    <nav>
      <NavLink exact to="/" className="link" activeClassName="activeLink">
        Main
      </NavLink>
      <NavLink to="/authors" className="link" activeClassName="activeLink">
        Authors
      </NavLink>
      <NavLink to="/books" className="link" activeClassName="activeLink">
        Books
      </NavLink>
    </nav>
  );
}
