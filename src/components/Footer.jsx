import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import './Footer.css';

import geo_alt_fill from '../assets/geo_alt_fill.svg';
import telephone_fill from '../assets/telephone_fill.svg';
import envelope_fill from '../assets/envelope_fill.svg';
import github from '../assets/github.svg';
import facebook from '../assets/facebook.svg';
import twitter from '../assets/twitter.svg';
import telegram from '../assets/telegram.svg';

function Footer() {
  return (
    <footer className="pt-4">
      <Container>
        <Row>
          <Col md={3}>
            <h5 className="fw-bold">About Me</h5>
            <p>Just a 19-year-old IT boi.</p>
          </Col>

          <Col md={3} className="contacts">
            <h5 className="fw-bold">Contacts</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#">
                  <img src={geo_alt_fill} alt="geo_alt_fill" />
                  Tinaan, Sta. Maria, Ilocos Sur
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={telephone_fill} alt="telephone_fill" />
                  +63 999-757-8755
                </a>
              </li>
              <li>
                <a href="mailto: mark.inclusive1298@gmail.com">
                  <img src={envelope_fill} alt="envelope_fill" />
                  mark.inclusive1298@gmail.com
                </a>
              </li>
            </ul>
          </Col>

          <Col md={3} className="socials mb-3">
            <h5 className="fw-bold">Socials</h5>
            <a href="https://github.com/MarkRaffy28" className="github">
              <img src={github} alt="github" />
            </a>
            <a href="https://www.facebook.com/markraffy.romero" className="facebook">
              <img src={facebook} alt="facebook" />
            </a>
            <a href="https://x.com/MarkRaffy28" className="twitter">
              <img src={twitter} alt="twitter" />
            </a>
            <a href="https://t.me/MarkRaffy28" className="telegram">
              <img src={telegram} alt="telegram" />
            </a>
          </Col>

          <Col md={3}>
            <h5 className="fw-bold">Legal</h5>
            <ul className="list-unstyled">
              <li><a href="#">Privacy</a></li>
              <li><a href="#">Terms of Use</a></li>
            </ul>
          </Col>
        </Row>

        <div className="text-center py-3 border-top mt-3">
          © 2025 Mashu Personal Page
        </div>
      </Container>
    </footer>
  );
};

export default Footer;