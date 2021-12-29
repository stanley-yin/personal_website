import React from "react";
import styled from "styled-components";
import { AiOutlineArrowUp } from "react-icons/ai";
import { DiMozilla } from "react-icons/di";
const ScrollTopBtn = styled.div`
  position: fixed;
  bottom: 60px;
  right: 60px;
  color: black;
  text-align: center;
  line-height: 60px;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: white;
  box-shadow: 0px 1px 3px 1px gray;
  @media screen and (max-width: 430px) {
    bottom: 100px;
    right: 30px;
    line-height: 40px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: white;
    box-shadow: 0px 1px 3px 1px gray;
  }
`;
function ScrollToTop() {
  window.addEventListener("scroll", () => {
    const btn = document.querySelector(".btn");
    const scrollPositionY = window.pageYOffset;
    btn.style.transition = "5s";

    if (scrollPositionY < 700) {
      btn.style.display = "none";
    } else {
      btn.style.display = "block";
    }
  });

  return (
    <>
      <a href="#" className="btn">
        <ScrollTopBtn>
          <AiOutlineArrowUp />
        </ScrollTopBtn>
      </a>
    </>
  );
}

export default ScrollToTop;
