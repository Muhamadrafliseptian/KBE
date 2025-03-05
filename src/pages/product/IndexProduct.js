import React, { Component } from "react";
import image2 from "../../assets/images/image-2.png";
import image3 from "../../assets/images/image-3.png";
import image4 from "../../assets/images/image-4.png";
import image6 from "../../assets/images/image-5.jpg";
import ava1 from "../../assets/images/ava-1.png";
import ava2 from "../../assets/images/ava2.jpeg";
import ava3 from "../../assets/images/ava4.jpeg";
import ava5 from "../../assets/images/ava5.png";
import brand1 from "../../assets/images/brand-1.png";
import brand2 from "../../assets/images/brand-2.png";
import brand3 from "../../assets/images/brand-3.png";
import brand4 from "../../assets/images/brand-4.png";
import brand5 from "../../assets/images/brand-5.png";
import brand6 from "../../assets/images/brand-6.png";

import product from "../../assets/images/product.png";
import product1 from "../../assets/images/product-1.png";
import product2 from "../../assets/images/product-2.png";
import product3 from "../../assets/images/product-3.png";
import product4 from "../../assets/images/product-4.png";
import product5 from "../../assets/images/product-5.png";
import product6 from "../../assets/images/product-6.png";
import product7 from "../../assets/images/product-7.png";
import product8 from "../../assets/images/product-8.png";
import product9 from "../../assets/images/product-9.png";
import product10 from "../../assets/images/product-10.png";
import product11 from "../../assets/images/product-11.png";
import product12 from "../../assets/images/product-12.png";
import product13 from "../../assets/images/product-13.png";
import produk from "../../assets/images/layanan.png";
import {
  FaPhone,
  FaArrowRight,
  FaCheck,
  FaCalendarAlt,
  FaHome,
  FaLayerGroup,
  FaQuoteLeft,
  FaStar,
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
          name: "Devandra",
          company: "CV. Sentosa Abadi",
          message:
            "Sangat profesional dan tepat waktu. Pasti akan kembali untuk pesanan berikutnya!",
          image: ava2, // Ganti dengan foto asli
        },
        {
          name: "Ahmad Fauzi",
          company: "UD. Sumber Makmur",
          message:
            "Hasil kerja rapi dan kuat. Sangat direkomendasikan untuk kebutuhan industri baja.",
          image: ava5, // Ganti dengan foto asli
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

  handleWhatsAppRedirect = () => {
    window.location.href =
      "https://wa.me/6285892818888?text=Halo Karya Baja Estetika, Saya tertarik dengan layanan anda. dan ingin mendiskusikan nya";
  };
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
                  <img src={product} className="card-img-top" alt="..." />
                  <div className="card-body text-center d-flex flex-column">
                    <h5 className="card-title text-color">
                      Bus Medium, Bus Micro
                    </h5>
                    <p className="card-text flex-grow-1">
                      <small>
                        Merancang dan memproduksi bus berukuran medium dengan
                        desain ergonomis dan fitur lengkap, ideal untuk
                        transportasi penumpang
                      </small>
                    </p>
                    <div className="d-grid d-md-flex justify-content-md-center">
                      <button
                        onClick={this.handleWhatsAppRedirect}
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
                  <div className="card-body text-center d-flex flex-column">
                    <h5 className="card-title text-color">Caravan</h5>
                    <p className="card-text flex-grow-1">
                      <small>
                        Menyediakan mobil caravan dengan interior nyaman dan
                        fasilitas lengkap, cocok untuk perjalanan jarak jauh
                        atau liburan keluarga.
                      </small>
                    </p>
                    <div className="d-grid d-md-flex justify-content-md-center">
                      <button
                        onClick={this.handleWhatsAppRedirect}
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
                  <div className="card-body text-center d-flex flex-column">
                    <h5 className="card-title text-color">
                      Electrical Vehicle
                    </h5>
                    <p className="card-text flex-grow-1">
                      <small>
                        Mengembangkan kendaraan listrik ramah lingkungan dengan
                        teknologi mutakhir, mendukung mobilitas berkelanjutan.
                      </small>
                    </p>
                    <div className="d-grid d-md-flex justify-content-md-center">
                      <button
                        onClick={this.handleWhatsAppRedirect}
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
                  <div className="card-body text-center d-flex flex-column">
                    <h5 className="card-title text-color">
                      Lube Service Truck
                    </h5>
                    <p className="card-text flex-grow-1">
                      <small>
                        Layanan karoseri dan perawatan kendaraan, termasuk
                        pelumasan, untuk menjaga performa dan keawetan
                        kendaraan.
                      </small>
                    </p>
                    <div className="d-grid d-md-flex justify-content-md-center">
                      <button
                        onClick={this.handleWhatsAppRedirect}
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
                  <div className="card-body text-center d-flex flex-column">
                    <h5 className="card-title text-color">Manhouler</h5>
                    <p className="card-text flex-grow-1">
                      <small>
                        Merancang kendaraan khusus untuk inspeksi dan perawatan
                        manhole atau akses bawah tanah, dilengkapi peralatan
                        pendukung.
                      </small>
                    </p>
                    <div className="d-grid d-md-flex justify-content-md-center">
                      <button
                        onClick={this.handleWhatsAppRedirect}
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
                  <div className="card-body text-center d-flex flex-column">
                    <h5 className="card-title text-color">
                      Mobil Angkut Personil
                    </h5>
                    <p className="card-text flex-grow-1">
                      <small>
                        Kendaraan dirancang khusus untuk mengangkut personil
                        dengan aman dan nyaman, cocok untuk keperluan korporat
                        atau proyek.
                      </small>
                    </p>
                    <div className="d-grid d-md-flex justify-content-md-center">
                      <button
                        onClick={this.handleWhatsAppRedirect}
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
                  <img src={product6} className="card-img-top" alt="..." />
                  <div className="card-body text-center d-flex flex-column">
                    <h5 className="card-title text-color">Mobil Dapur Umum</h5>
                    <p className="card-text flex-grow-1">
                      <small>
                        Mobil dapur umum dengan peralatan memasak lengkap, siap
                        mendukung acara besar atau kondisi darurat.
                      </small>
                    </p>
                    <div className="d-grid d-md-flex justify-content-md-center">
                      <button
                        onClick={this.handleWhatsAppRedirect}
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
                  <img src={product7} className="card-img-top" alt="..." />
                  <div className="card-body text-center d-flex flex-column">
                    <h5 className="card-title text-color">Mobil Hobby</h5>
                    <p className="card-text flex-grow-1">
                      <small>
                        Kendaraan khusus untuk kebutuhan hobi, seperti mobil
                        off-road atau ekspedisi, dengan desain tangguh dan
                        fungsional.
                      </small>
                    </p>
                    <div className="d-grid d-md-flex justify-content-md-center">
                      <button
                        onClick={this.handleWhatsAppRedirect}
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
                  <img src={product8} className="card-img-top" alt="..." />
                  <div className="card-body text-center d-flex flex-column">
                    <h5 className="card-title text-color">
                      Mobil Pelayanan Kesehatan{" "}
                    </h5>
                    <p className="card-text flex-grow-1">
                      <small>
                        Mobil pelayanan kesehatan dilengkapi peralatan medis,
                        siap memberikan layanan kesehatan darurat atau mobile
                        clinic.
                      </small>
                    </p>
                    <div className="d-grid d-md-flex justify-content-md-center">
                      <button
                        onClick={this.handleWhatsAppRedirect}
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
                  <img src={product9} className="card-img-top" alt="..." />
                  <div className="card-body text-center d-flex flex-column">
                    <h5 className="card-title text-color">
                      Mobil Pelayanan Masyarakat
                    </h5>
                    <p className="card-text flex-grow-1">
                      <small>
                        Kendaraan dirancang untuk layanan masyarakat, seperti
                        mobil perpustakaan keliling atau layanan sosial,
                        mendukung program komunitas.
                      </small>
                    </p>
                    <div className="d-grid d-md-flex justify-content-md-center">
                      <button
                        onClick={this.handleWhatsAppRedirect}
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
                  <img src={product10} className="card-img-top" alt="..." />
                  <div className="card-body text-center d-flex flex-column">
                    <h5 className="card-title text-color">
                      Mobil Pelayanan Niaga
                    </h5>
                    <p className="card-text flex-grow-1">
                      <small>
                        Mobil niaga dengan desain khusus untuk keperluan bisnis,
                        seperti mobil toko keliling atau promosi produk.
                      </small>
                    </p>
                    <div className="d-grid d-md-flex justify-content-md-center">
                      <button
                        onClick={this.handleWhatsAppRedirect}
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
                  <img src={product11} className="card-img-top" alt="..." />
                  <div className="card-body text-center d-flex flex-column">
                    <h5 className="card-title text-color">Mobil TNI/Polri </h5>
                    <p className="card-text flex-grow-1">
                      <small>
                        Kendaraan operasional khusus untuk kebutuhan TNI/Polri,
                        dirancang dengan spesifikasi tinggi dan ketahanan
                        ekstra.
                      </small>
                    </p>
                    <div className="d-grid d-md-flex justify-content-md-center">
                      <button
                        onClick={this.handleWhatsAppRedirect}
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
                  <img src={product12} className="card-img-top" alt="..." />
                  <div className="card-body text-center d-flex flex-column">
                    <h5 className="card-title text-color">Mobil Toilet</h5>
                    <p className="card-text flex-grow-1">
                      <small>
                        Mobil toilet dengan fasilitas sanitasi lengkap, ideal
                        untuk acara outdoor atau lokasi terpencil, yang dapat
                        dikustom sesuai kebutuhan.
                      </small>
                    </p>
                    <div className="d-grid d-md-flex justify-content-md-center">
                      <button
                        onClick={this.handleWhatsAppRedirect}
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
                  <img src={product13} className="card-img-top" alt="..." />
                  <div className="card-body text-center d-flex flex-column">
                    <h5 className="card-title text-color">Mobil Moko</h5>
                    <p className="card-text flex-grow-1">
                      <small>
                        Kendaraan komersial serbaguna untuk angkutan barang atau
                        penumpang, dengan desain praktis dan efisien.
                      </small>
                    </p>
                    <div className="d-grid d-md-flex justify-content-md-center">
                      <button
                        onClick={this.handleWhatsAppRedirect}
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
                      placeholder="Name"
                    />
                  </div>
                  <div className="col-md-4">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email Address"
                    />
                  </div>
                  <div className="col-md-4">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Phone"
                    />
                  </div>
                </div>
                <div className="mt-3">
                  <textarea
                    className="form-control"
                    rows="4"
                    placeholder="Message"
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
          <div className="">
            <p className="text-center mb-3" style={{ color: "#003D92" }}>
              TESTIMONIALS
            </p>
            <h1
              className="text-center fw-bold mb-4"
              style={{ color: "#003D92" }}
            >
              Review Nyata dari User <br /> Karya Baja Estetika
            </h1>
          </div>
          <div className="container col-xxl-10">
            <div className="row row-cols-1 row-cols-sm-3 row-cols-lg-3 g-4">
              {[
                {
                  name: "Niko - Owner",
                  review:
                    "Puas banget dengan pelayanan KBE, sekarang saya sudah ada 3 Unit mobil Food Truck dan awet serta jadi andalan sampai saat ini",
                  image: ava3,
                },
                {
                  name: "Ananda Lee - Business Man",
                  review:
                    "Gak diraguin untuk hasil kerja tim KBE, konsultasi, diskusi menjadi hal yang asyik sampai pada akhirnya mobil caravan ku jadi sesuai ekspektasi. thanks KBE",
                  image: ava5,
                },
                {
                  name: "Andi Silitonga - Traveller",
                  review:
                    "Alhamdulillah, sangat puas dengan pelayanan dan hasil kerja Medium bus yang kami pesan dibuat dengan detail dan presisi sesuai kebutuhan kami.",
                  image: ava1,
                },
              ].map((testimonial, index) => (
                <div className="col" key={index}>
                  <div className="card border-0 shadow-sm h-100 custom-card">
                    <div className="card-body text-start">
                      <div className="pb-5 star-container">
                        <FaStar size={20} className="custom-star" />
                        <FaStar size={20} className="custom-star" />
                        <FaStar size={20} className="custom-star" />
                        <FaStar size={20} className="custom-star" />
                        <FaStar size={20} className="custom-star" />
                      </div>
                      <p className="card-text custom-text pb-3">
                        "{testimonial.review}"
                      </p>
                      <h5 className="fw-bold custom-text pb-2">
                        {testimonial.name}
                      </h5>
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="img-fluid rounded mt-2"
                        style={{
                          width: "80px",
                          height: "80px",
                          objectFit: "cover",
                        }}
                      />
                    </div>
                  </div>
                </div>
              ))}
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
                  onClick={this.handleWhatsAppRedirect}
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
