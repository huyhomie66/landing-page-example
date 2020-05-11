import React, { useEffect } from "react";
import animation3 from "../animationData/animation_03.json";
import animation2 from "../animationData/animation_02.json";
import Container from "./Container.js";
import "./CoviTrackWork.css";

export default () => {
  useEffect(() => {
    window.lottie.loadAnimation({
      container: document.getElementById("animation2"),
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: animation3,
    });
    window.lottie.loadAnimation({
      container: document.getElementById("animation3"),
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: animation2,
    });
  }, []);

  return (
    <Container className="covitrack-work">
      <div className="col">
        <div className="animation" id="animation3"></div>
        <div>
          <p className="description">
            CoviTrack dùng tín hiệu Bluetooth để xác định mỗi khi điện thoại của
            bạn ở gần một CoviTracker khác
          </p>
          <p className="description">
            2 thiết bị sẽ trao đổi mã người dùng và ghi nhận sự tiếp xúc
          </p>
        </div>
      </div>

      <div className="col">
        <div className="animation" id="animation2"></div>
        <p className="description">
          Ngay cả khi hai CoviTracker không gặp nhau trực tiếp nhưng có lịch sử
          hành trình tương tự nhau, dữ liệu về địa điểm cũng sẽ được ghi nhận.
        </p>
      </div>
    </Container>
  );
};
