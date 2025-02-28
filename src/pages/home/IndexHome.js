import React, { Component } from "react";
import imageSlider from "../../assets/images/hero.png";
import image2 from "../../assets/images/image-2.png";
import image3 from "../../assets/images/image-3.png";
import image4 from "../../assets/images/image-4.png";
import image5 from "../../assets/images/image-5.jpg";
import brand1 from "../../assets/images/brand-1.png";
import brand2 from "../../assets/images/brand-2.png";
import brand3 from "../../assets/images/brand-3.png";
import brand4 from "../../assets/images/brand-4.png";
import brand5 from "../../assets/images/brand-5.png";
import brand6 from "../../assets/images/brand-6.png";
import brand7 from "../../assets/images/brand-7.png";

import news1 from "../../assets/images/news-1.png";
import news2 from "../../assets/images/news-2.png";
import news3 from "../../assets/images/news-3.png";

import product1 from "../../assets/images/product-1.png";
import product2 from "../../assets/images/product-2.png";
import product3 from "../../assets/images/product-3.png";
import product4 from "../../assets/images/product-4.png";
import product5 from "../../assets/images/product-5.png";

import icon1 from "../../assets/images/icon-1.png";
import icon2 from "../../assets/images/icon-2.png";
import icon3 from "../../assets/images/icon-3.png";
import icon4 from "../../assets/images/icon-4.png";

