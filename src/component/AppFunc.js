import "./AppFunc.css";
import React from "react";
import Container from "./Container";
import { useTranslation } from "react-i18next";

const AppFuncField = ({ image, title, descriptions }) => {
  return (
    <div className="col">
      {image && <img src={image} alt={title} />}
      <h3>{title && title}</h3>
      {descriptions &&
        descriptions.map((description, i) => <p key={i}>{description}</p>)}
    </div>
  );
};

const AppFunc = () => {
  const { t } = useTranslation();
  const appFuncs = t("appfunc", { returnObjects: true });

  return (
    <Container className="app-funcs" wrapperClassName="app-funcs-wrapper">
      {appFuncs.map((func, i) => (
        <AppFuncField
          key={i}
          title={func.title}
          image={func.image}
          descriptions={func.descriptions}
        />
      ))}
    </Container>
  );
};

export default AppFunc;
