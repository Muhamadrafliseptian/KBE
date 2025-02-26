import React, { Component } from "react";
import LogoKbe from "../../assets/images/kbelogo.png";
import {
  FaMapPin,
  FaPhone,
  FaInbox,
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";
export class Navbar extends Component {
  render() {
    return (
      <div>
        <div className="bg-dark py-2">
  <div className="container-fluid">
    <div className="row justify-content-between align-items-center text-light">
      {/* First Column: Welcome Message */}
      <div className="col-12 col-md-auto mb-2 mb-md-0 d-flex align-items-center">
        <FaMapPin size={18} className="me-2" />
        Selamat datang di Karya Baja Estetika
      </div>

      {/* Second Column: Contact Info & Social Icons */}
      <div className="col-12 col-md-auto d-flex flex-wrap justify-content-center justify-content-md-end align-items-center">
        <div className="d-flex align-items-center me-3 mb-2 mb-md-0">
          <FaPhone size={18} className="me-2" />
          (021) 1234-5678
        </div>
        <div className="d-flex align-items-center me-5 mb-2 mb-md-0">
          <FaInbox size={18} className="me-2" />
          info@email.com
        </div>
        <div className="d-flex align-items-center mb-2 mb-md-0">
          <FaTwitter size={18} className="me-2" />
          <FaFacebook size={18} className="me-2" />
          <FaTiktok size={18} className="me-2" />
          <FaYoutube size={18} className="me-2" />
          <FaLinkedin size={18} className="me-2" />
        </div>
      </div>

      {/* Third Column: Login */}
      <div className="col-12 col-md-auto d-flex justify-content-center justify-content-md-end mb-2 mb-md-0">
        <span className="me-3">Login</span>
      </div>
    </div>
  </div>
</div>
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <a className="navbar-brand me-auto" href="#">
              <img
                src={LogoKbe}
                alt="Logo"
                width="350"
                height="50"
                className="d-inline-block align-text-top"
              />
            </a>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarScroll"
              aria-controls="navbarScroll"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse justify-content-end"
              id="navbarScroll"
            >
              <ul className="navbar-nav my-2 my-lg-0 navbar-nav-scroll">
                <li className="nav-item">
                  <a className="nav-link text-dark" href="/">
                    Beranda
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-dark" href="/about-us">
                    Tentang Kami
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-dark" href="/news">
                    Berita & Update
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-dark" href="/product">
                    Produk
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-dark" href="#">
                    Unduh
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-dark" href="/gallery">
                    Galeri
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-dark" href="/contact">
                    Kontak
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
