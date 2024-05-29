import React from "react";
import "../Footer.css"; // CSS dosyasının yolunu kontrol edin
import Copyright from "./Copyright";

export default function Footer() {
  const logo = require("../images/logo.png");
  return (
    <footer>
      <div className="footer-bottom bg-light">
        <div className="container row align-content-center justify-content-between">
          <div className="col-6">
            <h3
              className="footer-text"
              style={{ marginTop: "10px" }} // marginTop'u ihtiyacınıza göre ayarlayın
            >
              Enerjini Koru, Geleceği Aydınlat!
            </h3>
          </div>
          <div
            className="col-6"
            style={{
              display: "flex",
              justifyContent: "end",
              alignItems: "center",
            }}
          >
            <img
              src={logo}
              alt="logo2"
              className="footer-logo mb-1 mx-auto img-fluid"
            />
          </div>
          <hr />
          <Copyright />
        </div>
      </div>
    </footer>
  );
}
