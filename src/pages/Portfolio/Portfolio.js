import React, { useState, useRef, useEffect } from "react";
import PageTitle from "../../components/PageTitle";
import { imgUrl } from "../../config/index";
import { Player } from "video-react";
import "./Portfolio.scss";
import PortfolioItem from "../../components/PortfolioItem";
import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";
import { RiTelegramLine } from "react-icons/ri";

function Portfolio(props) {
  const { isMobile } = props;
  const [page, setPage] = useState(1);

  // 輪播牆的config
  const transitionSpeed = ".5s";
  const mobileTranslateWidth = "404";
  const pcTranslateWidth = "1000";

  // 左移
  const MoveLeft = () => {
    setPage(page - 1);
    const nowPage = page - 1;
    // console.log('nowPage',nowPage);
    // console.log('page',page);
    const train = document.querySelector(".train");

    if (isMobile) {
      //手機板移動
      train.style.transition = transitionSpeed;
      train.style.transform = `translateX(${
        -mobileTranslateWidth * nowPage
      }px)`;
    } else {
      // 電腦版移動
      train.style.transition = transitionSpeed;
      train.style.transform = `translateX(${-pcTranslateWidth * nowPage}px)`;
    }
  };

  // 右移
  const MoveRight = () => {
    setPage(page + 1);
    const nowPage = page + 1;
    const train = document.querySelector(".train");

    if (isMobile) {
      // 手機板
      train.style.transition = transitionSpeed;
      train.style.transform = `translateX(${
        -mobileTranslateWidth * nowPage
      }px)`;
    } else {
      // 電腦版
      train.style.transition = transitionSpeed;
      train.style.transform = `translateX(${-pcTranslateWidth * nowPage}px)`;
    }
    
  };

  // 快速移動
  const changeQuickly = () => {
    const train = document.querySelector(".train");

    // 手機板
    if (isMobile) {
      if (page <= 0) {
        train.style.transition = "none";
        train.style.transform = `translateX(${-3 * mobileTranslateWidth}px)`;
        setPage(page + 3);
      }
      if (page >= 4) {
        train.style.transition = "none";
        train.style.transform = `translateX(-${mobileTranslateWidth}px)`;
        setPage(page - 3);
      }
    } else {
      // 電腦版
      if (page <= 0) {
        train.style.transition = "none";
        train.style.transform = `translateX(${-3 * pcTranslateWidth}px)`;
        setPage(page + 3);
        console.log("end");
      }
      if (page >= 4) {
        train.style.transition = "none";
        train.style.transform = `translateX(-${pcTranslateWidth}px)`;
        setPage(page - 3);
      }
    }
  };

  // 點點功能 (待開發)
  // const HandleChange = (e) => {
  //   const dot = document.querySelectorAll(".car_dot");
  //   dot.forEach((i) => {
  //     i.style.backgroundColor = "white";
  //   });
  //   e.target.style.backgroundColor = "black";
  // };
  return (
    <>
      {/* 作品集 */}
      <div className="container">
        <div className="portfolio" id="myportfolio">
          <PageTitle title={"Portfolio"} />

          <ul className="train" onTransitionEnd={changeQuickly}>
            {/* 小遊戲 */}
            <li className="car">
              <PortfolioItem
                imgFileName="jumpingGame.png"
                title="跳跳豬小遊戲"
                link="https://stanley-yin.github.io/JumpGame/index.html"
                hashtag={["JQuery", "JavaScript"]}
                content="仿製Google小恐龍的遊戲，加入了更多像是金幣加成、障礙物高低、速度變化等等來增加遊戲的趣味性"
              />
            </li>
            {/* inline切版 */}
            <li className="car">
              <PortfolioItem
                imgFileName="inline.jpg"
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
                hashtag={["React", "Node.js", "MySQL", "Chart.js"]}
                content="專案包含「商城購物車系統」、「後台訂單管理」、「後台營業數據」三部分。使用React製作前端，Node.js為後端，並搭配MySQL進行資料庫CRUD。"
              />
            </li>
            {/* 小遊戲 */}
            <li className="car">
              <PortfolioItem
                imgFileName="jumpingGame.png"
                title="跳跳豬小遊戲"
                link="https://stanley-yin.github.io/JumpGame/index.html"
                hashtag={["JQuery", "JavaScript"]}
                content="仿製Google小恐龍的遊戲，加入了更多像是金幣加成、障礙物高低、速度變化等等來增加遊戲的趣味性"
              />
            </li>
            {/* inline切版 */}
            <li className="car">
              <PortfolioItem
                imgFileName="inline.png"
                title="Inline官網切版"
                link="https://stanley-yin.github.io/inline/inline.html"
                hashtag={["HTML", "CSS", "BootStrap", "JavaScript"]}
                content="在資策會利用所學製作出的手機、電腦兩個版型的RWD官網，也搭配JavaScript 做出nav-bar的變色特效。"
              />
            </li>
          </ul>
          <MdArrowBackIos className="arrowLeft" onClick={MoveLeft} />
          <MdArrowForwardIos className="arrowRight" onClick={MoveRight} />
          {/* <div className="dot_container d-flex justify-content-center">
            <div
              className="car_dot"
              onMouseEnter={(e) => {
                HandleChange(e);
              }}
            ></div>
            <div
              className="car_dot"
              onMouseEnter={(e) => {
                HandleChange(e);
              }}
            ></div>
            <div
              className="car_dot"
              onMouseEnter={(e) => {
                HandleChange(e);
              }}
            ></div>
          </div> */}
        </div>
      </div>
    </>
  );
}

export default Portfolio;
