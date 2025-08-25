import { NavLink } from "react-router";

interface IMenuLinks {
  authorized: boolean;
}

export const MenuLinks = ({ authorized }: IMenuLinks) => {
  return (
    <nav className="hidden md:flex space-x-6">
      <NavLink
        className="text-white hover:text-gray-300 transition-colors duration-300"
        key="/"
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className="text-white hover:text-gray-300 transition-colors duration-300"
        key="/why"
        to="/why"
      >
        Why
      </NavLink>
      <NavLink
        className="text-white hover:text-gray-300 transition-colors duration-300"
        key="/tools"
        to="/tools"
      >
        Tools
      </NavLink>
      <NavLink
        className="text-white hover:text-gray-300 transition-colors duration-300"
        key="/help"
        to="/help"
      >
        Contact
      </NavLink>
      <NavLink
        className="text-white hover:text-gray-300 transition-colors duration-300"
        key="/blog"
        to="/blog"
      >
        Blog
      </NavLink>
      {!authorized && (
        <NavLink
          className="text-white hover:text-gray-300 transition-colors duration-300"
          key="/signup"
          to="/signup"
        >
          Sign Up
        </NavLink>
      )}
      {authorized ? (
        <NavLink
          className="text-white hover:text-gray-300 transition-colors duration-300"
          key="/gigs-tours"
          to="/gigs-tours"
        >
          Dashboard
        </NavLink>
      ) : (
        <NavLink
          className="text-white hover:text-gray-300 transition-colors duration-300"
          key="/login"
          to="/login"
        >
          Login
        </NavLink>
      )}
    </nav>
  );
};
