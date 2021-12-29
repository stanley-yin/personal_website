import React from "react";
import styled from "styled-components";
import PageTitle from "../../components/PageTitle";
import SkillsItem from "../../components/SkillsItem";
import Accordion from "react-bootstrap/Accordion";
import { DiJavascript, DiCode, DiDatabase } from "react-icons/di";
import { BsPencilFill } from "react-icons/bs";
import "./Skills.scss";
import { RiPencilRuler2Fill } from "react-icons/ri";
/* 技能 */



function Skills() {

  // 出現小動畫
  window.addEventListener("scroll", () => {
    const scrollPositionY = window.pageYOffset;
    if (scrollPositionY > 1000) {
      const skill = document.querySelector(".skill_container");

      skill.style.opacity = 1;
    }
  });


  return (
    <>
      <div className="container">
        <div className="skill_container" id="myskills">
          <PageTitle title={"Skills"} />
          <div className="row">
            <div className="col-xl-4 col-12">
              <SkillsItem
                title="前端技術"
                titleIcon={<DiJavascript />}
                content={[
                  "React",
                  "HTML",
                  "CSS/SCSS",
                  "JavaScript",
                  "BootStrap",
                  "JQuery",
                ]}
              />
            </div>
            <div className="col-xl-4 col-12">
              <SkillsItem
                title="後端技術"
                titleIcon={<DiDatabase />}
                content={["Node.js", "PHP", "MySQL"]}
              />
            </div>
            <div className="col-xl-4 col-12">
              <SkillsItem
                title="設計"
                titleIcon={<RiPencilRuler2Fill />}
                content={["Figma", "AdobeIllustrator", "AdobeIPhotoShop"]}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;
