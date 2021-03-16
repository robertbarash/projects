//Gonna put social stuff here
import React from "react"
import footerStyles from "../layout/footer.module.css"
import { Container } from "react-bootstrap"
import {Link} from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
const Footer = () => (
  <footer className={footerStyles.footer}>
    <Container>
      <span className={footerStyles.iconsRight}>
        <a href="https://github.com/robertbarash/projects" className={footerStyles.icon}><FontAwesomeIcon icon={faGithub}/></a>
        <a href="https://www.linkedin.com/in/robertbarash" className={footerStyles.icon}><FontAwesomeIcon icon={faLinkedin}/></a>
        <a href="https://twitter.com/robbarash" className={footerStyles.icon}><FontAwesomeIcon icon={faTwitter}/></a>
      </span>
    </Container>
  </footer>
)

export default Footer

//Shift-Alt-F to fix format of code