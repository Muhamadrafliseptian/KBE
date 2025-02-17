import React, { Component } from "react";
import imageSlider from "../../assets/images/hero.png";
import image2 from "../../assets/images/image-2.png";
import image3 from "../../assets/images/image-3.png";

export class IndexHome extends Component {
  render() {
    return (
      <div>
        <div
          id="carouselExampleRide"
          className="carousel slide"
          data-bs-ride="true"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleRide"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleRide"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleRide"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="overlay"></div>
              <img src={imageSlider} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <div className="overlay"></div>
              <img src={imageSlider} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <div className="overlay"></div>
              <img src={imageSlider} className="d-block w-100" alt="..." />
            </div>

            <div className="col-lg-6">
              <h1 className="mb-3 text-light text-start">Micro, Medium Bus</h1>
              <p className="text-light text-start">
                Nec duis placerat sit id porta nunc amet consectetur aliquam
                magna donec ut tellus nisi justo semper vulputate nec enim odio
                donec.
              </p>
              <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                <button
                  type="button"
                  className="btn btn-outline-secondary btn-sm px-4"
                >
                  Selengkapnya
                </button>
              </div>
            </div>
          </div>

          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleRide"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleRide"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

        <div className="container col-xxl-10 px-4 py-1">
          <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
            <div className="col-10 col-sm-8 col-lg-6">
              <img
                src={image2}
                className="d-block mx-lg-auto img-fluid"
                alt="Bootstrap Themes"
                width="700"
                height="500"
                loading="lazy"
              />
            </div>
            <div className="col-lg-6 text-start">
              <p style={{ color: "#003D92" }}>Tentang Kami</p>
              <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">
                Karya Baja Estetika
              </h1>
              <p className="">
                Quickly design and customize responsive mobile-first sites with
                Bootstrap, the world’s most popular front-end open source
              </p>

              <p className="">
                Quickly design and customize responsive mobile-first sites with
                Bootstrap, the world’s most popular front-end open source
              </p>
              <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                <button
                  type="button"
                  className="btn btn-sm px-4 me-md-2"
                  style={{ backgroundColor: "#003D92", color: "white" }}
                >
                  Selengkapnya
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="container col-xxl-10 px-4 py-1">
          <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
            <div className="col-lg-6 text-start">
              <p style={{ color: "#003D92" }}>kenapa memilih kami</p>
              <h1
                className="display-5 fw-bold lh-1 mb-3"
                style={{ color: "#003D92" }}
              >
                Karya Baja Estetika
                <br />
                Karoseri Terbaik
              </h1>
              <p className="">
                Quickly design and customize responsive mobile-first sites with
                Bootstrap, the world’s most popular front-end open source
              </p>

              <p className="">
                Quickly design and customize responsive mobile-first sites with
                Bootstrap, the world’s most popular front-end open source
              </p>
            </div>
            <div className="col-10 col-sm-8 col-lg-6">
              <img
                src={image3}
                className="d-block mx-lg-auto img-fluid"
                alt="Bootstrap Themes"
                width="700"
                height="500"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        <div className="container col-xxl-10 px-4 py-1">
          <div className="row row-cols-1 row-cols-md-4 g-4">
            <div className="col">
              <div className="card" style={{ backgroundColor: "#F2F7FA" }}>
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This card has even longer
                    content than the first to show that equal height action.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card" style={{ backgroundColor: "#F2F7FA" }}>
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This card has even longer
                    content than the first to show that equal height action.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card" style={{ backgroundColor: "#F2F7FA" }}>
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This card has even longer
                    content than the first to show that equal height action.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card" style={{ backgroundColor: "#F2F7FA" }}>
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This card has even longer
                    content than the first to show that equal height action.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default IndexHome;
