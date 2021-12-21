import React from "react";
import styled from "styled-components";
import PageTitle from "./PageTitle";
import Accordion from "react-bootstrap/Accordion";
import { DiJavascript, DiCode, DiDatabase } from "react-icons/di";
import { MdDraw } from "react-icons/md";
/* 技能 */

const Skill = styled.div`
  max-width: 800px;
  margin: 0 auto;
  @media screen and (max-width: 430px) {
  }
`;

function Skills() {
  return (
    <>
      <div className="container">
        <Skill id="myskills">
          <PageTitle title={"Skills"} />
          <div className="row">
            <div className="col-xl-6 mb-xl-5">
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    <DiCode />
                    前端技術
                  </Accordion.Header>
                  <Accordion.Body>
                    <ul>
                      <li>React</li>
                      <li>HTML</li>
                      <li>CSS/SCSS</li>
                      <li>JavaScript</li>
                      <li>BootStrap</li>
                      <li>JQuery</li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
            <div className="col-xl-6 mb-xl-5">
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    <DiDatabase />
                    後端技術
                  </Accordion.Header>
                  <Accordion.Body>
                    <ul>
                      <li>Node.js</li>
                      <li>PHP</li>
                      <li>MySQL</li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
            <div className="col-xl-6 mb-xl-5">
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    <MdDraw />
                    設計
                  </Accordion.Header>
                  <Accordion.Body>
                    <ul>
                      <li>Adobe Illustrator</li>
                      <li>Adobe AfterEffect </li>
                      <li>Figma</li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
            <div className="col-xl-6 mb-xl-5">
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>其他</Accordion.Header>
                  <Accordion.Body>
                    <ul>
                      <li>Git 版本控管</li>
                      <li>Python </li>
                      <li>Ardiuno </li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </div>
        </Skill>

        {/* 更多關於我 */}
      </div>
    </>
  );
}

export default Skills;
