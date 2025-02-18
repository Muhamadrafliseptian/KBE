import React, { Component } from "react";
import LogoKbe from "../../assets/images/kbelogo.png";

export class Footer extends Component {
  render() {
    return (
      <div style={{ backgroundColor: "#092043" }}>
        <div class="container mt-5">
          <footer class="py-5">
            <div class="row">
              <div class="col-8 col-md-4 mb-3 text-start text-light">
                <img src={LogoKbe} width="180" />

                <p className="mt-5">
                  <small>
                    Jl. Aria Wiratanudatar No.25 Cianjur, Jawa Barat - 43215
                  </small>
                </p>
              </div>

              <div class="col-2 col-md-2 mb-3 text-start text-light">
                <h5>Perusahaan</h5>
                <ul class="nav flex-column">
                  <li class="nav-item mb-2">
                    <a href="#" class="nav-link p-0 text-light">
                      Home
                    </a>
                  </li>
                  <li class="nav-item mb-2">
                    <a href="#" class="nav-link p-0 text-light">
                      Features
                    </a>
                  </li>
                  <li class="nav-item mb-2">
                    <a href="#" class="nav-link p-0 text-light">
                      Pricing
                    </a>
                  </li>
                  <li class="nav-item mb-2">
                    <a href="#" class="nav-link p-0 text-light">
                      FAQs
                    </a>
                  </li>
                  <li class="nav-item mb-2">
                    <a href="#" class="nav-link p-0 text-light">
                      About
                    </a>
                  </li>
                </ul>
              </div>

              <div class="col-2 col-md-2 mb-3 text-start text-light">
                <h5>Bantuan</h5>
                <ul class="nav flex-column">
                  <li class="nav-item mb-2">
                    <a href="#" class="nav-link p-0 text-light">
                      Home
                    </a>
                  </li>
                  <li class="nav-item mb-2">
                    <a href="#" class="nav-link p-0 text-light">
                      Features
                    </a>
                  </li>
                  <li class="nav-item mb-2">
                    <a href="#" class="nav-link p-0 text-light">
                      Pricing
                    </a>
                  </li>
                  <li class="nav-item mb-2">
                    <a href="#" class="nav-link p-0 text-light">
                      FAQs
                    </a>
                  </li>
                  <li class="nav-item mb-2">
                    <a href="#" class="nav-link p-0 text-light">
                      About
                    </a>
                  </li>
                </ul>
              </div>

              <div class="col-md-3 offset-md-1 mb-3 text-light">
                <form>
                  <h5 className="text-start">Berlangganan buletin bulanan</h5>
                  <p className="text-start">
                    <small>Nibh venenatis donec tellus</small>
                  </p>
                  <div class="d-flex flex-column flex-sm-row w-100 gap-2">
                    <label for="newsletter1" class="visually-hidden">
                      Email address
                    </label>
                    <input
                      id="newsletter1"
                      type="text"
                      class="form-control"
                      placeholder="Email address"
                    />
                  </div>
                  <button
                    class="mt-3 w-100 gap-2 btn btn-warning"
                    type="button"
                  >
                    <a className="text-center text-dark" href="">Subscribe</a>
                  </button>
                </form>
              </div>
            </div>

            <div class="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
              <p className="text-light">
                &copy; 2024 Company, Inc. All rights reserved.
              </p>
              <ul class="list-unstyled d-flex"></ul>
            </div>
          </footer>
        </div>
      </div>
    );
  }
}

export default Footer;
