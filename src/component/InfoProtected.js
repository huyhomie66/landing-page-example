import React, { useEffect } from "react";
import animation5 from "../animationData/animation_05.json";
import Container from "./Container.js";
import "./InfoProtected.css";
import { useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default () => {
  const { push } = useHistory();
  useEffect(() => {
    window.lottie.loadAnimation({
      container: document.getElementById("animation5"),
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: animation5,
    });
  }, []);
  const { t } = useTranslation();
  const infoProtected = t("infoProtected", { returnObjects: true });

  return (
    <Container className="info-pt-container">
      <div id="animation5"></div>
      <p className="title-large">{infoProtected[0]}</p>
      <p>
        {infoProtected[1]}
        <br />
        {infoProtected[2]}
      </p>
      <button onClick={() => push("/faq")}>{t("askButton")}</button>
    </Container>
  );
};
