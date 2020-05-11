import React, { useEffect } from "react";
import animation5 from "../animationData/animation_05.json";
import Container from "./Container.js";
import "./InfoProtected.css";

export default () => {
  useEffect(() => {
    window.lottie.loadAnimation({
      container: document.getElementById("animation5"),
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: animation5,
    });
  }, []);

  return (
    <Container className="info-pt-container">
      <div id="animation5"></div>
      <p className="title-large">
        Mọi thông tin sẽ được bảo mật dưới dạng chữ ký, thay đổi hàng ngày
      </p>
      <p>
        Càng nhiều người dùng CoviTrack, bạn càng được bảo vệ.
        <br /> Hãy cài app và giúp mọi người cài nhé
      </p>
      <button>Câu hỏi thường gặp</button>
    </Container>
  );
};
