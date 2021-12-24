import React from "react";
import styled from "styled-components";
import { FaBars } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import "./Header.scss";
import "animate.css";

const MyHeader = styled.div`
  width: 100%;
  background-color: white;
  height: 90px;
  padding: 0 25px;
  box-shadow: 0px -20px 23px 6px #000000b2;
  position: fixed;
  top: 0;
  z-index: 99999;
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
  margin-left: 110px;
`;
const NavLink = styled.div`
  color: black;
`;

const ContactBox = styled.div`
  height: 100%;
  background-color: var(--second);
  color: var(--primary);
  font-size: 20px;
  padding: 10px;
  border-radius: 20px;
`;
function Header() {
  const contact = document.querySelector(".contact");

  console.log(contact);
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

          {/* 右contact-box */}
          <a href="#contact">
            <ContactBox className="d-xl-block d-none d-flex contact">
              <HiMail className="mail_icon" /> Contact
            </ContactBox>
          </a>
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
