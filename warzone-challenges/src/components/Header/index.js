import React from "react";
import ReactDOM from "react-dom";
import {PageHeader} from "antd";
import "antd/dist/antd.css";

class Header extends React.Component{
  render(){
    return <PageHeader
    className="site-page-header"
    title="Warzone Challenges"
    subTitle="This is a subtitle"
  />
  }
}

export default Header;
