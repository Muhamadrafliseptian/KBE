import React, { Component } from "react";
import image5 from "../../assets/images/image-5.png";

// Import Gallery Images
import galery from "../../assets/images/galery.png";
import galery1 from "../../assets/images/galery-1.png";
import galery2 from "../../assets/images/galery-2.png";
import galery3 from "../../assets/images/galery-3.png";
import galery4 from "../../assets/images/galery-4.png";
import galery5 from "../../assets/images/galery-5.png";
import galery6 from "../../assets/images/galery-6.png";
import galery7 from "../../assets/images/galery-7.png";
import galery8 from "../../assets/images/galery-8.png";
import galery9 from "../../assets/images/galery-9.png";
import galery10 from "../../assets/images/galery-10.png";
import galery11 from "../../assets/images/galery-11.png";
import Galeri from "../../assets/images/galeri.png";

export class IndexGallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageGallery: [],
    };
  }

  componentDidMount() {
    // Set gallery images in state dynamically
    this.setState({
      imageGallery: [
        galery,
        galery1,
        galery2,
        galery3,
        galery4,
        galery5,
        galery6,
        galery7,
        galery8,
        galery9,
        galery10,
        galery11,
      ],
    });
  }

  render() {
    return (
      <div>
        {/* Hero Section */}
        <div
          style={{
            backgroundImage: `url(${Galeri})`,
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
              backgroundColor: "rgba(9, 32, 67, 0.6)", // Overlay effect
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
            Gallery
          </h1>
        </div>

        {/* Gallery Section */}
        <div className="container col-xxl-10 px-4 py-5">
          {/* Section Title */}
          <div className="text-center mb-4">
            <h1 className="fw-bold" style={{ color: "#092043" }}>
              Karya Baja Estetika Gallery
            </h1>
            <p className="text-muted">
              Id et diam diam sem donec duis id feugiat tempus leo ut ac amet
              cras ac sapien enim platea mauris. Vel non aliquam mattis aliquet
              fames mauris.{" "}
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
            {this.state.imageGallery.map((image, index) => (
              <div className="col" key={index}>
                <div className="card border-0 overflow-hidden shadow-sm rounded-3">
                  <img
                    src={image}
                    className="card-img-top img-fluid"
                    alt={`Gallery Image ${index + 1}`}
                    style={{ objectFit: "cover", height: "100%" }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default IndexGallery;
