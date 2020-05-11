import "./Banner.css";
import React from "react";
import Container from "./Container";
import { useTranslation } from "react-i18next";

const Banner = () => {
  const { t } = useTranslation();
  const bannerContent = t("banner", { returnObjects: true });

  console.log(bannerContent);

  return (
    <div
      className="banner"
      style={{
        backgroundImage: `url(${require("../assets/image/banner.jpg")})`,
      }}
    >
      <Container>
        <h1>{bannerContent.title}</h1>
        <div className="banner-description">
          <p>{bannerContent.descriptions[0]}</p>
          <p>{bannerContent.descriptions[1]}</p>
          <p>{bannerContent.descriptions[2]}</p>
        </div>
        <div className="store-links">
          <a href="https://apps.apple.com/us/app/c%E1%BA%A3nh-b%C3%A1o-ti%E1%BA%BFp-x%C3%BAc-covitrack/id1509968978?ls=1">
            <img
              src={require("../assets/image/app-store.png")}
              alt="app store"
            />
          </a>
          <a href="https://play.google.com/store/apps/details?id=com.covidtrack">
            <img
              src={require("../assets/image/google-play.png")}
              alt="google play"
            />
          </a>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
