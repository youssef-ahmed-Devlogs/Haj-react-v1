import React, { useEffect, useRef, useContext } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTh,
  faGlobe,
  faCog,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { AppContext } from "../context/AppContext";

const Header = () => {
  const headerRef = useRef();
  const { setHeaderHeight } = useContext(AppContext);

  useEffect(() => {
    setHeaderHeight(headerRef.current.clientHeight);
  }, []);

  return (
    <header ref={headerRef}>
      <div className="container">
        <div className="header-content">
          <nav className="nav-links">
            <ul className="list-unstyled">
              <li>
                <NavLink to="/" exact>
                  الرئيسية
                </NavLink>
              </li>
              <li>
                <NavLink to="/about">عن الوزارة</NavLink>
              </li>
            </ul>
            <div className="apps-icon">
              <FontAwesomeIcon icon={faTh} />
            </div>
          </nav>

          <div className="nav-actions">
            <div className="nav-langs">
              <FontAwesomeIcon icon={faGlobe} />
              <span className="lang-code">En</span>
            </div>

            <div className="nav-settings">
              <FontAwesomeIcon icon={faCog} />
            </div>

            <div className="nav-search">
              <FontAwesomeIcon icon={faSearch} />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
