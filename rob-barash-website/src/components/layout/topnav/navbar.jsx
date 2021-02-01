import React from 'react';
import {Link} from "gatsby";
import navStyles from "./navbar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCameraRetro ,faCode, faComment, faProjectDiagram } from '@fortawesome/free-solid-svg-icons';
import Toggle from "../topnav/toggle";
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Navbar = (props) => {
  return(
  <header>
    <div>
      <ul className={navStyles.nav}>
        <li className={navStyles.item}>
          <Link to="/#skills" className={navStyles.link}>
            <FontAwesomeIcon icon={faCode} /> Skills</Link>
        </li>
        <li className={navStyles.item}>
          <Link to="/#projects" className={navStyles.link}>
            <FontAwesomeIcon icon={faGithub}/> Projects</Link>
        </li>
        <li className={navStyles.item}>
          <Link to="/#blog" className={navStyles.link}>
            <FontAwesomeIcon icon={faComment} /> Blog</Link>
        </li>
        <Toggle className={navStyles.toggleIcons} open={props.open}/>
      </ul>
    </div>
  </header>
  )}

export default Navbar;