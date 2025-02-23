import React, { Component } from "react";
import imageSlider from "../../assets/images/hero.png";
import image2 from "../../assets/images/image-2.png";
import image3 from "../../assets/images/image-3.png";
import image4 from "../../assets/images/image-4.png";
import image5 from "../../assets/images/image-5.jpg";
import {
  FaCalendar,
  FaCommentDollar,
  FaHeadphones,
  FaBox,
  FaArrowRight,
} from "react-icons/fa";

export class IndexHome extends Component {
  render() {
    return (
      <div>
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-bs-ride="true"
        >
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="overlay"></div>
              <img src={imageSlider} className="d-block w-100" alt="..." />
              <div class="carousel-caption col-xxl-8 px-1 py-5">
                <div class="row my-5 p-5 g-5">
                  <div class="col-lg-8 text-start">
                    <h1 class="display-5 fw-bold text-light lh-1 mb-3">
                      Micro, Medium Bus
                    </h1>
                    <p class="ext-light">
                      Nec duis placerat sit id porta nunc amet consectetur
                      aliquam magna donec ut tellus nisi justo semper vulputate
                      nec enim odio donec.
                    </p>
                    <div class="d-grid gap-2 d-md-flex justify-content-md-start">
                      <button
                        type="button"
                        class="btn btn-outline-light btn-sm px-4"
                      >
                        Selengkapnya
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="overlay"></div>
              <img src={imageSlider} className="d-block w-100" alt="..." />
              <div class="carousel-caption col-xxl-8 px-1 py-5">
                <div class="row my-5 p-5 g-5">
                  <div class="col-lg-8 text-start">
                    <h1 class="display-5 fw-bold text-light lh-1 mb-3">
                      Micro, Medium Bus
                    </h1>
                    <p class="ext-light">
                      Nec duis placerat sit id porta nunc amet consectetur
                      aliquam magna donec ut tellus nisi justo semper vulputate
                      nec enim odio donec.
                    </p>
                    <div class="d-grid gap-2 d-md-flex justify-content-md-start">
                      <button
                        type="button"
                        class="btn btn-outline-light btn-sm px-4"
                      >
                        Selengkapnya
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="overlay"></div>
              <img src={imageSlider} className="d-block w-100" alt="..." />
              <div class="carousel-caption col-xxl-8 px-1 py-5">
                <div class="row my-5 p-5 g-5">
                  <div class="col-lg-8 text-start">
                    <h1 class="display-5 fw-bold text-light lh-1 mb-3">
                      Micro, Medium Bus
                    </h1>
                    <p class="ext-light">
                      Nec duis placerat sit id porta nunc amet consectetur
                      aliquam magna donec ut tellus nisi justo semper vulputate
                      nec enim odio donec.
                    </p>
                    <div class="d-grid gap-2 d-md-flex justify-content-md-start">
                      <button
                        type="button"
                        class="btn btn-outline-light btn-sm px-4"
                      >
                        Selengkapnya
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
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
                CV. KARYA BAJA ESTETIKA adalah Perusahaan swasta yang bergerak
                dibidang industri karoseri modifikasi kendaraan roda empat atau
                lebih, yang memiliki kemampuan untuk memenuhi kebutuhan
                perusahaan-perusahaan swasta dan pemerintahan dalam pengadaan
                kendaraan yang membutuhkan perhatian dengan spesifikasi khusus.
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
                CV. KARYA BAJA ESTETIKA adalah badan usaha bentuk baru dari
                tenaga profesional dibidang modifikasi karoseri kendaraan roda
                empat atau lebih dengan tata kelola manajemen yang kuat dan
                solid serta sudah berpengalaman baik dibidang produksi maupun
                pemasaran.
              </p>

              <p className="">
                <b>
                  Saat ini dengan dukungan peralatan yang memadai dan tenaga
                  ahli yang berpengalaman, kami membangun autobody dengan
                  kualitas terbaik dan standar yang tinggi.
                </b>
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
              <div
                className="card border-0"
                style={{ backgroundColor: "#F2F7FA" }}
              >
                <div className="card-body">
                  <FaBox size={30} color="#003D92" className="mb-3" />
                  <h5 className="card-title">Konsultasi</h5>
                  <p className="card-text" style={{ color: "#5C6776" }}>
                    <small>Troubleshoot & Solution</small>
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div
                className="card border-0"
                style={{ backgroundColor: "#F2F7FA" }}
              >
                <div className="card-body">
                  <FaHeadphones size={30} color="#003D92" className="mb-3" />
                  <h5 className="card-title">Ontime Schedule</h5>
                  <p className="card-text" style={{ color: "#5C6776" }}>
                    <small>Perancangan tepat waktu</small>
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div
                className="card border-0"
                style={{ backgroundColor: "#F2F7FA" }}
              >
                <div className="card-body">
                  <FaCalendar size={30} color="#003D92" className="mb-3" />
                  <h5 className="card-title">Harga & Kualitas</h5>
                  <p className="card-text" style={{ color: "#5C6776" }}>
                    <small>Kualitas dengan harga terbaik</small>
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div
                className="card border-0"
                style={{ backgroundColor: "#F2F7FA" }}
              >
                <div className="card-body">
                  <FaCommentDollar size={30} color="#003D92" className="mb-3" />
                  <h5 className="card-title">PRICE GUARANTEE</h5>
                  <p className="card-text" style={{ color: "#5C6776" }}>
                    <small>Layanan Customer 1x24 Jam</small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container col-xxl-10 px-4 py-1">
          <div className="row flex-lg-row-reverse align-items-center g-3 py-5">
            <div className="col-6 col-sm-4 col-lg-2">
              <button
                type="button"
                className="btn btn-lg px-5 text-light"
                style={{ backgroundColor: "#003D92" }}
              >
                <a>
                  <small>Selengkapnya</small>
                </a>
              </button>
            </div>
            <div className="col-lg-10 text-start">
              <p style={{ color: "#003D92" }}>kenapa memilih kami</p>
              <h1 className="display-5 fw-bold lh-1 mb-3">
                Satu solusi untuk Karoseri
              </h1>
              <p>
                <small>
                  Dengan Kapabilitas tenaga ahli dan peralatan yang memadai
                  untuk menjawab <br></br>
                  segala tantangan dan memberikan solusi bagi kebutuhan
                  modifikasi karoseri. 
                </small>
              </p>
            </div>
          </div>
        </div>

        <div className="container col-xxl-10 px-4 py-1">
          <div className="row row-cols-1 row-cols-md-3 g-4">
            <div className="col">
              <div
                className="card border-0"
                style={{ boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)" }}
              >
                <img src={image4} className="card-img-top" alt="..." />
                <div className="card-body text-start">
                  <h5 className="card-title">Bus Services</h5>
                  <p className="card-text">
                    <small>
                      This is a wider card with supporting text below as a
                      natural
                    </small>
                  </p>
                  <p>
                    <small style={{ color: "#003D92" }}>
                      <b>Detail</b>
                    </small>{" "}
                    <FaArrowRight size={14} color="blue" />
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div
                className="card border-0"
                style={{ boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)" }}
              >
                <img src={image4} className="card-img-top" alt="..." />
                <div className="card-body text-start">
                  <h5 className="card-title">Custom Services</h5>
                  <p className="card-text">
                    <small>
                      This is a wider card with supporting text below as a
                      natural
                    </small>
                  </p>
                  <p>
                    <small style={{ color: "#003D92" }}>
                      <b>Detail</b>
                    </small>{" "}
                    <FaArrowRight size={14} color="blue" />
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div
                className="card border-0"
                style={{ boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)" }}
              >
                <img src={image4} className="card-img-top" alt="..." />
                <div className="card-body text-start">
                  <h5 className="card-title">Electircal Services</h5>
                  <p className="card-text">
                    <small>
                      This is a wider card with supporting text below as a
                      natural
                    </small>
                  </p>
                  <p>
                    <small style={{ color: "#003D92" }}>
                      <b>Detail</b>
                    </small>{" "}
                    <FaArrowRight size={14} color="#003D92" />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="my-1">
          <div className="row p-0 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3">
            <div className="col-lg-6 overflow-hidden">
              <img className="rounded-lg-5" src={image5} alt="" />
            </div>

            <div className="col-lg-6 p-3 p-lg-5 pt-lg-3 text-start">
              <p style={{ color: "#003D92" }}>Testimonials</p>

              <h1 className="display-4 fw-bold lh-1 text-body-emphasis">
                Apa kata Client Kami
              </h1>
              <p>
                <small>
                  Kami senanasa mela ukan terobosan dan inovasi dalam menghadapi
                  seeapantangan baru, mendengarkan keluhan dan memberikan solusi
                  yang cepat dan tepat untuk menjaga standar pelayanan kami
                  kepada pelanggan. Dengan demikian perusahaan akan selalu
                  berada dihati pelanggan dan tumbuh berkembang dari dukungan
                  pelanggan yang telah mempercayai kami.
                </small>
              </p>

              <p>
                <small>
                  "Puas banget dengan pelayanan KBE, sekarang saya sudah ada 3
                  Unit mobil Food Truck dan awet serta jadi andalan sampai saat
                  ini"
                </small>
              </p>

              <div className="">
                <p className="mb-0">
                  <b>Niko</b>
                </p>

                <p className="mt-0" style={{color: '#003D92'}}>
                  Owner | Food Truck
                </p>
              </div>

              <p className="pt-5">
                <small>
                  "Gak diraguin untul hasil kerja tim KBE, konsultasi, diskusi
                  menjadi hal yang asyik sampai pada akhirnya mobil caravan ku
                  jadi sesuai ekspektasi. thanks KBE"
                </small>
              </p>


              <div className="">
                <p className="mb-0">
                  <b>Niko</b>
                </p>

                <p className="mt-0" style={{color: '#003D92'}}>
                  Owner | Food Truck
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container col-xxl-10 px-4 py-1">
          <div className="row flex-lg-row-reverse align-items-center g-3 py-5">
            <div className="col-6 col-sm-4 col-lg-2">
              <button
                type="button"
                className="btn btn-lg px-5 text-light"
                style={{ backgroundColor: "#003D92" }}
              >
                <a>
                  <small>Selengkapnya</small>
                </a>
              </button>
            </div>
            <div className="col-lg-10 text-start">
              <p style={{ color: "#003D92" }}>Blog perusahaan</p>
              <h1 className="display-5 fw-bold lh-1 mb-3">
                Berita & Artikel Terbaru
              </h1>
              <p>
                <small>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </small>
              </p>
            </div>
          </div>
        </div>

        <div className="container col-xxl-10 px-4 py-1">
          <div className="row row-cols-1 row-cols-md-3 g-4">
            <div className="col">
              <div
                className="card border-0"
                style={{ boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)" }}
              >
                <img src={image4} className="card-img-top" alt="..." />
                <div className="card-body text-start">
                  <h5 className="card-title">Bus Services</h5>
                  <p className="card-text">
                    <small>
                      This is a wider card with supporting text below as a
                      natural
                    </small>
                  </p>
                  <p>
                    <small style={{ color: "#003D92" }}>
                      <b>Detail</b>
                    </small>{" "}
                    <FaArrowRight size={14} color="blue" />
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div
                className="card border-0"
                style={{ boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)" }}
              >
                <img src={image4} className="card-img-top" alt="..." />
                <div className="card-body text-start">
                  <h5 className="card-title">Custom Services</h5>
                  <p className="card-text">
                    <small>
                      This is a wider card with supporting text below as a
                      natural
                    </small>
                  </p>
                  <p>
                    <small style={{ color: "#003D92" }}>
                      <b>Detail</b>
                    </small>{" "}
                    <FaArrowRight size={14} color="blue" />
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div
                className="card border-0"
                style={{ boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)" }}
              >
                <img src={image4} className="card-img-top" alt="..." />
                <div className="card-body text-start">
                  <h5 className="card-title">Electircal Services</h5>
                  <p className="card-text">
                    <small>
                      This is a wider card with supporting text below as a
                      natural
                    </small>
                  </p>
                  <p>
                    <small style={{ color: "#003D92" }}>
                      <b>Detail</b>
                    </small>{" "}
                    <FaArrowRight size={14} color="#003D92" />
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
