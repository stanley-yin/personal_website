import React from "react";

function SkillsItem(props) {
  const { title, titleIcon, content } = props;
  return (
    <>
      <div className="card_box">
        <h3 className="card_title">
          {titleIcon}
          {title}
        </h3>
        <div className="card_content_box">
          {content.map((v, i) => {
            return (
              <h6 className="card_content" key={i}>
                {v}
              </h6>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default SkillsItem;
