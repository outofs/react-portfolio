import React from "react";
import "./scrollup.scss";

const Scrollup = () => {
  window.addEventListener("scroll", function () {
    const scrollup = document.querySelector(".scrollup");

    if (this.scrollY >= 560) scrollup?.classList.add("show-scroll");
    else scrollup?.classList.remove("show-scroll");
  });
  return (
    <a href="#" className="scrollup" id="scroll-up">
      <i className="uil uil-arrow-up scrollup__icon"></i>
    </a>
  );
};

export default Scrollup;