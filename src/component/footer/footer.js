import React, { Component } from "react";
import LogoKbe from "../../assets/images/kbelogo.png";

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
              </div>

              {/* Navigasi Perusahaan */}
              <div className="col-6 col-md-2 mb-3 text-start text-light">
                <h5>Perusahaan</h5>
                <ul className="nav flex-column">
                  <li className="nav-item mb-2">
                    <a href="#" className="nav-link p-0 text-light">
                      Home
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a href="#" className="nav-link p-0 text-light">
                      Features
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
                      About
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
                      Home
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a href="#" className="nav-link p-0 text-light">
                      Features
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
                      About
                    </a>
                  </li>
                </ul>
              </div>

              {/* Form Berlangganan */}
              <div className="col-12 col-md-4 mb-3 text-light">
                <form>
                  <h5 className="text-start">Berlangganan Buletin Bulanan</h5>
                  <p className="text-start">
                    <small>Nibh venenatis donec tellus</small>
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
                    <span className="text-dark">Subscribe</span>
                  </button>
                </form>
              </div>
            </div>

            {/* Footer Bawah */}
            <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
              <p className="text-light">
                &copy; 2024 Company, Inc. All rights reserved.
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
