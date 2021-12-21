import React from "react";
import PageTitle from "./PageTitle";
import { devUrl } from "../config/index";
import { Player } from "video-react";
import "./Portfolio.css";

function Portfolio() {
  return (
    <>
      {/* 作品集 */}
      <div className="container">
        <div className="portfolio" id="myportfolio">
          <PageTitle title={"Portfolio"} />
          <div className="project-item">
            <div className="row">
              <div className="col-xl-6 col-12">
                {/* 照片demo */}
                <div class="project-img">
                  <img src={`${devUrl}/images/inline.png`} alt="" />
                </div>
              </div>

              <div class="col-xl-6">
                {/* 主標題 */}
                <h3 class="project-title">Inline官網切版</h3>
                <div class="link">
                  <a
                    href="https://stanley-yin.github.io/inline/inline.html"
                    target="_blank"
                    rel="noreferrer"
                    alt=""
                  >
                    https://stanley-yin.github.io/inline/inline.html
                  </a>
                </div>
                {/* 內文 */}
                <p class="project-content">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Eveniet temporibus, laudantium sed dolorum ea deserunt nostrum
                  suscipit odit sint eum, laboriosam possimus architecto
                  voluptates aliquid quas totam, sunt ab quod!
                </p>
              </div>
            </div>
          </div>
          <div className="project-item">
            <div className="row">
              <div className="col-xl-6 col-12">
                {/* 照片demo */}
                <div class="project-img">
                  <img src={`${devUrl}/images/inline.png`} alt="" />
                </div>
              </div>

              <div class="col-xl-6">
                {/* 主標題 */}
                <h3 class="project-title">Inline官網切版</h3>
                <div class="link">
                  <a
                    href="https://stanley-yin.github.io/inline/inline.html"
                    target="_blank"
                    rel="noreferrer"
                    alt=""
                  >
                    https://stanley-yin.github.io/inline/inline.html
                  </a>
                </div>
                {/* 內文 */}
                <p class="project-content">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Eveniet temporibus, laudantium sed dolorum ea deserunt nostrum
                  suscipit odit sint eum, laboriosam possimus architecto
                  voluptates aliquid quas totam, sunt ab quod!
                </p>
              </div>
            </div>
          </div>
          <div className="project-item">
            <div className="row">
              <div className="col-xl-6 col-12">
                {/* 照片demo */}
                <Player className="project-img">
                  <source src={`${devUrl}/video/線上藥局demo影片.mp4`} />
                </Player>
              </div>

              <div class="col-xl-6">
                {/* 主標題 */}
                <h3 class="project-title">線上藥局網站</h3>
                <div class="link">
                  <a href="" alt="">
                    www.edhudhud.com
                  </a>
                </div>
                {/* 內文 */}
                <p class="project-content">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Eveniet temporibus, laudantium sed dolorum ea deserunt nostrum
                  suscipit odit sint eum, laboriosam possimus architecto
                  voluptates aliquid quas totam, sunt ab quod!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Portfolio;
