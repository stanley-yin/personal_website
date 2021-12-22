import React from "react";
import styled from "styled-components";
import PageTitle from "./PageTitle";
import "./Footer.scss";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { HiOutlineLocationMarker } from "react-icons/hi";

const MyFooter = styled.div`
  margin-top: 50px;
  height: 500px;
  background-color: var(--primary);
`;
function Footer() {
  return (
    <>
      <MyFooter>
        <PageTitle title="Contact Me" />
        <div className="contact_box">
          <div className="contact_content">
            <AiOutlineMail className="icon" />
            stanley6140992@gmail.com
          </div>
          <div className="contact_content">
            <AiOutlinePhone className="icon" />
            0972438496
          </div>
          <div className="contact_content">
            <HiOutlineLocationMarker className="icon"/> taipei
          </div>
        </div>
      </MyFooter>
    </>
  );
}

export default Footer;
