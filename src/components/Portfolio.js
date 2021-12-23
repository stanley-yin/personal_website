import React, { useState } from "react";
import PageTitle from "./PageTitle";
import { imgUrl } from "../config/index";
import { Player } from "video-react";
import "./Portfolio.scss";
import PortfolioItem from "./PortfolioItem";
import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";

function Portfolio() {
  const [page, setPage] = useState(1);

  const MoveLeft = () => {
    setPage(page - 1);
    const nowPage = page - 1;
    const train = document.querySelector(".train");
    train.style.transform = `translateX(${-1000 * (nowPage - 1)}px)`;
    if (nowPage < 1) {
      train.style.transform = `translateX(-2000px)`;
      setPage(page + 2);
    }
  };
  const MoveRight = () => {
    setPage(page + 1);
    const nowPage = page + 1;
    const train = document.querySelector(".train");
    train.style.transform = `translateX(${-1000 * (nowPage - 1)}px)`;
    if (nowPage > 3) {
      train.style.trasition = "0s";
      train.style.transform = `translateX(0px)`;
      setPage(page - 2);
    }
  };

  return (
    <>
      {/* 作品集 */}
      <div className="container">
        <div className="portfolio" id="myportfolio">
          <PageTitle title={"Portfolio"} />
          {/* inline切版 */}

          <ul className="train">
            <li className="car">
              <PortfolioItem
                imgFileName="inline.png"
                title="Inline官網切版"
                link="https://stanley-yin.github.io/inline/inline.html"
                hashtag={["HTML", "CSS", "BootStrap", "JavaScript"]}
                content="在資策會利用所學製作出的手機、電腦兩個版型的RWD官網，也搭配JavaScript 做出nav-bar的變色特效。"
              />
            </li>
            {/* 線上藥局 */}
            <li className="car">
              <PortfolioItem
                videoSrc="https://www.youtube.com/embed/WNIqDNH-Me4"
                title="線上藥局網站"
                link="https://stanley-yin.github.io/inline/inline.html"
                hashtag={[
                  "React",
                  "NodeJs",
                  "MySQL",
                  "BootStrap",
                  "JavaScript",
                ]}
                content="在資策會利用所學製作出的手機、電腦兩個版型的RWD官網，也搭配JavaScript 做出nav-bar的變色特效。"
              />
            </li>
            {/* 小遊戲 */}
            <li className="car">
              <PortfolioItem
                imgFileName="jumpingGame.png"
                title="跳跳豬小遊戲"
                link="https://stanley-yin.github.io/JumpGame/index.html"
                hashtag={["JQuery", "JavaScript"]}
                content="在資策會利用所學製作出的手機、電腦兩個版型的RWD官網，也搭配JavaScript 做出nav-bar的變色特效。"
              />
            </li>
          </ul>
          <MdArrowBackIos className="arrowLeft" onClick={MoveLeft} />
          <MdArrowForwardIos className="arrowRight" onClick={MoveRight} />
          <div className="dot_container d-flex justify-content-center">
            <div className="car_dot" ></div>
            <div className="car_dot"></div>
            <div className="car_dot"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Portfolio;
