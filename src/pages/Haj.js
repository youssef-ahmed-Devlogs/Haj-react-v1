import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import "../assets/style/pages/haj.scss";
import brandImg from "../assets/images/brand.png";
import { Link } from "react-router-dom";

const Haj = () => {
  return (
    <div className="haj-page">
      <div className="header-bottom">
        <div className="container">
          <div className="header-bottom_content">
            <div className="brand">
              <img src={brandImg} alt="brand" />
            </div>

            <ul className="d-flex align-items-center" style={{ gap: "20px" }}>
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

      <div className="container py-5">
        <Card className="mb-4">
          <Row className="align-items-center">
            <Col xl={8}>
              <Card.Body>
                <Card.Text>
                  بدأت رحلة الحج من ذاك النداء الإبراهيمي الذي صدع به أبو
                  الأنبياء إبراهيم - عليه السلام - من جوار الكعبة المشرفة
                </Card.Text>

                <Card.Text className="text-success">
                  بدأت رحلة الحج من ذاك النداء الإبراهيمي الذي صدع به أبو
                  الأنبياء إبراهيم - عليه السلام - من جوار الكعبة
                  <span className="hailight"> المشرفة</span>
                </Card.Text>

                <Card.Text>
                  بدأت رحلة الحج من ذاك النداء الإبراهيمي الذي صدع به أبو
                  الأنبياء إبراهيم - عليه السلام - من جوار الكعبة المشرفة بدأت
                  رحلة الحج من ذاك النداء الإبراهيمي الذي صدع به أبو الأنبياء
                  إبراهيم - عليه السلام - من جوار الكعبة المشرفة بدأت رحلة الحج
                  من ذاك النداء الإبراهيمي الذي صدع به أبو الأنبياء إبراهيم -
                  عليه السلام - من جوار الكعبة المشرفة
                </Card.Text>
              </Card.Body>
            </Col>

            <Col xl={4}>
              <Card.Body>
                <div className="countdown">
                  <div className="countdown-content">
                    <h4 className="countdown-title">المتبقي على الحج</h4>

                    <div className="countdown-items">
                      <div className="countdown-item countdown-hours">
                        <span className="num">03 :</span>
                        <span className="text">ساعة</span>
                      </div>
                      <div className="countdown-item countdown-days">
                        <span className="num">03 :</span>
                        <span className="text">يوم</span>
                      </div>
                      <div className="countdown-item countdown-months">
                        <span className="num">03</span>
                        <span className="text">شهر</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Col>
          </Row>
        </Card>

        <Card>
          <Card.Body>
            <ul className="tabs-tabs">
              <li>
                <a href="#" className="active">
                  عن الحج
                </a>
              </li>
              <li>
                <a href="#">اركان الحج</a>
              </li>
              <li>
                <a href="#">واجبات الحج</a>
              </li>
              <li>
                <a href="#">سنن الحج ومستحباته</a>
              </li>
              <li>
                <a href="#"> رحلة الحج </a>
              </li>
              <li>
                <a href="#">تنظيمات قدوم الحج</a>
              </li>
              <li>
                <a href="#">تنبيهات هامة</a>
              </li>
            </ul>

            <hr />

            <div className="tabs-content">
              <ul className="list-styled">
                <li>
                  حج بيت الله الحرام هو ركن من أركان الإسلام الخمسة, لقوله تعالى
                  والله على الناس حج البيت من استطاع إليه سبيل.
                </li>
                <li>هو الركن الخامس من أركان الإسلام</li>
                <li>هو الركن الخامس من أركان الإسلام</li>
                <li>هو الركن الخامس من أركان الإسلام</li>
                <li>هو الركن الخامس من أركان الإسلام</li>
              </ul>
            </div>

            <div className="timing mt-4">
              <h4> المواقيت المكانية : </h4>

              <Row style={{ gap: "20px 0" }}>
                <Col xl={3} md={6}>
                  <div className="card-v2">
                    <div className="card-icon">
                      <FontAwesomeIcon icon={faMapMarkerAlt} />
                    </div>

                    <h5 className="card-title">ذو الحليفة</h5>

                    <p className="card-text">
                      نص تجريبي باللغة العربية نص تجريبي باللغة العربية نص
                      تجريبي باللغة العربية نص تجريبي باللغة العربية نص تجريبي
                      باللغة العربية نص تجريبي باللغة العربية نص تجريبي باللغة
                      العربية نص تجريبي باللغة العربية نص تجريبي باللغة العربية
                      نص تجريبي باللغة العربية
                    </p>
                  </div>
                </Col>

                <Col xl={3} md={6}>
                  <div className="card-v2">
                    <div className="card-icon">
                      <FontAwesomeIcon icon={faMapMarkerAlt} />
                    </div>
                    <h5 className="card-title">ذو الحليفة</h5>

                    <p className="card-text">
                      نص تجريبي باللغة العربية نص تجريبي باللغة العربية نص
                      تجريبي باللغة العربية نص تجريبي باللغة العربية نص تجريبي
                      باللغة العربية نص تجريبي باللغة العربية نص تجريبي باللغة
                      العربية نص تجريبي باللغة العربية نص تجريبي باللغة العربية
                      نص تجريبي باللغة العربية
                    </p>
                  </div>
                </Col>

                <Col xl={3} md={6}>
                  <div className="card-v2">
                    <div className="card-icon">
                      <FontAwesomeIcon icon={faMapMarkerAlt} />
                    </div>

                    <h5 className="card-title">ذو الحليفة</h5>

                    <p className="card-text">
                      نص تجريبي باللغة العربية نص تجريبي باللغة العربية نص
                      تجريبي باللغة العربية نص تجريبي باللغة العربية نص تجريبي
                      باللغة العربية نص تجريبي باللغة العربية نص تجريبي باللغة
                      العربية نص تجريبي باللغة العربية نص تجريبي باللغة العربية
                      نص تجريبي باللغة العربية
                    </p>
                  </div>
                </Col>

                <Col xl={3} md={6}>
                  <div className="card-v2">
                    <div className="card-icon">
                      <FontAwesomeIcon icon={faMapMarkerAlt} />
                    </div>

                    <h5 className="card-title">ذو الحليفة</h5>

                    <p className="card-text">
                      نص تجريبي باللغة العربية نص تجريبي باللغة العربية نص
                      تجريبي باللغة العربية نص تجريبي باللغة العربية نص تجريبي
                      باللغة العربية نص تجريبي باللغة العربية نص تجريبي باللغة
                      العربية نص تجريبي باللغة العربية نص تجريبي باللغة العربية
                      نص تجريبي باللغة العربية
                    </p>
                  </div>
                </Col>
              </Row>
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Haj;
