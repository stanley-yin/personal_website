import React from "react";
import { imgUrl } from "../config/index";
import { AiOutlineArrowRight } from "react-icons/ai";
import 'animate.css';

// TODO
// 滑動到作品，即會出現前往github或是demo選項

function PortfolioItem(props) {
  const { imgFileName, videoSrc, title, link, hashtag, content } = props;
  const Bounce = (e)=>{
    e.target.classList.add('animate__animated', 'animate__pulse')
    setTimeout(()=>{
      e.target.classList.remove('animate__animated', 'animate__pulse')
    },[1000])
  }
  return (
    <>
      <div className="project-item">
        <div className="row">
          <div className="col-xl-6 col-12"  onMouseEnter={(e)=>{Bounce(e)}}>
            {/* 作品縮圖 */}
            {imgFileName && (
              <a href={link} target="_blank" rel="noreferrer" alt="">
                <div className="project-img">
                  <img src={`${imgUrl}/images/${imgFileName}`} alt="" />
                </div>
              </a>
            )}
            {/* 作品demo影片 */}
            {videoSrc && (
              <div className="project-img">
                <iframe
                  width="100%"
                  height="300px"
                  src={videoSrc}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;fullscreen"
                ></iframe>
              </div>
            )}
          </div>

          <div className="col-xl-6">
            <div className="content">
              {/* 主標題 */}
              <h3 className="project-title">{title}</h3>
  
              {/* hashtag */}
              {hashtag.map((v, i) => {
                return (
                  <h6 className="tag" key={i}>
                    {v}
                  </h6>
                );
              })}
  
              {/* 內文 */}
              <p className="project-content">{content}</p>
  
              {/* View More Btn */}
              {/* <a href={link} target="_blank" rel="noreferrer" alt="">
                <div className="demo_btn">
                  View More <AiOutlineArrowRight />{" "}
                </div>
              </a> */}
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default PortfolioItem;
