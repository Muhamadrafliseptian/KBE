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
  FaMailBulk

} from "react-icons/fa";

export class Navbar extends Component {
  render() {
    return (
      <div>
        <div className="bg-dark py-2 topbar">
          <div className="container-fluid d-none d-lg-flex justify-content-between align-items-center text-light">
            <p className="mb-0 d-flex align-items-center">
              <FaMapPin size={18} className="me-2" />
              Selamat datang di Karya Baja Estetika
            </p>

            <p className="mb-0 d-flex align-items-center">
              <span className="me-3">
                <FaPhone size={18} className="me-2" />
                0812-3456-7890
              </span>
              <span className="me-5">
                <FaMailBulk size={18} className="me-2" />
                kbe@gmail.com
              </span>
              <span className="me-5">
                <FaTwitter size={18} className="me-2" />
                <FaFacebook size={18} className="me-2" />
                <FaTiktok size={18} className="me-2" />
                <FaYoutube size={18} className="me-2" />
                <FaLinkedin size={18} className="me-2" />
              </span>

              <span className="me-3">Login</span>
            </p>
          </div>
        </div>

        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <a className="navbar-brand me-auto topbar" href="/">
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
