import "./App.css";
import React from "react";
import Header from "./component/Header";
import Banner from "./component/Banner";
import Tutorial from "./component/Tutorial";
import AppFunc from "./component/AppFunc";
import BannerProtect from "./component/BannerProtect";
import CoviTrackWork from "./component/CoviTrackWork";
import MinistryOfHealthBanner from "./component/MinistryOfHealthBanner";
import InfoProtected from "./component/InfoProtected";
import Footer from "./component/Footer";
import i18n from "./locales/i18n";

import FAQ from "./component/FAQ";
import { I18nextProvider } from "react-i18next";
import { Switch, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";

const Home = () => {
  return (
    <main>
      <Banner />
      <Tutorial />
      <AppFunc />
      <BannerProtect />
      <CoviTrackWork />
      <MinistryOfHealthBanner />
      <InfoProtected />
    </main>
  );
};

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <Header />
      <Router>
        <Switch>
          <Route exact component={FAQ} path="/faq" />
          <Route exact component={Home} path="/" />
        </Switch>
      </Router>
      <Footer />
    </I18nextProvider>
  );
}

export default App;
