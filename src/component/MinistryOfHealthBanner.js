import React, { useEffect } from "react";
import animation4 from "../animationData/animation_04.json";
import "./MinistryOfHealthBanner.css";
import Container from "./Container.js";
import { useTranslation } from "react-i18next";

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

  const { t } = useTranslation();
  const moh = t("moh", { returnObjects: true });
  return (
    <div
      style={{
        backgroundImage: `url(${require("../assets/image/gradient-02.jpg")})`,
      }}
    >
      <Container className="moh-banner">
        <p className="title-large">{moh[0]}</p>
        <p className="title-small">{moh[1]}</p>
        <div id="animation4"></div>
      </Container>
    </div>
  );
};
