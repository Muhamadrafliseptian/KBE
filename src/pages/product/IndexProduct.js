import React, { Component } from "react";
import image2 from "../../assets/images/image-2.png";
import image3 from "../../assets/images/image-3.png";
import brand1 from "../../assets/images/brand-1.png";
import brand2 from "../../assets/images/brand-2.png";
import brand3 from "../../assets/images/brand-3.png";
import brand4 from "../../assets/images/brand-4.png";
import brand5 from "../../assets/images/brand-5.png";
import { FaPhone, FaArrowRight } from "react-icons/fa";
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
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
            <div className="col">
              <div
                className="card border-0 h-100"
                style={{ boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)" }}
              >
                <img src={image2} className="card-img-top" alt="..." />
                <div className="card-body text-start d-flex flex-column">
                  <h5 className="card-title">Bus Services</h5>
                  <p className="card-text flex-grow-1">
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
            <div className="col">
              <div
                className="card border-0 h-100"
                style={{ boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)" }}
              >
                <img src={image2} className="card-img-top" alt="..." />
                <div className="card-body text-start d-flex flex-column">
                  <h5 className="card-title">Custom Services</h5>
                  <p className="card-text flex-grow-1">
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
            <div className="col">
              <div
                className="card border-0 h-100"
                style={{ boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)" }}
              >
                <img src={image2} className="card-img-top" alt="..." />
                <div className="card-body text-start d-flex flex-column">
                  <h5 className="card-title">Electrical Services</h5>
                  <p className="card-text flex-grow-1">
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

            <div className="col">
              <div
                className="card border-0 h-100"
                style={{ boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)" }}
              >
                <img src={image2} className="card-img-top" alt="..." />
                <div className="card-body text-start d-flex flex-column">
                  <h5 className="card-title">Caravan Services</h5>
                  <p className="card-text flex-grow-1">
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
            <div className="col">
              <div
                className="card border-0 h-100"
                style={{ boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)" }}
              >
                <img src={image2} className="card-img-top" alt="..." />
                <div className="card-body text-start d-flex flex-column">
                  <h5 className="card-title">Car Services</h5>
                  <p className="card-text flex-grow-1">
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
            <div className="col">
              <div
                className="card border-0 h-100"
                style={{ boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)" }}
              >
                <img src={image2} className="card-img-top" alt="..." />
                <div className="card-body text-start d-flex flex-column">
                  <h5 className="card-title">Lub Services</h5>
                  <p className="card-text flex-grow-1">
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

        <div className="container col-xxl-10 px-4 py-5">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5 g-4">
            <div className="col">
              <div className="card border-0 overflow-hidden ">
                <img src={brand1} className="card-img-top img-fluid" />
              </div>
            </div>

            <div className="col">
              <div className="card border-0 overflow-hidden ">
                <img src={brand2} className="card-img-top img-fluid" />
              </div>
            </div>

            <div className="col">
              <div className="card border-0 overflow-hidden ">
                <img src={brand3} className="card-img-top img-fluid" />
              </div>
            </div>

            <div className="col">
              <div className="card border-0 overflow-hidden ">
                <img src={brand4} className="card-img-top img-fluid" />
              </div>
            </div>

            <div className="col">
              <div className="card border-0 overflow-hidden ">
                <img src={brand5} className="card-img-top img-fluid" />
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

              <ul className="ps-2">
                <li className="mb-2">
                  Konsultasi terkait kebutuhan dan keinginan secara
                  komprehensif.
                </li>
                <li className="mb-2">
                  SDM dan Alat Produksi yang berkualitas dan berpengalaman.
                </li>
                <li className="mb-2">
                  Hasil dan Kualitas product yang sudah diakui oleh konsumen
                  baik luar dan dalam negeri.
                </li>
                <li className="mb-2">
                  Memliki lebih dari 10 Tahun Pengalaman di bidang karoseri.
                </li>
                <li className="mb-2">
                  Layanan service dan jaminan mutu yang terpercaya
                </li>
              </ul>

              <div className="d-grid d-md-flex justify-content-md-start">
                <button
                  type="button"
                  className="btn btn-sm px-4"
                  style={{ backgroundColor: "#003D92", color: "white" }}
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
