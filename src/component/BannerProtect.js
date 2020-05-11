import React, { useEffect } from "react";
import animationData from "../animationData/animation_06.json";
import Container from "./Container.js";
import "./BannerProtect.css";

export default () => {
  useEffect(() => {
    window.lottie.loadAnimation({
      container: document.getElementById("animation"),
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData,
    });
  }, []);

  return (
    <div
      style={{
        backgroundImage: `url(${require("../assets/image/gradient-02.jpg")})`,
      }}
    >
      <Container className="banner-pt" wrapperClassName="banner-pt-wrapper">
        <h1>
          CoviTrack sẽ bảo vệ bạn và gia đình khỏi nguy cơ nhiễm bệnh bằng cách
          nào?
        </h1>
        <div id="animation"></div>
      </Container>
    </div>
  );
};
