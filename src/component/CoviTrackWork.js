import React, { useEffect } from "react";
import animation3 from "../animationData/animation_03.json";
import animation2 from "../animationData/animation_02.json";
import Container from "./Container.js";
import "./CoviTrackWork.css";
import { useTranslation } from "react-i18next";

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

  const { t } = useTranslation();
  const covitrackWork = t("covitrackWork", { returnObjects: true });
  return (
    <Container className="covitrack-work">
      <div className="col">
        <div className="animation" id="animation3"></div>
        <div>
          <p className="description">{covitrackWork[0]}</p>
          <p className="description">{covitrackWork[1]}</p>
        </div>
      </div>

      <div className="col">
        <div className="animation" id="animation2"></div>
        <p className="description">{covitrackWork[2]}</p>
      </div>
    </Container>
  );
};
