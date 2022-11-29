import { Link } from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
function Nav({ mobileBasket }) {
  //mobile nav drop down menu
  const [dropdown, setDropdown] = useState(false);

  const showMobileLinks = () => {
    setDropdown(!dropdown);
  };
  return (
    <nav className="bg-success d-flex justify-content-between border-0">
      <Link to="/">
        <h2 className=" display-6 p-2 p-sm-1 font-italic text-white">
          Sabatino's
        </h2>
      </Link>
      <div className="col-sm-6 d-none d-sm-flex ">
        <ul className="d-sm-flex d-none col-12  flex-sm-row justify-content-around p-sm-1">
          <li className="nav-item col-3 p-1">
            <Link to="/menu">
              <p>Menu</p>
            </Link>
          </li>
          <li className="nav-item col-3 p-1">
            <Link to="/about_us">
              <p>About</p>
            </Link>
          </li>
          <li className="nav-item col-3 p-1">
            <Link to="/basket">
              <p
                className={
                  mobileBasket === false ? "null" : "change-link-color"
                }
              >
                Basket
              </p>
            </Link>
          </li>
          <li className="nav-item col-3 p-1">
            <Link to="/contact_us">
              <p>Contact</p>
            </Link>
          </li>
        </ul>
      </div>
      <div className="col-4 d-sm-none ">
        <FontAwesomeIcon
          icon={faBars}
          size="2x"
          className="icon"
          onClick={showMobileLinks}
        />
        {dropdown === true ? (
          <ul className="d-flex d-sm-none  flex-column">
            <li className="nav-item col-3 mt-4" onClick={showMobileLinks}>
              <Link to="/menu" className="text-white p-4">
                Menu
              </Link>
            </li>
            <li className="nav-item col-3 mt-4" onClick={showMobileLinks}>
              <Link to="/about_us" className="text-white p-4">
                About
              </Link>
            </li>
            <li className="nav-item col-3 mt-4" onClick={showMobileLinks}>
              <Link to="/basket" className="text-white p-4">
                Basket
              </Link>
            </li>
            <li className="nav-item col-3 mt-4" onClick={showMobileLinks}>
              <Link to="/contact_us" className="text-white p-4">
                Contact
              </Link>
            </li>
          </ul>
        ) : (
          false
        )}
      </div>
    </nav>
  );
}

export default Nav;
