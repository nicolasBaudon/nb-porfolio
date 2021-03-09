import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

import Routes from "./routes/routes";
import Header from "./components/header/header";
import SocialsSidebar from "./components/socials-sidebar/socials-sidebar";
import Footer from "./components/footer/footer";

function App() {
  const appLocation = useLocation();

  useEffect(() => {
    if (
      appLocation.pathname === "/contact" ||
      appLocation.pathname.match(/(works-)/i)
    ) {
      document.body.classList.remove("dark-theme");
      document.body.classList.add("light-theme");
    } else {
      document.body.classList.remove("light-theme");
      document.body.classList.add("dark-theme");
    }
  }, [appLocation.pathname]);

  return (
    <>
      <Header />
      <SocialsSidebar />
      <Routes />
      <Footer />
    </>
  );
}

export default App;
