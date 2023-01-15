import React from "react";
import "./App.scss";
import About from "./components/about/About";
import ContactMe from "./components/contact-me/ContactMe";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Portfolio from "./components/portfolio/Portfolio";
import Qualification from "./components/qualification/Qualification";
import Scrollup from "./components/scrollup/Scrollup";
import Skills from "./components/skills/Skills";

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <About />
        <Skills />
        <Qualification />
        <Portfolio />
        <ContactMe />
      </main>
      <Footer />
      <Scrollup />
    </>
  );
}

export default App;
