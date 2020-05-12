import React, { useEffect } from "react";
import animationData from "../animationData/animation_06.json";
import Container from "./Container.js";
import "./BannerProtect.css";
import { useTranslation } from "react-i18next";

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

  const { t } = useTranslation();
  return (
    <div
      style={{
        backgroundImage: `url(${require("../assets/image/gradient-02.jpg")})`,
      }}
    >
      <Container className="banner-pt" wrapperClassName="banner-pt-wrapper">
        <h1>{t("protect")}</h1>
        <div id="animation"></div>
      </Container>
    </div>
  );
};
