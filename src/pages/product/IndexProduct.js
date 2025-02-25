import React, { Component } from "react";
import image2 from "../../assets/images/image-2.png";
import image3 from "../../assets/images/image-3.png";
import image4 from "../../assets/images/image-4.png";
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
import {
  FaPhone,
  FaArrowRight,
  FaCheck,
  FaCalendarAlt,
  FaHome,
  FaLayerGroup
} from "react-icons/fa";
export class IndexProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: [{}],
    };
  }
  render() {
    return (
      <div>
        <div
          style={{
            backgroundImage: `url(${image2})`,
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
              Karya Baja Estetika Berita & Update
            </h1>
            <p className="text-muted">
              Tetap up-to-date dengan berita terbaru kami
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
          <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 align-items-center row-cols-lg-6 row-cols-xl-8 g-3">
            {[brand1, brand2, brand3, brand4, brand5, brand6].map(
              (brand, index) => (
                <div className="col" key={index}>
                  <div className="card border-0 overflow-hidden">
                    <img
                      src={brand}
                      className="card-img-top img-fluid w-75 h-75"
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
              Pellentesque nec nam aliquam sem et tortor consequat. Amet
              venenatis urna cursus eget nunc scelerisque viverra mauris. Tellus
              in hac habitasse platea dictumst.
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
                      Liquam ultrices sagittis orci a scelerisque purus semper
                      eget duis. Augue ut lectus arcu.
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
                      Liquam ultrices sagittis orci a scelerisque purus semper
                      eget duis. Augue ut lectus arcu.
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
                      Liquam ultrices sagittis orci a scelerisque purus semper
                      eget duis. Augue ut lectus arcu.
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container col-xxl-10">
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
                Diam diam sem donec duis id feugiat tempus leo ut ac amet cras
                ac sapien enim platea maurisel non aliquam mattis aliquet fames
                mauris diam diam sem donec duis.
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

        <div className="my-1">
          <div className="row p-0 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3">
            <div className="col-12 col-lg-6 overflow-hidden text-center text-lg-start">
              <img
                className="rounded-lg-5 img-fluid w-100 h-100"
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
