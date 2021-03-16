import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import {Link} from "gatsby";
import "../../styles/main.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCss3Alt, faReact} from "@fortawesome/free-brands-svg-icons"
import NetCoreIcon from "../../assets/img/desktop/skills/netcore.svg";
import SqlIcon from "../../assets/img/desktop/skills/sql.svg"
import Ado from "../../assets/img/desktop/skills/ado.svg"
import Entity from "../../assets/img/desktop/skills/entity.svg"
import RestIcon from "../../assets/img/desktop/skills/rest.svg";

//Going to be grid format
//Mobile is 1 icon per xs12, md6, lg 4
//Need this to display when scroll location > 0
//https://stackoverflow.com/questions/22252472/how-to-change-the-color-of-an-svg-element
const SkillsSection = () => {
  return (
    <div className='skills-section'>
      <Container id="skills">
        <h1 className="text-center skills-header">Skills</h1>
          <Row className="justify-content-center" style={{paddingBottom:"30px"}}>
          <Col className="d-flex justify-content-center" xs={12} s={6} m={4} xl={4}>
              <span>
                <img src={NetCoreIcon} className="img-icon net-icon"/>
                <h3 className="text-center hide-mobile" style={{color: "#4b1b7d", marginTop:"10px"}}>.NET</h3>
              </span>
            </Col>
            <Col xs={12} s={6} m={4} xl={4} className="d-flex justify-content-center">
              <span style={{color: "darkcyan"}}>
              <img src={Entity} className="img-icon entity-icon"/>
                <h3 className="text-center hide-mobile entity-text">Entity</h3>
              </span>
            </Col>
            <Col xs={12} s={6} F m={4} xl={4} className="d-flex justify-content-center">
            <span style={{ color: "#50BBD7" }}>
                <FontAwesomeIcon icon={faReact} className="fa-icon"/>
                <h3 className="text-center hide-mobile react-text" style={{color: "#3e9eb8",paddingBottom:"40px"}}>React</h3>
                </span>
            </Col>
          </Row>
          <Row style={{paddingTop:"40px"}}>
          <Col xs={12} s={6} m={4} xl={4} className="d-flex justify-content-center">
              <span>
              <img src={Ado} className="img-icon" />
                <h3 className="text-center hide-mobile"style={{color: "#0078D7"}}>DevOps</h3>
              </span>
            </Col>
          <Col xs={12} s={6} m={4} xl={4} className="d-flex justify-content-center">
              <span>
              <img src={RestIcon} className="img-icon rest-icon"/>
                <h3 className="text-center hide-mobile rest-text" style={{color: "#7d130e"}}>REST</h3>
              </span>
            </Col>
            <Col xs={12} s={6} m={4} xl={4} className="d-flex justify-content-center">
              <span>
              <img src={SqlIcon} className="img-icon sql-icon"/>
                <h3 className="text-center hide-mobile"style={{color: "#3a7509"}}>SQL</h3>
              </span>
            </Col>
          </Row>
          <h4 style={{paddingTop:"40px", paddingBottom:"60px"}} className="skills-subtext">1.5 plus years enterprise experience with the Agile software development life cycle and full-stack development
          </h4>

      </Container>
      </div>  )
};

export default SkillsSection;

//<h5 className='text-right' style={{paddingTop:"20px", paddingBottom:"40px"}}>
//<Link to="/skills" className="subtext-link">
//Click to read more...
//</Link>
//</h5>