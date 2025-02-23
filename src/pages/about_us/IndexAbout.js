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
              <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-5">
                Tentang <br></br>Karya Baja Estetika
              </h1>
              <p>
                CV. KARYA BAJA ESTETIKA adalah Perusahaan swasta yang bergerak
                dibidang industri karoseri modifikasi kendaraan roda empat atau
                lebih, yang memiliki kemampuan untuk memenuhi kebutuhan
                perusahaan-perusahaan swasta dan pemerintahan dalam pengadaan
                kendaraan yang membutuhkan perhatian dengan spesifikasi khusus.
              </p>
              <div className="row">
                <div className="d-flex">
                  <FaPhone color="#003D92" size={18} className="mt-1 me-3" />
                  <h5 style={{ color: "#003D92" }}>202-555-0105</h5>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container col-xxl-10 px-4 py-1">
          <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
            <div className="col-lg-6 text-start">
              <h4 className="fw-bold mb-3" style={{ color: "#003D92" }}>
                Karoseri terbaik dengan tingkat detail tinggi
              </h4>
              <p>
                CV. KARYA BAJA ESTETIKA adalah badan usaha bentuk baru dari
                tenaga profesional dibidang modifikasi karoseri kendaraan roda
                empat atau lebih dengan tata kelola manajemen yang kuat dan
                solid serta sudah berpengalaman baik dibidang produksi maupun
                pemasaran.
              </p>

              <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                <button
                  type="button"
                  className="btn btn-sm px-4 me-md-2"
                  style={{ backgroundColor: "#003D92", color: "white" }}
                >
                  Buat Temu Janji
                </button>
              </div>
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

        <div className="row p-0 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3">
          <div className="col-lg-4 overflow-hidden">
            <img className="rounded-lg-5" src={image3} alt="" />
          </div>

          <div className="col-lg-8 p-3 p-lg-5 pt-lg-3 text-start">
            <h1 className="fw-bold lh-1 mb-5" style={{ color: "#092043" }}>
              5 Alasan Utama Kenapa <br /> Karya Baja Estetika menjadi <br />
              Partner Karoseri Anda
            </h1>
            <ul>
              <li className="mb-3">
                Our cleaning team is not only trained properly, but the team is
                also highly experienced and skilled in their jobs.
              </li>
              <li className="mb-3">
                Customized solutions to make your workplace comfortable to work
                in.
              </li>
              <li className="mb-3">
                Hiring a professional office cleaning service is that it helps
                to boost the morale of your employees by enabling them to work
                in an eco-friendly environment.
              </li>
              <li className="mb-3">
                Professional office cleaners can create a positive energy
                throughout the office that translates into happier employees and
                ultimately, happier customers.
              </li>
              <li className="mb-3">
                We have 15 years of experience with money guarantee, no question
                asked.
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default IndexAbout;
