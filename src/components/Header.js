import React from "react";
import styled from "styled-components";
import { FaBars } from "react-icons/fa";
import "./Header.scss";

const MyHeader = styled.div`
  width: 100%;
  background-color: white;
  height: 90px;
  padding: 0 25px;
  box-shadow: 0px -20px 23px 6px #000000b2;

  @media screen and (max-width: 430px) {
    padding: 15px 20px;
    height: 60px;
    box-shadow: 0px -20px 23px 6px #000000b2;
  }
`;

const Logo = styled.div`
  font-size: 36px;
  font-weight: bold;
  width: 30%;
  @media screen and (max-width: 430px) {
    font-size: 20px;
    width: 100%;
  }
`;

const NavLinkBox = styled.div`
  width: 50%;
  font-size: 20px;
  margin-left: 300px;
`;
const NavLink = styled.div`
  color: black;
`;

const ContactBox = styled.div`
  width: 20%;
`;
function Header() {
  // const underLine = ()=>{
  //   const navLine = document.querySelector('.navLine')

  //   navLine.style.classList.add('')

  // }

  return (
    <>
      <MyHeader
        id="header"
        className="d-flex justify-content-between align-items-center"
      >
        {/* 左logo */}
        <div className="container d-flex">
          <Logo>Stanley Yin</Logo>
          {/* 中nav-link */}
          <NavLinkBox className="d-xl-flex d-none">
            <div className="nav-link">
              <a href="#myexperience">Experience</a>
              <div className="nav-line"></div>
            </div>

            <div className="nav-link">
              <a href="#myskills">Skills</a>
              <div className="nav-line"></div>
            </div>
            <div className="nav-link">
              <a href="#myportfolio">Portfolio</a>
              <div className="nav-line"></div>
            </div>
          </NavLinkBox>
          {/* 右contect-box */}
          <ContactBox className="d-xl-block d-none d-flex"></ContactBox>
        </div>

        {/* 手機版bar */}
        <div className="bar-icon d-xl-none">
          <FaBars />
        </div>
      </MyHeader>
    </>
  );
}

export default Header;
