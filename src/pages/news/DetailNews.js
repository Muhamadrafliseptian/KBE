import React from "react";
import { useParams } from "react-router-dom";
import news1 from "../../assets/images/news-1.png";
import news2 from "../../assets/images/news-2.png";
import news3 from "../../assets/images/news-3.png";
import image5 from "../../assets/images/image-5.png";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";
const newsData = [
  {
    id_berita: "1",
    judul: "Van Day, Ajang Kumpul Modifikasi Mobil Keluarga di Indonesia",
    isi_berita:
      "Tak hanya mobil bergenre city car, sedan, hatchback, atau SUV, modifikasi di segmen mobil keluarga alias multi purpose vehicle.",
    image_berita: news1,
    tanggal: "April 15, 2021",
  },
  {
    id_berita: "2",
    judul: "Zebra Espass Mahalan Biaya Modif daripada Harga Mobilnya",
    isi_berita:
      "Daihatsu Zebra Espass merupakan mobil pintu geser yang cukup legendaris di Indonesia. Seorang pensiunan Dinas Sosial.",
    image_berita: news2,
    tanggal: "April 15, 2021",
  },
  {
    id_berita: "3",
    judul: "Sebelum Memulai Bisnis Food Truck, Simak Estimasi Biayanya",
    isi_berita:
      "Bisnis berjualan makanan dengan desain food truck kini tengah menjangkit di sejumlah tempat. Bisnis ini disebut cukup.",
    image_berita: news3,
    tanggal: "April 15, 2021",
  },
];

const DetailNews = () => {
  const { id_berita } = useParams();
  const berita = newsData.find((news) => news.id_berita === id_berita);

  if (!berita) {
    return (
      <div className="container text-center mt-5">
        <h3 className="text-danger">Berita tidak ditemukan.</h3>
      </div>
    );
  }

  return (
    <>
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
      <div class="container col-xxl-10 px-4 py-5">
        <div className="text-start">
          <p>
            Jakarta - Daihatsu Zebra Espass merupakan mobil pintu geser yang
            cukup legendaris di Indonesia. Seorang pensiunan Dinas Sosial
            Provinsi Jawa Barat, Yoga Mulyantono (62) kepincut mengubah MPV ini
            jadi campervan. "Judulnya cari yang murah meriah, unik, dan sliding
            door," buka Yoga di acara Daihatsu Kumpul Sahabat Bandung, Jawa
            Barat.
            <br></br>
            <br></br>
            Dari eksterior terlihat begitu ramai pernak-pernik campervan. Mulai
            dari tenda, hammock di atas atap mobil, kursi dan meja portabel.
            Selain itu, mobil ini juga disediakan penyimpanan air bersih untuk
            memasak dan mencuci barang.
            <br></br>
            <br></br>
            "Ada dapur umum di belakang, bisa masak, bisa cuci piring. Airnya
            didorong dari pompa dispenser galon bawah," ujar Yoga.
            <br></br>
            <br></br>
            "Keunikan lain yang terlihat dari Espass ini adalah menggunakan enam
            roda. Dia bilang modifikasi itu menggunakan as tambahan dari
            Mitsubishi Galant. Sedangkan bagian mesinnya masih standar Daihatsu
            Zebra Espass.
            <br></br>
          </p>
        </div>
        <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div class="col-lg-6 text-start">
            <h1
              class="display-5 fw-bold lh-1 mb-3"
              style={{ color: "#092043" }}
            >
              {berita.judul}
            </h1>
            <p>{berita.isi_berita}</p>
          </div>
          <div class="col-12 col-sm-10 col-md-8 col-lg-6 text-center">
            <img
              src={berita.image_berita}
              class="img-fluid"
              alt="Bootstrap Themes"
              width="700"
              height="500"
              loading="lazy"
            />
          </div>
        </div>

        <hr></hr>

        <div className="text-muted mt-3 text-start">
          <p>
            <strong>John Doe</strong> - January 15, 2021 - 0 Comments -
            Information
          </p>
        </div>

        <div className="alert alert-info" role="alert">
          <div className="row align-items-center">
            {/* Kolom Teks */}
            <div className="col-12 col-md-6 text-center text-md-start">
              A simple secondary alert—check it out!
            </div>

            {/* Kolom Ikon Sosial Media */}
            <div className="col-12 col-md-6 text-center text-md-end mt-2 mt-md-0">
              <FaTwitter size={18} className="me-2" />
              <FaFacebook size={18} className="me-2" />
              <a
                href="https://www.instagram.com/karoserikaryabaja?igsh=MXMxcmpxaDVuZnd4cg=="
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram size={18} className="me-2" color="#003D92" />
              </a>
              <FaYoutube size={18} className="me-2" />
              <FaLinkedin size={18} className="me-2" />
            </div>
          </div>
        </div>
      </div>

      <div className="container col-xxl-10 px-4 py-1">
        <h2 className="text-center fw-bold mb-5">Related Articles</h2>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
          {newsData.map((news) => (
            <div className="col" key={news.id_berita}>
              <div
                className="card border-0 h-100"
                style={{ boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)" }}
              >
                <img
                  src={news.image_berita}
                  className="card-img-top"
                  alt={news.judul}
                />
                <div className="card-body text-start d-flex flex-column">
                  <h5 className="card-title fw-bold text-color">
                    {news.judul}
                  </h5>
                  <p className="flex-grow-1 text-secondary">
                    <small>APRIL 15, 2021 NO COMMENTS</small>
                  </p>
                  <p className="card-text flex-grow-1">
                    <small>{news.isi_berita}</small>
                  </p>
                  <p>
                    <Link
                      to={`/news/${news.id_berita}/detail`}
                      style={{ color: "#003D92", textDecoration: "none" }}
                    >
                      <b>Read More →</b>
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default DetailNews;
