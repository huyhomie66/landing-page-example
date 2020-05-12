import React from "react";
import Container from "./Container";
import "./Footer.css";
import { useTranslation } from "react-i18next";
import axios from "../utils/axiosInstance";
import { useForm } from "react-hook-form";

const FooterLeft = () => {
  const { register, handleSubmit, errors, clearError, reset } = useForm();
  const onSubmit = async (form) => {
    try {
      await axios.post("/reach", { form });
    } catch (error) {
      reset(form);
      clearError();
    }
  };
  const { t } = useTranslation();

  return (
    <div className="col">
      <p className="footer-title">{t("contact")}</p>
      <div className="decorator" />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="input-row">
          <input
            name="name"
            placeholder={t("name")}
            ref={register({ required: true })}
          />
          {errors.name && t("required")}
          <input name="email" placeholder={t("email")} ref={register} />
        </div>
        <input
          name="phone"
          placeholder={t("phone")}
          ref={register({ required: true, minLength: 8, maxLength: 11 })}
        />
        {errors.phone && t("required")}
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
      <p className="footer-title">CoviTrack</p>
      <div className="decorator" />
      <div className="phone">
        <i className="fa fa-phone" aria-hidden="true"></i>
        <p>19009095</p>
      </div>
      <div className="logo">
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
