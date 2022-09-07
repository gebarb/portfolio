import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import $ from "jquery";
import "./style.scss";

export default () => {
  useEffect(() => {
    $(".back-to-top").click(function() {
      const VX_DURATION_MS = 1500;
      $("html, body").animate(
        { scrollTop: 0 },
        VX_DURATION_MS,
        "easeInOutExpo"
      );
      return false;
    });

    window.addEventListener("scroll", () => {
      const OFFSET_VAL = 100;
      const backTopElm = document.querySelector(".back-to-top") as HTMLElement;

      if (backTopElm !== null) {
        if (window.pageYOffset > OFFSET_VAL) {
          backTopElm.classList.remove("fadeOut");
          backTopElm.style.display = "block";
          backTopElm.classList.add("fadeIn");
        } else {
          backTopElm.classList.remove("fadeIn");
          backTopElm.classList.add("fadeOut");
        }
      }
    });
  });

  return (
    <a href="/#" className="back-to-top animated">
      <FontAwesomeIcon icon={faChevronUp} />
    </a>
  );
};
