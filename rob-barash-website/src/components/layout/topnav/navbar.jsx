import React from 'react';
import {Link} from "gatsby";
import navStyles from "./navbar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCameraRetro ,faCode, faComment, faProjectDiagram } from '@fortawesome/free-solid-svg-icons';
import Toggle from "../topnav/toggle";
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
const Navbar = (props) => {
  return(
  <header>
    <div>
      <ul className={navStyles.leftNav}>
        <li className={navStyles.icon}>
      <a href="https://github.com/robertbarash/projects" className={navStyles.Link}><FontAwesomeIcon icon={faGithub} className={navStyles.iconDetails}/></a>
        </li>
        <li className={navStyles.icon}>
        <a href="https://www.linkedin.com/in/robertbarash" className={navStyles.Link}><FontAwesomeIcon icon={faLinkedin} className={navStyles.iconDetails}/></a>
        </li>
        <li className={navStyles.icon}>
        <a href="https://twitter.com/robbarash" className={navStyles.Link}><FontAwesomeIcon icon={faTwitter} className={navStyles.iconDetails}/></a>
        </li>
        </ul>
        <ul className={navStyles.rightNav}>
        <li className={navStyles.item}>
          <Link to="/#skills" className={navStyles.link}>
            <FontAwesomeIcon icon={faCode} /> Skills</Link>
        </li>
        <li className={navStyles.item}>
          <Link to="/#projects" className={navStyles.link}>
            <FontAwesomeIcon icon={faGithub}/> Projects</Link>
        </li>
        </ul>
        {/*<li className={navStyles.item}>
          <Link to="/#blog" className={navStyles.link}>
            <FontAwesomeIcon icon={faComment} /> Blog</Link> 
        </li>
        <Toggle className={navStyles.toggleIcons} open={props.open}/>*/}
        </div>
  </header>
  )}

export default Navbar;