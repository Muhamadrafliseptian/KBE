import React, { Component } from "react";
import image2 from "../../assets/images/image-2.png";
import image3 from "../../assets/images/image-3.png";
import image5 from "../../assets/images/image-5.png";

import news5 from "../../assets/images/news-5.png";
import news6 from "../../assets/images/news-6.png";
import news7 from "../../assets/images/news-7.png";
import news8 from "../../assets/images/news-8.png";
import news9 from "../../assets/images/news-9.png";
import news10 from "../../assets/images/news-10.png";
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

        <div className="container col-xxl-10 px-4 py-5">
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
          <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-2 g-4">
            <div className="col">
              <div className="card border-0 shadow-sm h-100">
                <img src={news10} className="card-img-top" alt="Berita" />
                <div className="card-body text-start">
                  <h4 className="card-title text-color">
                    Van Day, Ajang Kumpul Modifikasi Mobil Keluarga di Indonesia{" "}
                  </h4>
                  <p className="card-text" style={{ color: "#5C6776" }}>
                    <small>
                      John Doe - January 15, 2021 - 0 Comments - Healthy
                    </small>
                  </p>
                  <p className="card-text text-muted">
                    <small>
                      Tak hanya mobil bergenre city car, sedan, hatchback, atau
                      SUV, modifikasi di segmen mobil keluarga alias multi
                      purpose vehicle (MPV) juga banyak penggemarnya. Tak heran
                      bila ada nama Vankulture (VK) Indonesia yang merupakan
                      kumpulan penggemar.
                    </small>
                  </p>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card border-0 shadow-sm h-100">
                <img src={news9} className="card-img-top" alt="Berita" />
                <div className="card-body text-start">
                  <h4 className="card-title text-color">
                    Design is as much an act of spacing as an act of marking
                  </h4>
                  <p className="card-text" style={{ color: "#5C6776" }}>
                    <small>
                      John Doe - January 15, 2021 - 0 Comments - Healthy
                    </small>
                  </p>
                  <p className="card-text text-muted">
                    <small>
                      Daihatsu Zebra Espass merupakan mobil pintu geser yang
                      cukup legendaris di Indonesia. Seorang pensiunan Dinas
                      Sosial Provinsi Jawa Barat, Yoga Mulyantono (62) kepincut
                      mengubah MPV ini jadi campervan.
                    </small>
                  </p>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card border-0 shadow-sm h-100">
                <img src={news8} className="card-img-top" alt="Berita" />
                <div className="card-body text-start">
                  <h4 className="card-title text-color">
                    Apa Itu Karoseri? Berikut Penjelasannya{" "}
                  </h4>
                  <p className="card-text" style={{ color: "#5C6776" }}>
                    <small>
                      John Doe - January 15, 2021 - 0 Comments - Healthy
                    </small>
                  </p>
                  <p className="card-text text-muted">
                    <small>
                      Bagi para penggemar otomotif, mobil karoseri memang selalu
                      menarik untuk diperbincangkan. Tak hanya soal performa
                      mesin yang tangguh, desain karoseri mobil juga menjadi
                      faktor penting yang tak boleh diabaikan. 
                    </small>
                  </p>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card border-0 shadow-sm h-100">
                <img src={news7} className="card-img-top" alt="Berita" />
                <div className="card-body text-start">
                  <h4 className="card-title text-color">
                    Ini Lima Kelebihan Daihatsu Gran Max Blind Van{" "}
                  </h4>
                  <p className="card-text" style={{ color: "#5C6776" }}>
                    <small>
                      John Doe - January 15, 2021 - 0 Comments - Healthy
                    </small>
                  </p>
                  <p className="card-text text-muted">
                    <small>
                      Selain mobil untuk penumpang, beberapa pabrikan mobil
                      seperti Daihatsu juga membuat mobil komersial atau
                      kendaraan niaga jenis blind van dan pikap. Daihtsu Gran
                      Max Blind Van banyak dijadikan armada PT dan banyak
                      diminati para pengusaha untuk.
                    </small>
                  </p>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card border-0 shadow-sm h-100">
                <img src={news6} className="card-img-top" alt="Berita" />
                <div className="card-body text-start">
                  <h4 className="card-title text-color">
                    Mengintip Peluang Usaha Food Truck dan Tips Memulainya{" "}
                  </h4>
                  <p className="card-text" style={{ color: "#5C6776" }}>
                    <small>
                      John Doe - January 15, 2021 - 0 Comments - Healthy
                    </small>
                  </p>
                  <p className="card-text text-muted">
                    <small>
                      “Food truck merupakan salah satu bisnis kuliner yang
                      semakin diminati di Indonesia. Dengan perencanaan dan
                      strategi seperti di bawah ini, food truck bisa menjadi
                      peluang bisnis yang menjanjikan.”
                    </small>
                  </p>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card border-0 shadow-sm h-100">
                <img src={news5} className="card-img-top" alt="Berita" />
                <div className="card-body text-start">
                  <h4 className="card-title text-color">
                    Mobil Siaga Gratis Membantu Pasien yang Membutuhkan{" "}
                  </h4>
                  <p className="card-text" style={{ color: "#5C6776" }}>
                    <small>
                      John Doe - January 15, 2021 - 0 Comments - Healthy
                    </small>
                  </p>
                  <p className="card-text text-muted">
                    <small>
                      Tergerak dari banyaknya pasien yang kesulitan transportasi
                      untuk kontrol atau berobat ke Rumah Sakit, Yayasan untuk
                      Teman Indonesia (YUTI) menyediakan sarana berupa Mobil
                      Siaga Gratis beserta rekan pendamping pasien
                    </small>
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

export default IndexNews;
