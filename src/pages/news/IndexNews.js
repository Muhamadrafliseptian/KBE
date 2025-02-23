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

        <div className="container">
          <div className="p-4">
          <h1 className="text-center">Karya Baja Estetika Berita & Update</h1>
          <p>
            lorem ipsum dolor sit amet
          </p>

          </div>
          <div class="row row-cols-1 row-cols-md-2 g-4">
            <div class="col">
              <div class="card border-0">
                <img src={image2} class="card-img-top" alt="..." />
                <div class="card-body text-start">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card border-0">
              <img src={image2} class="card-img-top" alt="..." />
                <div class="card-body text-start">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card border-0">
                <img src={image2} class="card-img-top" alt="..." />
                <div class="card-body text-start">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card border-0">
              <img src={image2} class="card-img-top" alt="..." />
                <div class="card-body text-start">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card border-0">
              <img src={image2} class="card-img-top" alt="..." />
                <div class="card-body text-start">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content.
                  </p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card border-0">
              <img src={image2} class="card-img-top" alt="..." />
                <div class="card-body text-start">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
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
