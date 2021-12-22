import React from "react";
import { imgUrl } from "../config/index";

function PortfolioItem(props) {
  const { imgFileName, videoSrc, title, link, hashtag, content } = props;
  return (
    <>
      <div className="project-item">
        <div className="row">
          <div className="col-xl-6 col-12">
            {/* 作品縮圖 */}
            {imgFileName && (
              <div class="project-img">
                <img src={`${imgUrl}/images/${imgFileName}`} alt="" />
              </div>
            )}

            {/* 作品demo影片 */}
            {videoSrc && (
              <iframe
                width="100%"
                height="300px"
                src={videoSrc}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;fullscreen"
                allowfullscreen
              ></iframe>
            )}
          </div>

          <div class="col-xl-6">
            {/* 主標題 */}
            <h3 class="project-title">{title}</h3>
            {/* 作品連結 */}
            <div class="link">
              <a href={link} target="_blank" rel="noreferrer" alt="">
                {link}
              </a>
            </div>
            {/* hashtag */}
            {hashtag.map((v, i) => {
              return (
                <h6 className="tag" key={i}>
                  {v}
                </h6>
              );
            })}

            {/* 內文 */}
            <p class="project-content">{content}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default PortfolioItem;