import ava1 from "../../assets/images/ava-1.png";

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
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              className="active"
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
            {[imageSlider, imageSlider, imageSlider].map((image, index) => (
              <div
                key={index}
                className={`carousel-item ${index === 0 ? "active" : ""}`}
              >
                <div className="overlay"></div>
                <img
                  src={image}
                  className="d-block w-100"
                  alt={`Slide ${index + 1}`}
                />
                <div className="carousel-caption col-xxl-8 px-1 py-5 topbar">
                  <div className="row my-5 p-5 g-5">
                    <div className="col-lg-8 text-start">
                      <h1 className="display-5 fw-bold text-light lh-1 mb-3">
                        Micro, Medium Bus
                      </h1>
                      <p className="text-light">
                        Nec duis placerat sit id porta nunc amet consectetur
                        aliquam magna donec ut tellus nisi justo semper
                        vulputate nec enim odio donec.
                      </p>
                      <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                        <button
                          type="button"
                          className="btn btn-outline-light btn-sm px-4"
                        >
                          Selengkapnya
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
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
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

        <div className="container col-xxl-12 py-1 mt-4 shadow-sm rounded-5">
          <h5 className="fw-bold mb-2" style={{ color: "#003F98" }}>
            PARTNER VENDOR:
          </h5>
          <div className="row justify-content-center g-3 px-5 py-1">
            {[brand1, brand2, brand3, brand4, brand5, brand6].map(
              (brand, index) => (
                <div
                  className="col-4 col-md-4 col-lg-2 d-flex justify-content-center"
                  key={index}
                >
                  <div
                    className="card border-0 overflow-hidden d-flex align-items-center justify-content-center"
                    style={{ width: "100px", height: "70px" }}
                  >
                    <img
                      src={brand}
                      className="card-img-top img-fluid"
                      style={{ objectFit: "contain", maxHeight: "50px" }}
                      alt={`brand-${index}`}
                    />
                  </div>
                </div>
              )
            )}
          </div>
        </div>

        <div class="container col-xxl-10 px-4 py-1">
          <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
            <div class="col-12 col-sm-10 col-md-8 col-lg-6 text-center">
              <img
                src={image2}
                class="img-fluid"
                alt="Bootstrap Themes"
                width="700"
                height="500"
                loading="lazy"
              />
            </div>
            <div class="col-lg-6 text-center text-lg-start">
              <p class="fw-bold" style={{ color: "#003D92" }}>
                Tentang Kami
              </p>
              <h1 class="display-5 fw-bold text-body-emphasis lh-1 mb-3">
                Karya Baja Estetika
              </h1>
              <p>
                CV. KARYA BAJA ESTETIKA adalah Perusahaan swasta yang bergerak
                di bidang industri karoseri modifikasi kendaraan roda empat atau
                lebih, yang memiliki kemampuan untuk memenuhi kebutuhan
                perusahaan-perusahaan swasta dan pemerintahan dalam pengadaan
                kendaraan yang membutuhkan perhatian dengan spesifikasi khusus.
              </p>
              <div class="d-grid gap-2 d-md-flex justify-content-center justify-content-lg-start">
                <button
                  type="button"
                  class="btn btn-sm px-4"
                  style={{ backgroundColor: "#003D92", color: "white" }}
                >
                  Selengkapnya
                  <FaArrowRight size={18} color="white" className="ms-2" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div class="container col-xxl-10 px-4 py-1">
          <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
            <div class="col-lg-6 text-start">
              <p class="fw-bold" style={{ color: "#003D92" }}>
                Kenapa Memilih Kami
              </p>
              <h1
                class="display-5 fw-bold lh-1 mb-3"
                style={{ color: "#092043" }}
              >
                Karya Baja Estetika<br></br>
                Karoseri Terbaik
              </h1>
              <p>
                CV. KARYA BAJA ESTETIKA adalah badan usaha bentuk baru dari
                tenaga profesional di bidang modifikasi karoseri kendaraan roda
                empat atau lebih dengan tata kelola manajemen yang kuat dan
                solid serta sudah berpengalaman baik di bidang produksi maupun
                pemasaran.
              </p>
              <p>
                <b>
                  Saat ini dengan dukungan peralatan yang memadai dan tenaga
                  ahli yang berpengalaman, kami membangun autobody dengan
                  kualitas terbaik dan standar yang tinggi.
                </b>
              </p>
            </div>
            <div class="col-12 col-sm-10 col-md-8 col-lg-6 text-center">
              <img
                src={image3}
                class="img-fluid"
                alt="Bootstrap Themes"
                width="700"
                height="500"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        <div className="container col-xxl-10 px-4 py-1">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
            <div className="col">
              <div
                className="card border-0 h-100"
                style={{ backgroundColor: "#F2F7FA" }}
              >
                <div className="card-body text-center">
                  <img src={icon1} className="mb-3" />
                  <h5 className="card-title">Konsultasi</h5>
                  <p className="card-text" style={{ color: "#5C6776" }}>
                    <small>Troubleshoot & Solution</small>
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div
                className="card border-0 h-100"
                style={{ backgroundColor: "#F2F7FA" }}
              >
                <div className="card-body text-center">
                  <img src={icon2} className="mb-3" />
                  <h5 className="card-title">Ontime Schedule</h5>
                  <p className="card-text" style={{ color: "#5C6776" }}>
                    <small>Perancangan tepat waktu</small>
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div
                className="card border-0 h-100"
                style={{ backgroundColor: "#F2F7FA" }}
              >
                <div className="card-body text-center">
                  <img src={icon3} className="mb-3" />
                  <h5 className="card-title">Harga & Kualitas</h5>
                  <p className="card-text" style={{ color: "#5C6776" }}>
                    <small>Kualitas dengan harga terbaik</small>
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div
                className="card border-0 h-100"
                style={{ backgroundColor: "#F2F7FA" }}
              >
                <div className="card-body text-center">
                  <img src={icon4} className="mb-3" />
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
            <div className="col-12 col-sm-6 col-lg-2 text-center">
              <button
                type="button"
                className="btn btn-lg px-5 text-light"
                style={{ backgroundColor: "#003D92" }}
              >
                <div className="text-center">
                  <small>Selengkapnya</small>
                </div>
              </button>
            </div>
            <div className="col-lg-10 text-center text-lg-start">
              <p style={{ color: "#003D92" }}>kenapa memilih kami</p>
              <h1 className="display-5 fw-bold lh-1 mb-3">
                Satu solusi untuk Karoseri
              </h1>
              <p>
                <small>
                  Dengan Kapabilitas tenaga ahli dan peralatan yang memadai
                  untuk menjawab <br className="d-none d-sm-block" />
                  segala tantangan dan memberikan solusi bagi kebutuhan
                  modifikasi karoseri.
                </small>
              </p>
            </div>
          </div>
        </div>

        <div className="container px-4">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
            <div className="col">
              <div
                className="card border-0 h-100"
                style={{ boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)" }}
              >
                <img src={image4} className="card-img-top" alt="..." />
                <div className="card-body text-start d-flex flex-column">
                  <h5 className="card-title text-color">Bus Services</h5>
                  <p className="card-text flex-grow-1">
                    <small>
                      Kebutuhan aneka Bus yang dapat disesuaikan dengan
                      kebutuhan, buat interior dan exterior anda lebih menawan.
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
            <div className="col">
              <div
                className="card border-0 h-100"
                style={{ boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)" }}
              >
                <img src={product1} className="card-img-top" alt="..." />
                <div className="card-body text-start d-flex flex-column">
                  <h5 className="card-title text-color">Custom Services</h5>
                  <p className="card-text flex-grow-1">
                    <small>
                      Buat kendaraan untuk segala kebutuhan dengan jaminan
                      presisi serta fungsionalitas yang memadai.
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
            <div className="col">
              <div
                className="card border-0 h-100"
                style={{ boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)" }}
              >
                <img src={product2} className="card-img-top" alt="..." />
                <div className="card-body text-start d-flex flex-column">
                  <h5 className="card-title text-color">Electrical Services</h5>
                  <p className="card-text flex-grow-1">
                    <small>
                      Modifikasi dan pembuatan kendaraan listrik yang dapat
                      disesuaikan oleh pengguna untuk segala kebutuhan.
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

            <div className="col">
              <div
                className="card border-0 h-100"
                style={{ boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)" }}
              >
                <img src={product3} className="card-img-top" alt="..." />
                <div className="card-body text-start d-flex flex-column">
                  <h5 className="card-title text-color">Caravan Services</h5>
                  <p className="card-text flex-grow-1">
                    <small>
                      Buat atau Modifikasi model Caravan yang dapat disesuaikan
                      dengan style dan kebutuhan.
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
            <div className="col">
              <div
                className="card border-0 h-100"
                style={{ boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)" }}
              >
                <img src={product4} className="card-img-top" alt="..." />
                <div className="card-body text-start d-flex flex-column">
                  <h5 className="card-title text-color">Car Services</h5>
                  <p className="card-text flex-grow-1">
                    <small>
                      Bentuk dan Modifikasi kendaraan untuk social atau pribadi
                      yang dapat disesuaikan dengan kebutuhan.
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
            <div className="col">
              <div
                className="card border-0 h-100"
                style={{ boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)" }}
              >
                <img src={product5} className="card-img-top" alt="..." />
                <div className="card-body text-start d-flex flex-column">
                  <h5 className="card-title text-color">Lub Services</h5>
                  <p className="card-text flex-grow-1">
                    <small>
                      Modifikasi mobil niaga untuk kegiatan pameran, roadshow
                      dengan build quality yang terjamin.
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

        <div className="container-fluid pt-4">
          <div className="row p-0 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3">
            {/* Image Section */}
            <div className="col-12 col-lg-6 text-center text-lg-start mb-4 mb-lg-0 p-0">
              <img
                className="img-fluid w-100"
                src={image5}
                alt=""
                style={{ height: "100%", objectFit: "cover", display: "block" }}
              />
            </div>

            {/* Testimonial Section */}
            <div className="col-12 col-lg-6 p-3 p-lg-5 pt-lg-3 text-start text-lg-start">
              <p style={{ color: "#003D92" }}>Testimonials</p>

              <h1 className="display-5 fw-bold lh-1 text-body-emphasis">
                Apa kata Client Kami
              </h1>

              <p className="text-muted">
                <small>
                  Kami senantiasa melakukan terobosan dan inovasi dalam
                  menghadapi setiap tantangan baru, mendengarkan keluhan dan
                  memberikan solusi yang cepat dan tepat untuk menjaga standar
                  pelayanan kami kepada pelanggan.
                </small>
              </p>

              {/* Testimonial 1 */}
              <div className="bg-light p-3 rounded-4 shadow-sm mb-3">
                <p className="text-muted mb-3">
                  <small>
                    "Puas banget dengan pelayanan KBE, sekarang saya sudah ada 3
                    Unit mobil Food Truck dan awet serta jadi andalan sampai
                    saat ini."
                  </small>
                </p>

                <div className="d-flex align-items-center">
                  <img
                    src={ava1}
                    className="rounded-circle me-3"
                    width="50"
                    height="50"
                    alt="Dian"
                  />
                  <div>
                    <h6 className="fw-bold mb-0">Dian</h6>
                    <p className="mb-0" style={{ color: "#003D92" }}>
                      <small>Owner | Food Truck</small>
                    </p>
                  </div>
                </div>
              </div>

              {/* Testimonial 2 */}
              <div className="bg-light p-3 rounded-4 shadow-sm">
                <p className="text-muted mb-3">
                  <small>
                    "Gak diraguin untuk hasil kerja tim KBE, konsultasi, diskusi
                    menjadi hal yang asyik sampai pada akhirnya mobil caravan ku
                    jadi sesuai ekspektasi. Thanks KBE!"
                  </small>
                </p>

                <div className="d-flex align-items-center">
                  <img
                    src={ava1}
                    className="rounded-circle me-3"
                    width="50"
                    height="50"
                    alt="Ananda Lee"
                  />
                  <div>
                    <h6 className="fw-bold mb-0">Ananda Lee</h6>
                    <p className="mb-0" style={{ color: "#003D92" }}>
                      <small>Content Creator | Public Figure</small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container col-xxl-10 px-4 py-1">
          <div className="row flex-lg-row-reverse align-items-center g-3 py-5 text-center text-lg-start">
            <div className="col-12 col-sm-6 col-lg-2 d-flex justify-content-center justify-content-lg-start">
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
            <div className="col-12 col-lg-10">
              <p style={{ color: "#003D92" }}>Blog perusahaan</p>
              <h1 className="display-5 fw-bold lh-1 mb-3">
                Berita & Artikel Terbaru
              </h1>
              <p>
                <small>
                  Dapatkan informasi terkait aktifitas kami dan trend di dunia
                  modifikasi, karoseri dan mobil secara up to date.{" "}
                </small>
              </p>
            </div>
          </div>
        </div>

        <div className="container col-xxl-10 px-4 py-1">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
            <div className="col">
              <div
                className="card border-0 h-100"
                style={{ boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)" }}
              >
                <img src={news1} className="card-img-top" alt="..." />
                <div className="card-body text-start d-flex flex-column">
                  <h5 className="card-title fw-bold text-color">
                    Van Day, Ajang Kumpul Modifikasi Mobil Keluarga di Indonesia
                  </h5>
                  <p className="flex-grow-1 text-secondary">
                    <small>APRIL 15, 2021 NO COMMENTS</small>
                  </p>
                  <p className="card-text flex-grow-1">
                    <small>
                      Tak hanya mobil bergenre city car, sedan, hatchback, atau
                      SUV, modifikasi di segmen mobil keluarga alias multi
                      purpose vehicle.
                    </small>
                  </p>
                  <p>
                    <small style={{ color: "#003D92" }}>
                      <b>Read More →</b>
                    </small>{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div
                className="card border-0 h-100"
                style={{ boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)" }}
              >
                <img src={news2} className="card-img-top" alt="..." />
                <div className="card-body text-start d-flex flex-column">
                  <h5 className="card-title fw-bold text-color">
                    Zebra Espass Mahalan Biaya Modif daripada Harga Mobilnya{" "}
                  </h5>
                  <p className="flex-grow-1 text-secondary">
                    <small>APRIL 15, 2021 NO COMMENTS</small>
                  </p>
                  <p className="card-text flex-grow-1">
                    <small>
                      Daihatsu Zebra Espass merupakan mobil pintu geser yang
                      cukup legendaris di Indonesia. Seorang pensiunan Dinas
                      Sosial.
                    </small>
                  </p>
                  <p>
                    <small style={{ color: "#003D92" }}>
                      <b>Read More →</b>
                    </small>{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div
                className="card border-0 h-100"
                style={{ boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)" }}
              >
                <img src={news3} className="card-img-top" alt="..." />
                <div className="card-body text-start d-flex flex-column">
                  <h5 className="card-title fw-bold text-color">
                    Sebelum Memulai Bisnis Food Truck, Simak Estimasi Biayanya{" "}
                  </h5>
                  <p className="flex-grow-1 text-secondary">
                    <small>APRIL 15, 2021 NO COMMENTS</small>
                  </p>
                  <p className="card-text flex-grow-1">
                    <small>
                      Bisnis berjualan makanan dengan desain food truck kini
                      tengah menjangkit di sejumlah tempat. Bisnis ini disebut
                      cukup.
                    </small>
                  </p>
                  <p>
                    <small style={{ color: "#003D92" }}>
                      <b>Read More →</b>
                    </small>{" "}
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
