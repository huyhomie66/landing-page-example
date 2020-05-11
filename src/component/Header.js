import React, { useState } from "react";
import { Drawer } from "react-pretty-drawer";
import ReactFlagsSelect from "react-flags-select";
import "react-flags-select/css/react-flags-select.css";
import { useTranslation } from "react-i18next";
// import {} from
import "./Header.css";
import Container from "./Container";

const Header = () => {
  const [visible, setVisible] = useState(false);
  const closeDrawer = () => setVisible(false);
  const openDrawer = () => setVisible(true);

  const ColNavigation = ({ className, showSelectedLabel }) => {
    const { t } = useTranslation();

    const titles = t("header", { returnObjects: true });

    const onSelect = () => {};

    return (
      <div className={className}>
        <a href="/">{titles[0]}</a>
        <a href="">{titles[1]}</a>
        <ReactFlagsSelect
          onSelect={onSelect}
          defaultCountry="VN"
          showSelectedLabel={showSelectedLabel}
          countries={["US", "VN"]}
          showOptionLabel={false}
        />
      </div>
    );
  };
  const ColBrand = ({ className }) => {
    return (
      <div className={className}>
        <img src={require("../assets/icon/covitrack5.png")} alt="logo" />
        <h3>CoviTrack</h3>
      </div>
    );
  };
  return (
    <header>
      <Drawer visible={visible} onClose={closeDrawer}>
        <div className="drawer-header">
          <ColBrand className="col brand-drawer" />
          <button onClick={closeDrawer}>
            <i className="fa fa-times" aria-hidden="true"></i>
          </button>
        </div>
        <ColNavigation
          className="col navigation-drawer"
          showSelectedLabel={true}
        />
      </Drawer>
      <Container>
        <ColBrand className="col brand" />
        <ColNavigation className="col navigation" showSelectedLabel={false} />

        <button className="drop-btn" onClick={openDrawer}>
          <i className="fa fa-bars" aria-hidden="true"></i>
        </button>
      </Container>
    </header>
  );
};

export default Header;
