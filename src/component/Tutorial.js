import "./Tutorial.css";
import React, { useEffect } from "react";
import animation1 from "../animationData/animation_01.json";
import Container from "./Container";

const Tutorial = () => {
  useEffect(() => {
    window.lottie.loadAnimation({
      container: document.getElementById("animation1"),
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: animation1,
    });
  }, []);

  return (
    <Container className="tutorial smaller">
      <div className="col">
        <h2>
          Bảo vệ bản thân và cộng đồng khỏi Covid-19 chỉ với 2 bước đơn giản:
        </h2>
        <p>1. Download và giúp người thân cài app CoviTrack</p>
        <p>2. Bật Bluetooth và Location</p>
        <p>
          Và chỉ cần như vậy là bạn không còn phải lo sợ khi đi ra ngoài nữa.
        </p>
      </div>
      <div className="col">
        <div id="animation1" className="tutorial-animation" />
      </div>
    </Container>
  );
};

export default Tutorial;
