import React from "react";
import styled from "styled-components";
import { MdArrowForwardIos } from "react-icons/md";
import "./Intro.css";
const MyIntro = styled.div`
  margin-bottom: 70px;
  @media screen and (max-width: 430px) {
    margin-bottom: 0px;
  }
`;
const MyPhoto = styled.div`
  width: 446px;
  height: 446px;
  border-radius: 50%;
  overflow: hidden;
  margin: 100px;
  @media screen and (max-width: 430px) {
    width: 200px;
    height: 200px;
    margin: 20px auto;
  }
`;

const IntroH2 = styled.h2`
  font-size: 2rem;
  margin-top: 200px;
  font-weight: bolder;
  @media screen and (max-width: 430px) {
    font-size: 20px;
    font-weight: bold;
    margin-top: 0px;
  }
`;
const IntroH3 = styled.h3`
  font-size: 2rem;
  @media screen and (max-width: 430px) {
    font-size: 20px;
    font-weight: bold;
    margin-top: 0px;
  }
`;
const IntroP = styled.p`
  font-size: 1.2rem;
  margin-top: 5px;
  line-height: 1.5rem;
  @media screen and (max-width: 430px) {
    font-size: 20px;
    font-weight: bold;
    margin-top: 0px;
  }
`;
const CvBtn = styled.button`
  width: 130px;
  height: 50px;
  border-radius: 42px;
  border: none;
  font-weight: bold;
  background-color: #73513d;
  color: white;
  margin: 30px 0;
  &:hover {
    background-color: #a06542;
  }
  @media screen and (max-width: 430px) {
    width: 130px;
    height: 50px;
    border-radius: 42px;
    border: none;
    font-weight: bold;
    background-color: #73513d;
    color: white;
    margin: 30px;
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
              <MyPhoto>
                <img
                  src="http://localhost:3000/images/S__48398358.jpg"
                  alt=""
                />
              </MyPhoto>
            </div>
            {/* 右邊個人文字 */}
            <div className="col-xl-6 col-12">
              <IntroH2>尹相宸</IntroH2>
              <div className="wrapper">
                <IntroH3 className="typing-demo">
                  Front-end developer | BA
                </IntroH3>
              </div>
              <IntroP>
                今年22歲，因實習接觸前端設計，發現興趣遠大於商管本科，進而開啟了前端工程師的路
              </IntroP>
              <a href="https://www.cakeresume.com/s--bj6FdcXCs0PmGWNtQMk7Gg--/stanley6140992-6d5376">
                <CvBtn>
                  查看CV
                  <MdArrowForwardIos class="right_icon" />
                </CvBtn>
              </a>
            </div>
          </div>
        </MyIntro>
      </div>
    </>
  );
}

export default Intro;
