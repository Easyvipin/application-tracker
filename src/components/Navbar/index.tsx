import { FiHome, FiSettings } from "react-icons/fi";
import { NavLink } from "react-router";

interface INavbarProps {}

const Navbar: React.FunctionComponent<INavbarProps> = () => {
  return (
    <nav className="flex justify-between items-center py-4">
      <h3 className="text-md font-extralight">Application Tracker</h3>
      <ul className="flex justify-end gap-4">
        <li className="">
          <NavLink
            to="/applications"
            className={({ isActive }) =>
              isActive ? "text-blue-500" : "text-gray-600"
            }
          >
            <FiHome />
          </NavLink>
        </li>
        <li className="">
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "text-blue-500" : "text-gray-600"
            }
          >
            <FiSettings />
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
