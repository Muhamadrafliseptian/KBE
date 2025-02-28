import React, { Component } from "react";
import image3 from "../../assets/images/image-3.png";
import image5 from "../../assets/images/image-5.png";
import image6 from "../../assets/images/image-5.jpg";
import {
  FaPhone,
  FaCalendar,
  FaCalendarAlt,
  FaCheck,
  FaQuoteLeft,
} from "react-icons/fa";
import product4 from "../../assets/images/product-4.png";
import product5 from "../../assets/images/product-5.png";
import ava1 from "../../assets/images/ava-1.png";
import Tentang from "../../assets/images/tentang-kami.png";
export class IndexAbout extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
  render() {
    const { testimonials } = this.state;
    return (
      <div>
        <div
          style={{
            backgroundImage: `url(${Tentang})`,
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
            Tentang Kami
          </h1>
        </div>

        <div className="container col-xxl-10 px-4 py-5">
          <div className="row flex-lg-row-reverse align-items-center g-5">
            {/* Gambar */}
            <div className="col-12 col-sm-8 col-lg-6">
              <img
                src={product4}
                className="d-block mx-auto img-fluid rounded"
                alt="Tentang Karya Baja Estetika"
                width="700"
                height="500"
                loading="lazy"
              />
            </div>

            {/* Konten */}
            <div className="col-lg-6 text-start">
              <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-4">
                Tentang <br /> Karya Baja Estetika
              </h1>
              <p>
                CV. KARYA BAJA ESTETIKA adalah Perusahaan swasta yang bergerak
                di bidang industri karoseri modifikasi kendaraan roda empat atau
                lebih, yang memiliki kemampuan untuk memenuhi kebutuhan
                perusahaan-perusahaan swasta dan pemerintahan dalam pengadaan
                kendaraan yang membutuhkan perhatian dengan spesifikasi khusus.
              </p>

              {/* Informasi Kontak */}
              <div className="d-flex align-items-center mt-4">
                <FaPhone color="#003D92" size={18} className="me-2" />
                <h5 className="mb-0" style={{ color: "#003D92" }}>
                  202-555-0105
                </h5>
              </div>
            </div>
          </div>
        </div>

        <div className="container col-xxl-10 px-4 py-5">
          <div className="row flex-lg-row-reverse align-items-center g-4">
            {/* Konten */}
            <div className="col-12 col-lg-6 text-start">
              <h4 className="fw-bold mb-3" style={{ color: "#003D92" }}>
                Karoseri terbaik dengan tingkat detail tinggi
              </h4>
              <p>
                CV. KARYA BAJA ESTETIKA adalah badan usaha bentuk baru dari
                tenaga profesional di bidang modifikasi karoseri kendaraan roda
                empat atau lebih dengan tata kelola manajemen yang kuat dan
                solid serta sudah berpengalaman baik di bidang produksi maupun
                pemasaran.
              </p>

              {/* Tombol */}
              <div className="d-grid d-md-flex justify-content-md-start">
                <button
                  type="button"
                  className="btn btn-sm px-4 py-2 d-flex align-items-center"
                  style={{ backgroundColor: "#003D92", color: "white" }}
                >
                  <FaCalendarAlt size={16} color="white" className="me-2" />
                  Buat Temu Janji
                </button>
              </div>
            </div>

            {/* Gambar */}
            <div className="col-12 col-sm-8 col-lg-6">
              <img
                src={product5}
                className="d-block mx-auto img-fluid rounded"
                alt="Karoseri Detail Tinggi"
                width="700"
                height="500"
                loading="lazy"
              />
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

              {/* Carousel Testimoni */}
              <div
                id="testimonialCarousel"
                className="carousel slide"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner">
                  {testimonials.map((testimonial, index) => (
                    <div
                      key={index}
                      className={`carousel-item ${index === 0 ? "active" : ""}`}
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
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#testimonialCarousel"
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
                  data-bs-target="#testimonialCarousel"
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
                src={image3}
                alt=""
                style={{ height: "100%", objectFit: "cover", display: "block" }}
              />
            </div>

            <div className="col-12 col-lg-6 p-lg-5 pt-lg-3 text-center text-lg-start">
              <h1 className="fw-bold lh-1 mb-3" style={{ color: "#092043" }}>
                5 Alasan Utama Kenapa <br /> Karya Baja Estetika menjadi <br />
                Partner Karoseri Anda
              </h1>

              <ul className="list-unstyled ps-0 text-start">
                <li className="mb-2 d-flex align-items-center">
                  <FaCheck
                    size={12}
                    className="me-2"
                    style={{ color: "#00D46E" }}
                  />
                  Tim kami terlatih dengan baik dan memiliki pengalaman luas
                  dalam bidangnya.
                </li>
                <li className="mb-2 d-flex align-items-center">
                  <FaCheck
                    size={12}
                    className="me-2"
                    style={{ color: "#00D46E" }}
                  />
                  Solusi yang disesuaikan untuk memastikan kenyamanan tempat
                  kerja Anda.{" "}
                </li>
                <li className="mb-2 d-flex align-items-center">
                  <FaCheck
                    size={12}
                    className="me-2"
                    style={{ color: "#00D46E" }}
                  />
                  Meningkatkan semangat kerja dengan lingkungan yang lebih
                  bersih dan ramah lingkungan.
                </li>
                <li className="mb-2 d-flex align-items-center">
                  <FaCheck
                    size={12}
                    className="me-2"
                    style={{ color: "#00D46E" }}
                  />
                  Energi positif di kantor menghasilkan karyawan yang lebih
                  bahagia dan pelanggan yang puas.{" "}
                </li>
                <li className="mb-2 d-flex align-items-center">
                  <FaCheck
                    size={12}
                    className="me-2"
                    style={{ color: "#00D46E" }}
                  />
                  Pengalaman lebih dari 15 tahun dengan jaminan uang kembali
                  tanpa syarat.{" "}
                </li>
              </ul>

              <div className="d-grid d-md-flex justify-content-md-start">
                <button
                  type="button"
                  className="btn btn-sm px-4 py-2 d-flex align-items-center justify-content-center"
                  style={{ backgroundColor: "#003D92", color: "white" }}
                >
                  <FaPhone size={16} color="white" className="me-2" />
                  Hubungi Sekarang
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default IndexAbout;
