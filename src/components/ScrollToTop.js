import React from "react";
import styled from "styled-components";
import { AiOutlineArrowUp } from "react-icons/ai";
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
  box-shadow: 0px 1px 8px 1px gray;
`;
function ScrollToTop() {
  return (
    <>
      <a href="#header">
        <ScrollTopBtn>
          <AiOutlineArrowUp />
        </ScrollTopBtn>
      </a>
    </>
  );
}

export default ScrollToTop;
