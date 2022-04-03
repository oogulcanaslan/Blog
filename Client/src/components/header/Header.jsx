import React from 'react'
import "./header.css";

const Header = () => {
  return (
    <div className="header">
    <div className="headerTitles">
      <span className="headerTitleSm">React & Node</span>
      <span className="headerTitleLg">Blog</span>
    </div>
    <img
      className="headerImg"
      src="https://cdn.theatlantic.com/thumbor/BH4RKzJtvEyijughHkMOI3KIrVg=/0x0:4368x2457/1600x900/media/img/mt/2018/08/shutterstock_1154888509/original.jpg"
      alt=""
    />
  </div>
  )
}

export default Header