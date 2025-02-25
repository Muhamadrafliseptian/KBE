import React, { Component } from "react";
import LogoKbe from "../../assets/images/kbelogo.png";
export class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            {/* Logo di sebelah kiri */}
            <a className="navbar-brand me-auto" href="#">
              <img
                src={LogoKbe}
                alt="Logo"
                width="350"
                height="50"
                className="d-inline-block align-text-top"
              />
            </a>

            {/* Button Toggle untuk mode mobile */}
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

            {/* Menu di sebelah kanan */}
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
