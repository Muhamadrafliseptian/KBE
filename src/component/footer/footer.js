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
export class Footer extends Component {
  render() {
    return (
      <div style={{ backgroundColor: "#092043" }}>
        <div className="container mt-5">
          <footer className="py-5">
            <div className="row">
              {/* Logo & Alamat */}
              <div className="col-12 col-md-4 mb-3 text-start text-light">
                <img src={LogoKbe} width="180" alt="Logo KBE" />
                <p className="mt-4">
                  <small>
                    Jl. Aria Wiratanudatar No.25 Cianjur, Jawa Barat - 43215
                  </small>
                </p>

                <FaTwitter size={18} className="me-2" />
                <FaFacebook size={18} className="me-2" />
                <FaTiktok size={18} className="me-2" />
                <FaYoutube size={18} className="me-2" />
                <FaLinkedin size={18} className="me-2" />
              </div>

              {/* Navigasi Perusahaan */}
              <div className="col-6 col-md-2 mb-3 text-start text-light">
                <h5>Perusahaan</h5>
                <ul className="nav flex-column">
                  <li className="nav-item mb-2">
                    <a href="#" className="nav-link p-0 text-light">
                      Tentang kami
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a href="#" className="nav-link p-0 text-light">
                      Berita & Update
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a href="#" className="nav-link p-0 text-light">
                      Layanan
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a href="#" className="nav-link p-0 text-light">
                      Unduh
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a href="#" className="nav-link p-0 text-light">
                      Galeri
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a href="#" className="nav-link p-0 text-light">
                      Blog
                    </a>
                  </li>
                </ul>
              </div>

              {/* Bantuan */}
              <div className="col-6 col-md-2 mb-3 text-start text-light">
                <h5>Bantuan</h5>
                <ul className="nav flex-column">
                  <li className="nav-item mb-2">
                    <a href="#" className="nav-link p-0 text-light">
                      Email Us
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a href="#" className="nav-link p-0 text-light">
                      Help & FAQ
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a href="#" className="nav-link p-0 text-light">
                      Pricing
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a href="#" className="nav-link p-0 text-light">
                      FAQs
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a href="#" className="nav-link p-0 text-light">
                      Shipping & Policy
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a href="#" className="nav-link p-0 text-light">
                      Privacy Policy
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a href="#" className="nav-link p-0 text-light">
                      Term of Use
                    </a>
                  </li>
                </ul>
              </div>

              {/* Form Berlangganan */}
              <div className="col-12 col-md-4 mb-3 text-light">
                <form>
                  <h5 className="text-start">Berlangganan Buletin Bulanan</h5>
                  <p className="text-start">
                    <small>
                      Daftar untuk mendapatkan informasi terbaru dan promo
                      seasonal di Karya Baja Estetika.
                    </small>
                  </p>
                  <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                    <input
                      id="newsletter1"
                      type="email"
                      className="form-control"
                      placeholder="Email address"
                      required
                    />
                  </div>
                  <button className="mt-3 w-100 btn btn-warning" type="submit">
                    <span className="text-light fw-bold">Subscribe Now</span>
                  </button>
                </form>
              </div>
            </div>

            {/* Footer Bawah */}
            <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
              <p className="text-light">
                &copy; Copyright 2025 Karya Baja Estetika. All Rights Reserved.
              </p>
              <ul className="list-unstyled d-flex"></ul>
            </div>
          </footer>
        </div>
      </div>
    );
  }
}

export default Footer;
