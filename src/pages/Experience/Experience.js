import React, { useState } from "react";
import styled from "styled-components";
import PageTitle from "../../components/PageTitle";
import { imgUrl } from "../../config/index";
import { IoSchoolOutline } from "react-icons/io5";
import { BsBriefcase } from "react-icons/bs";
import "./Experience.scss";
import ExperienceItem from "../../components/ExperienceItem";
/* 經歷 */

const YellowBg = styled.div`
  background-color: var(--primary);
  height:800px;
  @media screen and (max-width: 430px) {
  height:auto;

  }
`;

function Experience() {
  // TODO 加上actice特效
  const [isActive, setIsActive] = useState({
    education: "open",
    work: "close",
  });

  const handleActive = (e) => {
    if (e === "education") {
      document.querySelector("#education").classList.add("actived");
      document.querySelector("#work").classList.remove("actived");
    } else {
      document.querySelector("#work").classList.add("actived");
      document.querySelector("#education").classList.remove("actived");
    }
  };

  window.addEventListener("scroll", () => {
    const scrollPositionY = window.pageYOffset;
    if (scrollPositionY > 550) {
      const experienceBox = document.querySelector(".experienceBox");

      experienceBox.style.opacity = 1;
    }
  });

  return (
    <>
      <YellowBg>
        <div className="container">
          <div className="text-center experienceBox" id="myexperience">
            <PageTitle title="Experience" />
            {/* work and eduacation */}
            <div className="row">
              <div className="col-6">
                <div
                  className="experience_type d-flex justify-content-end pe-xl-4 pe-1 actived"
                  id="education"
                  onClick={(e) => {
                    // 物件是陣列時要遵守的原則
                    const updateState = {
                      ...isActive,
                      education: "open",
                      work: "close",
                    };
                    setIsActive(updateState);
                    handleActive("education");
                  }}
                >
                  <IoSchoolOutline />
                  <h6 className="ms-1">education</h6>
                </div>
              </div>
              <div className="col-6">
                <div
                  className="experience_type d-flex ps-4"
                  id="work"
                  onClick={(e) => {
                    // 物件是陣列時要遵守的原則
                    const updateState = {
                      ...isActive,
                      education: "close",
                      work: "open",
                    };
                    setIsActive(updateState);
                    handleActive("work");
                  }}
                >
                  <BsBriefcase />
                  <h6 className="ms-1">work</h6>
                </div>
              </div>
            </div>
            {/* 內容 */}
            <div className="time-line-box">
              {isActive.education === "open" && (
                <div id="education">
                  {/* 學校經歷1 */}
                  <ExperienceItem
                    assoc="資策會"
                    detail="前端工程師養成班"
                    time="2021.5 - 2021.11"
                    isOdd={true}
                  />

                  {/* 學校經歷2 */}
                  <ExperienceItem
                    assoc="國立台灣師範大學"
                    detail="企業管理學系"
                    time="2017-2021"
                    isOdd={false}
                  />
                  {/* 學校經歷3 */}
                  <ExperienceItem
                    assoc="國立台中二中"
                    detail=""
                    time="2015-2017"
                    isOdd={true}
                    islast={true}
                  />
                </div>
              )}

              {isActive.work === "open" && (
                <>
                  {/* 工作經歷1 */}
                  <ExperienceItem
                    assoc="Shopline商線有限公司"
                    detail="客戶規劃實習生"
                    time="2020.5-2020.12"
                    isOdd={true}
                  />

                  {/* 工作經歷2 */}
                  <ExperienceItem
                    assoc="采威國際資訊有限公司"
                    detail="業務實習生"
                    time="2019.7-2019.9"
                    isOdd={false}
                    islast={true}
                  />
                </>
              )}
            </div>
          </div>
        </div>
      </YellowBg>
    </>
  );
}

export default Experience;
