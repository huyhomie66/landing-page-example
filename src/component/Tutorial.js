import "./Tutorial.css";
import React, { useEffect } from "react";
import animation1 from "../animationData/animation_01.json";
import Container from "./Container";
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation();
  const tutorial = t("tutorial", { returnObjects: true });
  return (
    <Container className="tutorial smaller">
      <div className="col">
        <h2>{tutorial[0]}</h2>
        <p>{tutorial[1]}</p>
        <p>{tutorial[2]}</p>
        <p>{tutorial[3]}</p>
      </div>
      <div className="col">
        <div id="animation1" className="tutorial-animation" />
      </div>
    </Container>
  );
};

export default Tutorial;
