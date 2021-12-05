import React, { useRef, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import vision2030 from "../assets/images/vision-2030.png";
import { AppContext } from "../context/AppContext";

const Footer = () => {
  const footerRef = useRef();
  const { footerHeight, setFooterHeight } = useContext(AppContext);

  useEffect(() => {
    setTimeout(() => {
      setFooterHeight(footerRef.current.clientHeight);
    }, 100);

    window.addEventListener("resize", () => {
      setFooterHeight(footerRef.current.clientHeight);
    });
  }, [footerHeight]);

  return (
    <footer ref={footerRef}>
      <div className="container">
        <div className="footer-top">
          <div className="your-country">
            <span>الدولة</span>
            <select>
              <option value="SA">المملكة العربية السعودية</option>
              <option value="EG">جمهورية مصر العربية</option>
            </select>
          </div>

          <ul className="footer-links">
            <li>
              <Link to="/">سياسة الخصوصية</Link>
            </li>
            <li>
              <Link to="/">ميثاق العملاء</Link>
            </li>
            <li>
              <Link to="/">خريطة الموقع</Link>
            </li>
          </ul>
        </div>
      </div>

      <hr />

      <div className="container">
        <div className="footer-bottom">
          <ul className="footer-links">
            <li>
              <Link to="/">الخدمات الإلكترونية</Link>
            </li>
            <li>
              <Link to="/">البيانات المفتوحة</Link>
            </li>
            <li>
              <Link to="/">الأخبار</Link>
            </li>
            <li>
              <Link to="/">اتصل بنا</Link>
            </li>
          </ul>
          <ul className="footer-social-links">
            <li>
              <Link to="/">
                <FontAwesomeIcon icon={faTwitter} />
              </Link>
            </li>
            <li>
              <Link to="/">
                <FontAwesomeIcon icon={faYoutube} />
              </Link>
            </li>
            <li>
              <Link to="/">
                <img src={vision2030} alt="vision 2030" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
