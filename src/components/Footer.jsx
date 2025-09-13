import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Footer() {
  return (
    <footer className="pt-4">
      <Container>
        <Row>
          <Col md={3}>
            <h5 className="fw-bold">About Us</h5>
            <p>Short description about your company.</p>
          </Col>

          <Col md={3}>
            <h5 className="fw-bold">Contact Us</h5>
            <ul className="list-unstyled">
              <li><a href="#"><i className="fa-solid fa-house"></i> 123 St., Manila</a></li>
              <li><a href="#"><i className="fa-solid fa-phone"></i> (+63) 912-345-6789</a></li>
              <li><a href="#"><i className="fa-solid fa-envelope"></i> gagrecipes@gmail.com</a></li>
            </ul>
          </Col>

          <Col md={3}>
            <h5 className="fw-bold">Follow Us</h5>
            <a href="#"><i className="fa-brands fa-facebook"></i></a>
            <a href="#"><i className="fa-brands fa-instagram"></i></a>
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
          © 2025 Grow a Garden Guide
        </div>
      </Container>
    </footer>
  );
};

export default Footer;