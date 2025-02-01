import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faPinterest,
  faCcVisa,
  faCcMastercard,
  faCcPaypal,
  faCcApplePay,
} from "@fortawesome/free-brands-svg-icons";

const Bottombar = () => {
  return (
    <footer className="bg-dark text-white py-5">
      <div className="container">
        {/* Top Section: Quick Links, Customer Service, etc. */}
        <div className="row mb-4">
          {/* Quick Links */}
          <div className="col-6 col-md-3 mb-4">
            <h5 className="mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/" className="text-white text-decoration-none">
                  Home
                </a>
              </li>
              <li>
                <a href="/Product" className="text-white text-decoration-none">
                  Product
                </a>
              </li>
              <li>
                <a href="/About" className="text-white text-decoration-none">
                  About
                </a>
              </li>
              <li>
                <a href="/Contact" className="text-white text-decoration-none">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div className="col-6 col-md-3 mb-4">
            <h5 className="mb-3">Customer Service</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/Contact" className="text-white text-decoration-none">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="/" className="text-white text-decoration-none">
                  Shipping Information
                </a>
              </li>
              <li>
                <a href="/" className="text-white text-decoration-none">
                  Returns & Exchanges
                </a>
              </li>
              <li>
                <a href="/" className="text-white text-decoration-none">
                  FAQs
                </a>
              </li>
              <li>
                <a href="/" className="text-white text-decoration-none">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* About Us */}
          <div className="col-6 col-md-3 mb-4">
            <h5 className="mb-3">About Us</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/About" className="text-white text-decoration-none">
                  Our Story
                </a>
              </li>
              <li>
                <a href="/" className="text-white text-decoration-none">
                  Careers
                </a>
              </li>
              <li>
                <a href="/" className="text-white text-decoration-none">
                  Press
                </a>
              </li>
              <li>
                <a href="/" className="text-white text-decoration-none">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-12 col-md-3 mb-4">
            <h5 className="mb-3">Subscribe to Our Newsletter</h5>
            <form>
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your email"
                />
              </div>
              <button type="submit" className="btn btn-primary w-100">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Section: Social Media, Payment Methods, Copyright */}
        <div className="border-top pt-4">
          <div className="row align-items-center">
            {/* Social Media Icons */}
            <div className="col-12 col-md-4 mb-3 mb-md-0">
              <div className="d-flex gap-3">
                <a href="https://facebook.com" className="text-white">
                  <i className="fab fa-facebook"></i>
                </a>
                <a href="https://instagram.com" className="text-white">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="https://twitter.com" className="text-white">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="https://pinterest.com" className="text-white">
                  <i className="fab fa-pinterest"></i>
                </a>
              </div>
            </div>

            {/* Payment Methods */}
            <div className="col-12 col-md-4 mb-3 mb-md-0">
              <div className="d-flex gap-3 justify-content-center">
                <i className="fab fa-cc-visa fa-2x"></i>
                <i className="fab fa-cc-mastercard fa-2x"></i>
                <i className="fab fa-cc-paypal fa-2x"></i>
                <i className="fab fa-cc-apple-pay fa-2x"></i>
              </div>
            </div>

            {/* Copyright */}
            <div className="col-12 col-md-4 text-center text-md-end">
              <p className="mb-0">© 2025 E-Seller. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Bottombar;
