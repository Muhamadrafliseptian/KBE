import React, { Component } from "react";
import image2 from "../../assets/images/image-2.png";
import image3 from "../../assets/images/image-3.png";
import image5 from "../../assets/images/image-5.png";
import { FaPhone } from "react-icons/fa";

export class IndexNews extends Component {
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
            Berita & Update
          </h1>
        </div>

        <div className="container-fluid px-4 py-5">
          {/* Judul */}
          <div className="text-center mb-4">
            <h1 className="fw-bold" style={{ color: "#092043" }}>
              Karya Baja Estetika Berita & Update
            </h1>
            <p className="text-muted">
              Tetap up-to-date dengan berita terbaru kami
            </p>
          </div>

          {/* Grid Berita */}
          <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4">
            {[...Array(6)].map((_, index) => (
              <div className="col" key={index}>
                <div className="card border-0 shadow-sm h-100">
                  <img src={image2} className="card-img-top" alt="Berita" />
                  <div className="card-body text-start">
                    <h5 className="card-title">Judul Berita {index + 1}</h5>
                    <p className="card-text text-muted">
                      Ini adalah deskripsi singkat dari berita terbaru kami.
                      Klik untuk membaca lebih lanjut.
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default IndexNews;
