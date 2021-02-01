import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import "../../styles/main.scss"
import FontAwesome from "@fortawesome/react-fontawesome"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCss3Alt, faReact} from "@fortawesome/free-brands-svg-icons"
import NetCoreIcon from "../../assets/icons/netcore.png";
import SqlIcon from "../../assets/icons/sql.png"
import Ado from "../../assets/icons/ado.svg"
import Entity from "../../assets/icons/entity.svg"
import {Link} from "gatsby";
import RestIcon from "../../assets/icons/rest.png";
//Going to be grid format
//Mobile is 1 icon per xs12, md6, lg 4
//Need this to dispaly when scroll location > 0
const SkillsSection = () => {
  return (
    <div className='skills-section'>
      <Container id="skills">
        <h1 className="text-center skills-header">Skills</h1>
          <Row className="justify-content-center">
          <Col xs={12} s={6} m={4} xl={4} className="d-flex justify-content-center">
              <span style={{color: "#5C2992" }}>
                <img src={NetCoreIcon} className="img-icon"/>
                <h3 className="text-center">.NET</h3>
              </span>
            </Col>
            <Col xs={12} s={6} m={4} xl={4} className="d-flex justify-content-center">
              <span style={{color: "darkcyan"}}>
              <img src={Entity} className="img-icon" style={{width:"180px",paddingBottom:"30px",paddingTop:"20px"}}/>
                <h3 className="text-center">Entity</h3>
              </span>
            </Col>
            <Col xs={12} s={6} F m={4} xl={4} className="d-flex justify-content-center">
            <span style={{ color: "#50BBD7" }}>
                <FontAwesomeIcon icon={faReact} className="fa-icon"/>
                <h3 className="text-center">React</h3>
                </span>
            </Col>
          </Row>
          <Row style={{paddingTop:"40px"}}>
          <Col xs={12} s={6} m={4} xl={4} className="d-flex justify-content-center">
              <span style={{color: "#0078D7"}}>
              <img src={Ado} className="img-icon" />
                <h3 className="text-center">DevOps</h3>
              </span>
            </Col>
          <Col xs={12} s={6} m={4} xl={4} className="d-flex justify-content-center">
              <span style={{ color: "lightblack" }}>
              <img src={RestIcon} className="img-icon"/>
                <h3 className="text-center">REST</h3>
              </span>
            </Col>
            <Col xs={12} s={6} m={4} xl={4} className="d-flex justify-content-center">
              <span style={{color: "#157EFB"}}>
              <img src={SqlIcon} className="img-icon" style={{}}/>
                <h3 className="text-center">SQL</h3>
              </span>
            </Col>
          </Row>
          <h4 style={{paddingTop:"40px"}} className="skills-subtext">1.5 plus years enterprise experience with the Agile software development life cycle and full-stack development 
          
          </h4>
          <h5 className='text-right' style={{paddingTop:"20px", paddingBottom:"40px"}}>
            <Link to="/skills" className="subtext-link">
            Click to read more...
            </Link>
          </h5>
      </Container>
      </div>  )
}

export default SkillsSection;
