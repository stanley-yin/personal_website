import React from "react";
import { FaCalendarAlt } from "react-icons/fa";

function ExperienceItem(props) {
  const { assoc, detail, time, isOdd } = props;
  return (
    <div className="event-item">
      {/* 奇數顯示這個區域 */}
      {isOdd && (
        <>
          <div className="event-data ms-auto">
            <h3>{assoc}</h3>
            <h4 className="detail">{detail}</h4>
            <div className="calender">
              <FaCalendarAlt className="calender_icon" />
              {time}
            </div>
          </div>
          {/* 圓點*線 */}
          <div>
            <span className="rounder"></span>
            <span className="line"></span>
          </div>
          <div></div>
        </>
      )}

      {/* 偶數顯示這個區域 */}
      {!isOdd && (
        <>
          {/* 圓點*線 */}
          <div></div>
          <div>
            <span className="rounder"></span>
            <span className="line"></span>
          </div>
          <div className="event-data me-auto">
            <h3>{assoc}</h3>
            <h4 className="detail">{detail}</h4>
            <div className="calender">
              <FaCalendarAlt className="calender_icon" />
              {time}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default ExperienceItem;
