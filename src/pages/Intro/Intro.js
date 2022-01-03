import React, { useEffect } from "react";
import styled from "styled-components";
import { imgUrl } from "../../config/index";
import { MdArrowForwardIos } from "react-icons/md";
import { AiFillGithub } from "react-icons/ai";
import { ImLinkedin } from "react-icons/im";

import "./Intro.scss";
const MyIntro = styled.div`
  margin-top: 90px;
  margin-bottom: 70px;
  @media screen and (max-width: 430px) {
    margin-bottom: 0px;
  }
`;

function Intro(props) {
  const { isMobile } = props;

  window.addEventListener("scroll", () => {
    const scrollPositionY = window.pageYOffset;
    const myPhoto = document.querySelector(".my_photo");
    const ContentBox = document.querySelector(".content_box");

    if (isMobile === true) {
      // 手機板
      // 小於300時保持
      if (scrollPositionY < 70) {
        ContentBox.style.position = "static";
      }
      if (scrollPositionY > 70) {
        ContentBox.style.position = "relative";
      }
      if (scrollPositionY < 500) {
        myPhoto.style.transform = `translateY(${scrollPositionY}px)`;
        ContentBox.style.transform = `translateY(${scrollPositionY}px)`;
      } else {
        myPhoto.style.transform = `translateY(500px)`;
        ContentBox.style.transform = `translateY(500px)`;
      }
    } else {
      // 電腦版
      // 小於300時保持
      if (scrollPositionY < 300) {
        ContentBox.style.position = "static";
      }
      if (scrollPositionY > 300) {
        ContentBox.style.position = "relative";
      }
      if (scrollPositionY < 700) {
        myPhoto.style.transform = `translateY(${scrollPositionY * 0.9}px)`;
        ContentBox.style.transform = `translateY(${scrollPositionY * 0.9}px)`;
      } else {
        myPhoto.style.transform = `translateY(650px)`;
        ContentBox.style.transform = `translateY(650px)`;
      }
    }
  });
  return (
    <>
      <div className="container">
        {/* 個人簡介 */}
        <MyIntro>
          <div className="row">
            {/* 左邊個人圖片 */}
            <div className="col-xl-6 col-12">
              <div className="my_photo">
                <img src={`${imgUrl}/images/S__48398358.jpg`} alt="" />
              </div>
            </div>
            {/* 右邊個人文字 */}
            <div className="col-xl-6 col-12">
              <div className="content_box ">
                {/* 名字&個人連結 */}
                <div className="d-xl-flex align-items-end">
                  <div className="name">尹相宸</div>
                  {/* 個人社群連結 */}
                  <div className="media_box">
                    <a
                      href="https://www.linkedin.com/in/%E7%9B%B8%E5%AE%B8-%E5%B0%B9-9987ba190/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <ImLinkedin className="social_media_icon " />
                    </a>
                    <a
                      href="https://github.com/stanley-yin"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <AiFillGithub className="social_media_icon" />
                    </a>
                  </div>
                </div>
                {/* 座右銘 */}
                <div className="wrapper">
                  <div className="typing-demo intro_h3">
                    Front-end developer | BA
                  </div>
                </div>
                {/* 文字簡介 */}
                <div className="intro_p">
                  本該走上管理、行銷相關領域的企管系學生，在大四的課程及電商新創實習中接觸了Python、網頁前端，對寫程式和製作網頁產生了濃厚的興趣，開始透過網路課程自學相關技術。
                </div>
                {/* CV btn */}
                <a
                  href="https://www.cakeresume.com/s--bj6FdcXCs0PmGWNtQMk7Gg--/stanley6140992-6d5376"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="cv_btn">
                    查看CV
                    <MdArrowForwardIos className="right_icon" />
                  </button>
                </a>
              </div>
            </div>
          </div>
        </MyIntro>
      </div>
    </>
  );
}

export default Intro;
