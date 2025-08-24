import React from 'react'
import "./MyWork.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mywork_data from "../../assets/mywork_data"
import arrow_icon from "../../assets/arrow_icon.svg";

const MyWork = () => {
  return (
    <div className='mywork' id="portfolio">
      <div className="mywork-title">
        <h1>My latest work</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="mywork-container">
        {mywork_data.map((work, index) => {
          return <img src={work.w_img} alt="" key={index} />
        })}
      </div>
      <div className="mywork-showmore">
        <p>Xem thêm</p>
        <img src={arrow_icon} alt="" />
      </div>
    </div>
  )
}

export default MyWork
