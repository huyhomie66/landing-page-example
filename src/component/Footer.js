import React from "react";
import Container from "./Container";
import "./Footer.css";

const FooterLeft = () => {
  return (
    <div className="col">
      <p className="footer-title">Liên Hệ</p>
      <div className="decorator" />
      <form>
        <div className="input-row">
          <input placeholder="Tên" />
          <input placeholder="Email" />
        </div>
        <input placeholder="Số điện thoại" />
        <textarea placeholder="Nội dụng"></textarea>
        <button>Gửi thông tin</button>
      </form>
    </div>
  );
};

const FooterRight = () => {
  return (
    <div className="col">
      <p className="footer-title">CoviTrack</p>
      <div className="decorator" />
      <div className="phone">
        <i class="fa fa-phone" aria-hidden="true"></i>
        <p>19009095</p>
      </div>
      <div className="logo">
        <img
          alt="moh"
          src={require("../assets/icon/logo-bo-y-te.png")}
          className="moh"
        />
        <img
          alt="vt"
          src={require("../assets/icon/Logo_Viettel.svg")}
          className="vt"
        />
        <img
          alt="bwt"
          src={require("../assets/icon/BWT.png")}
          className="bwt"
        />
      </div>
    </div>
  );
};

export default () => {
  return (
    <footer>
      <Container className="footer-container" wrapperClassName="footer-wrapper">
        <FooterLeft />
        <FooterRight />
      </Container>
      <div className="copy-right">
        <p>BWtech copyright @2020</p>
      </div>
    </footer>
  );
};
