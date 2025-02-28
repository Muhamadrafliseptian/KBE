import React, { Component } from "react";
import image5 from "../../assets/images/image-5.png";
import kontak from "../../assets/images/kontak.png";
import {
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

export class IndexContact extends Component {
  render() {
    return (
      <div>
        {/* Breadcrumb Section */}
        <div
          style={{
            backgroundImage: `url(${kontak})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "300px",
            display: "flex",
            alignItems: "center",
            justifyContent: "start",
            paddingLeft: "150px",
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
              backgroundColor: "rgba(9, 32, 67, 0.6)",
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
            Kontak
          </h1>
        </div>

        <div className="container py-5">
          <div className="row g-4">
            {/* Left Column: Address */}
            <div className="col-lg-4 col-md-12">
              <div className="p-4 text-start">
                <h3 className="mb-3" style={{ color: "#092043" }}>
                  Office Address
                </h3>
                <p>Jl. Aria Wiratanudatar No.25 Cianjur, Jawa Barat - 43215</p>
                <div className="mb-3">
                  <FaTwitter size={18} className="me-2" />
                  <FaFacebook size={18} className="me-2" />
                  <a href="https://www.instagram.com/karoserikaryabaja?igsh=MXMxcmpxaDVuZnd4cg==">
                    <FaInstagram size={18} className="me-2" color="black" />
                  </a>
                  <FaYoutube size={18} className="me-2" />
                  <FaLinkedin size={18} className="me-2" />
                </div>
                <p className="mb-0" style={{ color: "#00AFFF" }}>
                  <b>Email</b>
                </p>
                <p>contact@ksb.com</p>

                <p className="mb-0" style={{ color: "#00AFFF" }}>
                  <b>Phone</b>
                </p>
                <p>(0263)270080</p>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="col-lg-8 col-md-12">
              <div className="p-4 shadow-sm rounded-3 bg-white text-start">
                {/* Google Maps */}
                <div className="mb-4">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.675334768915!2d107.14838639999999!3d-6.809289!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e685300414a79fd%3A0x7a09c9ab9a2d0f7f!2sKarya%20Baja%20Estetika%20Karoseri!5e0!3m2!1sen!2sid!4v1740727666435!5m2!1sen!2sid"
                    width="100%"
                    height="300"
                    style={{ border: 0, borderRadius: "8px" }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>

                {/* Contact Form */}
                <h3 className="mb-3" style={{ color: "#092043" }}>
                  Send Us a Message
                </h3>
                <form>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <label className="form-label">Nama</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Masukkan nama"
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label">Email</label>
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
                    className="btn w-100 mt-3"
                    style={{ backgroundColor: "#092043", color: "white" }}
                  >
                    Kirim
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default IndexContact;
