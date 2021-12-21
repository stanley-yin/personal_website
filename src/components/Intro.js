import React from "react";
import styled from "styled-components";
import { imgUrl } from "../config/index";
import { MdArrowForwardIos } from "react-icons/md";
import { AiFillGithub } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";

import "./Intro.scss";
const MyIntro = styled.div`
  margin-bottom: 70px;
  @media screen and (max-width: 430px) {
    margin-bottom: 0px;
  }
`;

function Intro() {
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
              <div className="content_box">
                {/* 名字&個人連結 */}
                <div className="d-flex align-items-end">
                  <div className="name">尹相宸</div>
                  <a href="https://www.facebook.com/profile.php?id=100001595680457">
                    <FaFacebook className="social_media_icon" />
                  </a>
                  <a href="https://github.com/stanley-yin">
                    <AiFillGithub className="social_media_icon" />
                  </a>
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
                    <MdArrowForwardIos class="right_icon" />
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
