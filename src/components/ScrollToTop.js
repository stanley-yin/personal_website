import React from "react";
import styled from "styled-components";

const ScrollTopBtn = styled.div`
  position: fixed;
  bottom: 60px;
  right: 60px;
  color: white;
  text-align: center;
  line-height: 60px;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: var(--second);
  box-shadow: 2px 2px 5px 1px gray;
`;
function ScrollToTop() {
  return (
    <>
      <a href="#header">
        <ScrollTopBtn>UP </ScrollTopBtn>
      </a>
    </>
  );
}

export default ScrollToTop;
