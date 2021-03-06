import React from "react";
import Container from "./Container";
import "./Footer.css";
import { useTranslation } from "react-i18next";
import axios from "../utils/axiosInstance";
import { useForm } from "react-hook-form";

const Title = ({ label }) => (
  <div className="footer-title">
    <p>{label}</p>
    <div className="decorator" />
  </div>
);

const FooterLeft = () => {
  const { register, handleSubmit, errors, clearError, reset } = useForm();
  const onSubmit = async (form) => {
    try {
      await axios.post("/reach", { form });
      alert(t("sendInfoSuccess"));
      reset(form);
      clearError();
    } catch (error) {}
  };
  const { t } = useTranslation();

  return (
    <div className="col">
      <Title label={t("contact")} />

      <form onSubmit={handleSubmit(onSubmit)} className="col-body">
        <div className="input-row">
          <input
            name="name"
            placeholder={t("name")}
            ref={register({ required: true })}
          />

          <input
            name="email"
            placeholder="Email"
            ref={register({ maxLength: 40 })}
          />
        </div>

        <input
          name="phone"
          placeholder={t("phone")}
          ref={register({
            required: true,
            minLength: 8,
            maxLength: 11,
            pattern: "/^[+]?[(]?[0-9]{3}[)]?[-s.]?[0-9]{3}[-s.]?[0-9]{4,6}$/im",
          })}
        />
        {errors.phone && (
          <p className="rq">
            {t("phone")} {t("required")}
          </p>
        )}
        <textarea
          name="content"
          placeholder={t("content")}
          ref={register}
        ></textarea>
        <button>{t("submit")}</button>
      </form>
    </div>
  );
};

const FooterRight = () => {
  return (
    <div className="col">
      <Title label="CoviTrack" />

      <div className="col-body">
        <p>
          Nếu bạn có tiếp xúc gần với ca nhiễm Covid-19, chúng tôi sẽ giúp Bộ Y
          tế nhanh chóng liên hệ, hỗ trợ và hướng dẫn bạn theo dõi sức khoẻ.
          CoviTrack sẽ bảo vệ bạn và gia đình khỏi nguy cơ nhiễm bệnh.
        </p>
        <div className="phone">
          <i className="fa fa-phone" aria-hidden="true"></i>
          <a href="tel:19009095">19009095</a>
        </div>

        <div className="logo-container">
          <img
            alt="moh"
            src={require("../assets/icon/logo-bo-y-te.png")}
            className="moh"
          />
          <img
            alt="vt"
            src={require("../assets/icon/Logo_Viettel.svg")}
            className="vt"
          />
          <img
            alt="bwt"
            src={require("../assets/icon/BWT.png")}
            className="bwt"
          />
        </div>
      </div>
    </div>
  );
};

export default () => {
  return (
    <footer>
      <Container className="footer-container" wrapperClassName="footer-wrapper">
        <FooterLeft />
        <FooterRight />
      </Container>
      <div className="copy-right">
        <p>BWtech copyright @2020</p>
      </div>
    </footer>
  );
};
