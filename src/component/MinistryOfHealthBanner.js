import React, { useEffect } from "react";
import animation4 from "../animationData/animation_04.json";
import "./MinistryOfHealthBanner.css";
import Container from "./Container.js";

export default () => {
  useEffect(() => {
    window.lottie.loadAnimation({
      container: document.getElementById("animation4"),
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: animation4,
    });
  }, []);

  return (
    <div
      style={{
        backgroundImage: `url(${require("../assets/image/gradient-02.jpg")})`,
      }}
    >
      <Container className="moh-banner">
        <p className="title-large">
          Khi một người bị phát hiện hoặc nghi ngờ nhiễm bệnh
        </p>
        <p className="title-small">
          Cơ quan Y tế có thẩm quyền sẽ yêu cầu được truy cập vào dữ liệu này để
          nhanh chóng khoanh vùng những người từng tiếp xúc trực tiếp hoặc gián
          tiếp, dù bạn có quen biết họ hay không.
        </p>
        <div id="animation4"></div>
      </Container>
    </div>
  );
};
