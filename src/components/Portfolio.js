import React from "react";
import PageTitle from "./PageTitle";
import { imgUrl } from "../config/index";
import { Player } from "video-react";
import "./Portfolio.scss";
import PortfolioItem from "./PortfolioItem";

function Portfolio() {
  return (
    <>
      {/* 作品集 */}
      <div className="container">
        <div className="portfolio" id="myportfolio">
          <PageTitle title={"Portfolio"} />
          <PortfolioItem
            imgFileName="inline.png"
            title="Inline官網切版"
            link="https://stanley-yin.github.io/inline/inline.html"
            hashtag={["HTML", "CSS", "BootStrap", "JavaScript"]}
            content="在資策會利用所學製作出的手機、電腦兩個版型的RWD官網，也搭配JavaScript 做出nav-bar的變色特效。"
          />
          <PortfolioItem
            videoSrc="https://www.youtube.com/embed/WNIqDNH-Me4"
            title="線上藥局網站"
            link="https://stanley-yin.github.io/inline/inline.html"
            hashtag={["React", "HTML", "CSS", "BootStrap", "JavaScript"]}
            content="在資策會利用所學製作出的手機、電腦兩個版型的RWD官網，也搭配JavaScript 做出nav-bar的變色特效。"
          />
        </div>
      </div>
    </>
  );
}

export default Portfolio;
