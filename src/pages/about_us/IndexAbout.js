import React, { Component } from "react";
import image2 from "../../assets/images/image-2.png";
import image3 from "../../assets/images/image-3.png";
import image5 from "../../assets/images/image-5.png";
import { FaPhone } from "react-icons/fa";

export class IndexAbout extends Component {
  render() {
    return (
      <div>
        <div
          style={{
            backgroundImage: `url(${image5})`,
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
                  className="btn btn-sm px-4"
                  style={{ backgroundColor: "#003D92", color: "white" }}
                >
                  Buat Temu Janji
                </button>
              </div>
            </div>

            {/* Gambar */}
            <div className="col-12 col-sm-8 col-lg-6">
              <img
                src={image3}
                className="d-block mx-auto img-fluid rounded"
                alt="Karoseri Detail Tinggi"
                width="700"
                height="500"
                loading="lazy"
              />
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
                  Tim kami terlatih dengan baik dan memiliki pengalaman luas
                  dalam bidangnya.
                </li>
                <li className="mb-2">
                  Solusi yang disesuaikan untuk memastikan kenyamanan tempat
                  kerja Anda.
                </li>
                <li className="mb-2">
                  Meningkatkan semangat kerja dengan lingkungan yang lebih
                  bersih dan ramah lingkungan.
                </li>
                <li className="mb-2">
                  Energi positif di kantor menghasilkan karyawan yang lebih
                  bahagia dan pelanggan yang puas.
                </li>
                <li className="mb-2">
                  Pengalaman lebih dari 15 tahun dengan jaminan uang kembali
                  tanpa syarat.
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

export default IndexAbout;
