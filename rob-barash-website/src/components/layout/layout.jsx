import React from 'react';
import NavContainer from '../layout/topnav/navContainer';
import Footer from "./footer";
import "../../styles/main.scss";

if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]')
}

const Layout = props => {
    return(
    <div>
        < NavContainer />
        {props.children}
    </div>
    )
}
export default Layout;
//< Footer/>