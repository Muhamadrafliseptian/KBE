import React, { Component } from "react";
import LogoKbe from "../../assets/images/kbelogo.png";
export class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            {/* Logo */}
            <a className="navbar-brand" href="#">
              <img
                src={LogoKbe}
                alt="Logo"
                width="350"
                height="50"
                className="d-inline-block align-text-top"
              />
            </a>

            {/* Toggler Button (For Mobile View) */}
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

            {/* Navbar Items - Digeser ke Kanan dengan ms-auto */}
            <div
              className="collapse navbar-collapse ms-5"
              id="navbarScroll"
            >
              <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
                <li className="nav-item">
                  <a
                    className="nav-link text-dark"
                    aria-current="page"
                    href="/"
                  >
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
                {/* <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle text-dark"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Berita & Update
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </li> */}
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle text-dark"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Produk
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link text-dark"
                    aria-current="page"
                    href="#"
                  >
                    Unduh
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link text-dark"
                    aria-current="page"
                    href="/gallery"
                  >
                    Galeri
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link text-dark"
                    aria-current="page"
                    href="/contact"
                  >
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
