import { Outlet, NavLink } from 'react-router-dom';

function Services() {
  return (
    <div>
      <h1>Our Services</h1>
      <nav>
        <NavLink to="design">Design</NavLink>
        <NavLink to="development">Development</NavLink>
      </nav>
      <Outlet />
    </div>
  );
}

export default Services;
