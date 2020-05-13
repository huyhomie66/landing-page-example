import "./Banner.css";
import React from "react";
import Container from "./Container";
import { useTranslation } from "react-i18next";

const Banner = () => {
  const { t } = useTranslation();
  const bannerContent = t("banner", { returnObjects: true });

  return (
    <Container className="banner-container" wrapperClassName="banner-wrapper">
      <h1>
        {bannerContent[0]} <br />
      </h1>
      <div className="banner-description">
        <p> {bannerContent[1]}</p>
        <p>{bannerContent[2]}</p>
        <p>{bannerContent[3]}</p>
        <p>{bannerContent[4]}</p>
        <p>{bannerContent[5]}</p>
        <p>{bannerContent[6]}</p>
      </div>
      <div className="store-links">
        <a href="https://apps.apple.com/us/app/c%E1%BA%A3nh-b%C3%A1o-ti%E1%BA%BFp-x%C3%BAc-covitrack/id1509968978?ls=1">
          <img src={require("../assets/image/app-store.png")} alt="app store" />
        </a>
        <a href="https://play.google.com/store/apps/details?id=com.covidtrack">
          <img
            src={require("../assets/image/google-play.png")}
            alt="google play"
          />
        </a>
      </div>
    </Container>
  );
};

export default Banner;
