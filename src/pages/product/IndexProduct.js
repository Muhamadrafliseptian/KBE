import React, { Component } from "react";
import image2 from "../../assets/images/image-2.png";
import image3 from "../../assets/images/image-3.png";
import image4 from "../../assets/images/image-4.png";
import image6 from "../../assets/images/image-5.jpg";
import ava1 from "../../assets/images/ava-1.png";
import brand1 from "../../assets/images/brand-1.png";
import brand2 from "../../assets/images/brand-2.png";
import brand3 from "../../assets/images/brand-3.png";
import brand4 from "../../assets/images/brand-4.png";
import brand5 from "../../assets/images/brand-5.png";
import brand6 from "../../assets/images/brand-6.png";
import product1 from "../../assets/images/product-1.png";
import product2 from "../../assets/images/product-2.png";
import product3 from "../../assets/images/product-3.png";
import product4 from "../../assets/images/product-4.png";
import product5 from "../../assets/images/product-5.png";
import produk from "../../assets/images/layanan.png";
import {
  FaPhone,
  FaArrowRight,
  FaCheck,
  FaCalendarAlt,
  FaHome,
  FaLayerGroup,
  FaQuoteLeft,
} from "react-icons/fa";
export class IndexProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0, // Slide pertama aktif
      testimonials: [
        {
          name: "Budi Santoso",
          company: "PT. Maju Jaya",
          message:
            "Puas banget dengan pelayanan KBE, sekarang saya sudah ada 3 Unit mobil Food Truck dan awet serta jadi andalan sampai saat ini",
          image: ava1, // Ganti dengan foto asli
        },
        {
          name: "Siti Aisyah",
          company: "CV. Sentosa Abadi",
          message:
            "Sangat profesional dan tepat waktu. Pasti akan kembali untuk pesanan berikutnya!",
          image: ava1, // Ganti dengan foto asli
        },
        {
          name: "Ahmad Fauzi",
          company: "UD. Sumber Makmur",
          message:
            "Hasil kerja rapi dan kuat. Sangat direkomendasikan untuk kebutuhan industri baja.",
          image: ava1, // Ganti dengan foto asli
        },
      ],
    };
  }

  componentDidMount() {
    const carouselElement = document.getElementById(
      "carouselExampleIndicators"
    );
    if (carouselElement) {
      carouselElement.addEventListener("slid.bs.carousel", (event) => {
        this.setState({ activeIndex: event.to }); // Update activeIndex saat slide berubah
      });
    }
  }
  render() {
    const { testimonials, activeIndex } = this.state;
    return (
      <div>
        <div
          style={{
            backgroundImage: `url(${produk})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "300px",
            display: "flex",
            alignItems: "center",
            justifyContent: "start",
            paddingLeft: "150px", // Memberikan space di kiri
            position: "relative",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(9, 32, 67, 0.6)", // Overlay dengan warna #092043
            }}
          ></div>
          <h1
            style={{
              color: "white",
              fontSize: "36px",
              fontWeight: "bold",
              position: "relative",
              zIndex: 1,
            }}
          >
            Layanan
          </h1>
        </div>

        <div className="container px-4 py-5">
          <div className="text-center mb-4">
            <h1 className="fw-bold" style={{ color: "#092043" }}>
              Satu solusi untuk Karoseri{" "}
            </h1>
            <p className="text-muted">
              Dengan Kapabilitas tenaga ahli dan peralatan yang memadai untuk
              menjawab segala tantangan dan memberikan solusi bagi kebutuhan
              modifikasi karoseri.{" "}
            </p>
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
                        kebutuhan, buat interior dan exterior anda lebih
                        menawan.
                      </small>
                    </p>
                    <div className="d-grid d-md-flex justify-content-md-center">
                      <button
                        type="button"
                        className="btn btn-sm px-4 py-1 d-flex align-items-center"
                        style={{ backgroundColor: "#E6F5FC", color: "#1756B5" }}
                      >
                        <b>Detail</b>
                        <FaArrowRight
                          size={16}
                          color="#1756B5"
                          className="ms-1"
                        />
                      </button>
                    </div>
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
                    <div className="d-grid d-md-flex justify-content-md-center">
                      <button
                        type="button"
                        className="btn btn-sm px-4 py-1 d-flex align-items-center"
                        style={{ backgroundColor: "#E6F5FC", color: "#1756B5" }}
                      >
                        <b>Detail</b>
                        <FaArrowRight
                          size={16}
                          color="#1756B5"
                          className="ms-1"
                        />
                      </button>
                    </div>
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
                    <h5 className="card-title text-color">
                      Electrical Services
                    </h5>
                    <p className="card-text flex-grow-1">
                      <small>
                        Modifikasi dan pembuatan kendaraan listrik yang dapat
                        disesuaikan oleh pengguna untuk segala kebutuhan.
                      </small>
                    </p>
                    <div className="d-grid d-md-flex justify-content-md-center">
                      <button
                        type="button"
                        className="btn btn-sm px-4 py-1 d-flex align-items-center"
                        style={{ backgroundColor: "#E6F5FC", color: "#1756B5" }}
                      >
                        <b>Detail</b>
                        <FaArrowRight
                          size={16}
                          color="#1756B5"
                          className="ms-1"
                        />
                      </button>
                    </div>
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
                        Buat atau Modifikasi model Caravan yang dapat
                        disesuaikan dengan style dan kebutuhan.
                      </small>
                    </p>
                    <div className="d-grid d-md-flex justify-content-md-center">
                      <button
                        type="button"
                        className="btn btn-sm px-4 py-1 d-flex align-items-center"
                        style={{ backgroundColor: "#E6F5FC", color: "#1756B5" }}
                      >
                        <b>Detail</b>
                        <FaArrowRight
                          size={16}
                          color="#1756B5"
                          className="ms-1"
                        />
                      </button>
                    </div>
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
                        Bentuk dan Modifikasi kendaraan untuk social atau
                        pribadi yang dapat disesuaikan dengan kebutuhan.
                      </small>
                    </p>
                    <div className="d-grid d-md-flex justify-content-md-center">
                      <button
                        type="button"
                        className="btn btn-sm px-4 py-1 d-flex align-items-center"
                        style={{ backgroundColor: "#E6F5FC", color: "#1756B5" }}
                      >
                        <b>Detail</b>
                        <FaArrowRight
                          size={16}
                          color="#1756B5"
                          className="ms-1"
                        />
                      </button>
                    </div>
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
                    <div className="d-grid d-md-flex justify-content-md-center">
                      <button
                        type="button"
                        className="btn btn-sm px-4 py-1 d-flex align-items-center"
                        style={{ backgroundColor: "#E6F5FC", color: "#1756B5" }}
                      >
                        <b>Detail</b>
                        <FaArrowRight
                          size={16}
                          color="#1756B5"
                          className="ms-1"
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container col-xxl-10 px-4 py-5">
          <div className="row justify-content-center g-5 px-5 py-1">
            {[brand1, brand2, brand3, brand4, brand5, brand6].map(
              (brand, index) => (
                <div
                  className="col-4 col-md-4 col-lg-2 d-flex justify-content-center"
                  key={index}
                >
                  <div
                    className="card border-0 overflow-hidden d-flex align-items-center justify-content-center"
                    style={{ width: "100px", height: "100px" }}
                  >
                    <img
                      src={brand}
                      className="card-img-top img-fluid"
                      style={{ objectFit: "contain", maxHeight: "100px" }}
                      alt={`brand-${index}`}
                    />
                  </div>
                </div>
              )
            )}
          </div>
        </div>

        <div
          className="container-fluid px-4 py-5"
          style={{ backgroundColor: "#003f98" }}
        >
          <div className="text-center mb-4">
            <h1 className="fw-bold" style={{ color: "white" }}>
              Kerjasama mudah dalam 3 Langkah{" "}
            </h1>
            <p className="text-light">
              Dengan Kapabilitas tenaga ahli dan peralatan yang memadai untuk
              menjawab segala tantangan dan memberikan solusi bagi kebutuhan
              modifikasi karoseri
            </p>
          </div>

          <div className="container px-4">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
              <div className="col">
                <div className="border-0 text-center d-flex flex-column align-items-center">
                  <div
                    className="d-flex align-items-center justify-content-center mb-3"
                    style={{
                      backgroundColor: "#E1C010",
                      width: "60px",
                      height: "60px",
                      borderRadius: "50%",
                    }}
                  >
                    <FaLayerGroup size={28} color="#003F98" />
                  </div>

                  <h5 className="text-light">Choose Our Service</h5>
                  <p className="text-light flex-grow-1">
                    <small>
                      Pilih layanan sesuai dengan kebutuhan anda dan dapat
                      konsultasikan kepada kami.
                    </small>
                  </p>
                </div>
              </div>

              <div className="col">
                <div className="border-0 text-center d-flex flex-column align-items-center">
                  <div
                    className="d-flex align-items-center justify-content-center mb-3"
                    style={{
                      backgroundColor: "#E1C010",
                      width: "60px",
                      height: "60px",
                      borderRadius: "50%",
                    }}
                  >
                    <FaCalendarAlt size={28} color="#003F98" />
                  </div>

                  <h5 className="text-light">Schedule Date & Time</h5>
                  <p className="text-light flex-grow-1">
                    <small>
                      Diskusikan waktu proses pengerjaan terhadap keinginan anda
                      dengan tenaga ahli
                    </small>
                  </p>
                </div>
              </div>

              <div className="col">
                <div className="border-0 text-center d-flex flex-column align-items-center">
                  <div
                    className="d-flex align-items-center justify-content-center mb-3"
                    style={{
                      backgroundColor: "#E1C010",
                      width: "60px",
                      height: "60px",
                      borderRadius: "50%",
                    }}
                  >
                    <FaHome size={28} color="#003F98" />
                  </div>

                  <h5 className="text-light">Sit Back & Wait for Us</h5>
                  <p className="text-light flex-grow-1">
                    <small>
                      Custom Karoseri akan datang ke anda sesuai jadwal dan
                      waktu yang ditentukan.
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container col-xxl-10 py-5">
          <div className="row flex-lg-row-reverse align-items-center g-5">
            {/* Gambar */}
            <div className="col-8 col-sm-6 col-lg-6">
              <img
                src={image2}
                className="d-block mx-auto img-fluid rounded"
                alt="Tentang Karya Baja Estetika"
                width="700"
                height="500"
                loading="lazy"
              />
            </div>

            {/* Konten */}
            <div className="col-lg-6 text-start">
              <h1 className="fw-bold text-body-emphasis lh-1 mb-4">
                Dapatkan Informasi & Promo
              </h1>
              <p>
                Daftar menjadi mailing list kami dan dapatkan informasi terbaru
                terkait layanan yang ada dan informasi seputar custom karoseri
                di Karya Baja Estetika serta dapatkan info promo menarik.
              </p>
              <form>
                <div className="row g-3">
                  <div className="col-md-4">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Masukkan nama"
                    />
                  </div>
                  <div className="col-md-4">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Masukkan email"
                    />
                  </div>
                  <div className="col-md-4">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Masukkan email"
                    />
                  </div>
                </div>
                <div className="mt-3">
                  <label className="form-label">Pesan</label>
                  <textarea
                    className="form-control"
                    rows="4"
                    placeholder="Tulis pesan Anda"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="btn mt-3"
                  style={{ backgroundColor: "#092043", color: "white" }}
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>

        <div
          className="container-fluid px-4 py-5"
          style={{ backgroundColor: "#F2F7FA" }}
        >
          <div className="row align-items-center g-4">
            {/* Konten Testimoni */}
            <div className="col-12 col-lg-6 text-start">
              <h2 className="fw-bold mb-4" style={{ color: "#003D92" }}>
                Apa Kata Client Kami
              </h2>
              <p className="text-muted">
                CV. KARYA BAJA ESTETIKA telah memberikan layanan berkualitas
                tinggi kepada berbagai pelanggan dengan kepuasan yang luar
                biasa.
              </p>

              <div
                id="carouselExampleIndicators"
                className="carousel slide"
                data-bs-ride="carousel"
                data-bs-interval="3000" // Auto-slide setiap 3 detik
              >
                {/* Indicator */}
                <div className="carousel-indicators">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      type="button"
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide-to={index}
                      className={index === activeIndex ? "active" : ""}
                      aria-current={index === activeIndex ? "true" : "false"}
                      aria-label={`Slide ${index + 1}`}
                      style={{
                        backgroundColor:
                          index === activeIndex ? "#003D92" : "gray",
                        width: "10px",
                        height: "10px",
                        borderRadius: "50%",
                        opacity: 1,
                      }}
                    ></button>
                  ))}
                </div>

                {/* Inner Carousel */}
                <div className="carousel-inner">
                  {testimonials.map((testimonial, index) => (
                    <div
                      key={index}
                      className={`carousel-item ${
                        index === activeIndex ? "active" : ""
                      }`}
                    >
                      <div className="card border-0 shadow-sm p-4">
                        <FaQuoteLeft
                          size={30}
                          color="#003D92"
                          className="mb-3"
                        />
                        <p className="card-text text-muted">
                          {testimonial.message}
                        </p>
                        <div className="d-flex align-items-center mt-3">
                          <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="rounded-circle me-3"
                            width="50"
                            height="50"
                          />
                          <div>
                            <h6 className="mb-0 fw-bold">{testimonial.name}</h6>
                            <small className="text-muted">
                              {testimonial.company}
                            </small>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Navigasi */}
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
                </button>
              </div>
            </div>

            {/* Gambar Samping */}
            <div className="col-12 col-lg-6 text-center">
              <img
                src={image6}
                className="img-fluid rounded shadow"
                alt="Testimoni"
                width="600"
                height="400"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        <div className="container-fluid pt-4">
          <div className="row p-0 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3">
            <div className="col-12 col-lg-6 text-center text-lg-start mb-4 mb-lg-0 p-0">
              <img
                className="img-fluid w-100"
                style={{ height: "100%", objectFit: "cover", display: "block" }}
                src={image3}
                alt=""
              />
            </div>

            <div className="col-12 col-lg-6 p-lg-5 pt-lg-3 text-center text-lg-start">
              <h1 className="fw-bold lh-1 mb-3" style={{ color: "#092043" }}>
                5 Alasan Utama Kenapa <br /> Karya Baja Estetika menjadi <br />
                Partner Karoseri Anda
              </h1>

              <ul className="list-unstyled ps-0">
                <li className="mb-2 d-flex align-items-center">
                  <FaCheck
                    size={12}
                    className="me-2"
                    style={{ color: "#00D46E" }}
                  />
                  Konsultasi terkait kebutuhan dan keinginan secara
                  komprehensif.
                </li>
                <li className="mb-2 d-flex align-items-center">
                  <FaCheck
                    size={12}
                    className="me-2"
                    style={{ color: "#00D46E" }}
                  />
                  SDM dan Alat Produksi yang berkualitas dan berpengalaman.
                </li>
                <li className="mb-2 d-flex align-items-center">
                  <FaCheck
                    size={12}
                    className="me-2"
                    style={{ color: "#00D46E" }}
                  />
                  Hasil dan Kualitas product yang sudah diakui oleh konsumen
                  baik luar dan dalam negeri.
                </li>
                <li className="mb-2 d-flex align-items-center">
                  <FaCheck
                    size={12}
                    className="me-2"
                    style={{ color: "#00D46E" }}
                  />
                  Memliki lebih dari 10 Tahun Pengalaman di bidang karoseri.
                </li>
                <li className="mb-2 d-flex align-items-center">
                  <FaCheck
                    size={12}
                    className="me-2"
                    style={{ color: "#00D46E" }}
                  />
                  Layanan service dan jaminan mutu yang terpercaya
                </li>
              </ul>

              <div className="d-grid d-md-flex justify-content-md-start">
                <button
                  type="button"
                  className="btn btn-sm px-4 py-2"
                  style={{ backgroundColor: "#092043", color: "white" }}
                >
                  Hubungi Sekarang{" "}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default IndexProduct;
