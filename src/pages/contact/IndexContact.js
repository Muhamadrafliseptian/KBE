import React, { Component } from "react";
import image5 from "../../assets/images/image-5.png";

export class IndexContact extends Component {
  render() {
    return (
      <div>
        {/* Breadcrumb Section */}
        <div
          style={{
            backgroundImage: `url(${image5})`,
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
        <h3 className="mb-3" style={{ color: "#092043" }}>Office Address</h3>
        <p>
          021 Hollywood Boulevard, Los Angeles, Ante egestas maecenas proin nisl
          non faucibus tempus, laoreet. Consectetur blandit pellentesque at ante
        </p>
        <p className="mb-0" style={{ color: "#00AFFF" }}>
          <b>Email</b>
        </p>
        <p>rafliseptiannn@gmail.com</p>

        <p className="mb-0" style={{ color: "#00AFFF" }}>
          <b>Phone</b>
        </p>
        <p>191931</p>
      </div>
    </div>

    {/* Right Column: Contact Form */}
    <div className="col-lg-8 col-md-12">
      <div className="p-4 shadow-sm rounded-3 bg-white text-start">
        {/* Google Maps */}
        <div className="mb-4">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15865.581281847788!2d106.68808435!3d-6.2114790499999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f9de1abb9457%3A0xbf7f554e1417208d!2sKampung%20Kecil%20Cipondoh!5e0!3m2!1sen!2sid!4v1740335860944!5m2!1sen!2sid"
            width="100%"
            height="300"
            style={{ border: 0, borderRadius: "8px" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* Contact Form */}
        <h3 className="mb-3" style={{ color: "#092043" }}>Send Us a Message</h3>
        <form>
          <div className="row g-3">
            <div className="col-md-6">
              <label className="form-label">Nama</label>
              <input type="text" className="form-control" placeholder="Masukkan nama" />
            </div>
            <div className="col-md-6">
              <label className="form-label">Email</label>
              <input type="email" className="form-control" placeholder="Masukkan email" />
            </div>
          </div>
          <div className="mt-3">
            <label className="form-label">Pesan</label>
            <textarea className="form-control" rows="4" placeholder="Tulis pesan Anda"></textarea>
          </div>
          <button type="submit" className="btn w-100 mt-3" style={{ backgroundColor: "#092043", color: "white" }}>
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
