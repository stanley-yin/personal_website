import React, { useState } from "react";
import styled from "styled-components";
import PageTitle from "./PageTitle";
import { devUrl } from "../config/index";
import { IoSchoolOutline } from "react-icons/io5";
import { BsBriefcase } from "react-icons/bs";
import "./Experience.scss";

/* 經歷 */
const ExperienceBox = styled.div`
  position: relative;
  padding: 5px 15px 50px;
  margin: 0 auto 30px;
  max-width: 80%;
`;

const YellowBg = styled.div`
  background-color: var(--primary);
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

  return (
    <>
      <YellowBg>
        <div className="container">
          <ExperienceBox className="text-center" id="myexperience">
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
                    handleActive('education');
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
                    handleActive('work');
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
                  <div className="event-item">
                    <div className="event-data ms-auto">
                      <h3>資策會</h3>
                      <span>前端工程師養成班</span>
                      <div className="calender">
                        <i className="fas fa-calendar-alt"></i>
                        2021.5-2021.11
                      </div>
                    </div>
                    <div>
                      <span className="rounder"></span>
                      <span className="line"></span>
                    </div>
                    <div></div>
                  </div>
                  {/* 學校經歷2 */}
                  <div className="event-item">
                    <div></div>
                    <div>
                      <span className="rounder"></span>
                      <span className="line"></span>
                    </div>

                    <div className="event-data me-auto">
                      <h3>台灣師範大學</h3>
                      <span>企業管理學系</span>
                      <div className="calender">
                        <i className="fas fa-calendar-alt"></i>
                        2017-2021
                      </div>
                    </div>
                  </div>
                  {/* 學校經歷3 */}
                  <div className="event-item">
                    <div className="event-data ms-auto">
                      <h3>國立台中二中</h3>
                      <span>前端工程師養成班</span>
                      <div className="calender">
                        <i className="fas fa-calendar-alt"></i>
                        2015-2017
                      </div>
                    </div>
                    <div>
                      <span className="rounder"></span>
                      <span className="line"></span>
                    </div>
                    <div></div>
                  </div>
                </div>
              )}

              {isActive.work === "open" && (
                <>
                  {/* 工作經歷1 */}
                  <div className="event-item">
                    <div className="event-data ms-auto">
                      <h3>Shopline商線有限公司</h3>
                      <span>客戶規劃實習生</span>
                      <div className="calender">
                        <i className="fas fa-calendar-alt"></i>
                        2020.5-2020.12
                      </div>
                    </div>
                    <div>
                      <span className="rounder"></span>
                      <span className="line"></span>
                    </div>
                    <div></div>
                  </div>
                  {/* 工作經歷2 */}
                  <div className="event-item">
                    <div></div>
                    <div>
                      <span className="rounder"></span>
                      <span className="line"></span>
                    </div>

                    <div className="event-data me-auto">
                      <h3>采威國際資訊有限公司</h3>
                      <span>業務實習生</span>
                      <div className="calender">
                        <i className="fas fa-calendar-alt"></i>
                        2019.7-2019.9
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </ExperienceBox>
        </div>
      </YellowBg>
    </>
  );
}

export default Experience;
