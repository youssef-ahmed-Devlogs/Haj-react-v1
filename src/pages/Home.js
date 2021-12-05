import React, { useContext, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "../assets/style/pages/home.scss";
import HajjUmrahImg from "../assets/images/Ministry-of-Hajj-and-Umrah.png";
import { AppContext } from "../context/AppContext";

const Home = () => {
  const homeRef = useRef();
  const { headerHeight, footerHeight } = useContext(AppContext);

  useEffect(() => {
    homeRef.current.style.height = `calc(100vh - ${
      headerHeight + footerHeight
    }px)`;
  }, [headerHeight, footerHeight]);

  return (
    <main className="home-page" ref={homeRef}>
      <div className="container">
        <div className="hero-section">
          <div>
            <div className="hero-img">
              <img src={HajjUmrahImg} alt="Ministry of Hajj and Umrah" />
            </div>

            <div className="hero-links d-flex align-items-center">
              <ul>
                <li>
                  <Link className="button button-dark" to="/haj">
                    الحج
                  </Link>
                </li>
                <li>
                  <Link className="button button-dark" to="/">
                    العمرة
                  </Link>
                </li>
              </ul>

              <ul>
                <li>
                  <Link className="button button-secondary" to="/">
                    الحج
                  </Link>
                </li>
                <li>
                  <Link className="button button-secondary" to="/">
                    العمرة
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
