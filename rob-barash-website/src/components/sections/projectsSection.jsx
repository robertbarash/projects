import React from "react"
import { Container } from "react-bootstrap"
import Card from "../card.jsx"
import siteImg from "../../assets/img/desktop/card-site-compressed.jpg"

const siteTitle = 'robbarash.com';
const siteDescription = 'Created with a lotta love, and GatsbyJS.';
const siteImage = siteImg;
const siteLink = "https://www.github.com/"

const ProjectsSection = () => {
    return (
      <div className="projects-section">
    <Container id="projects">
      <h1 className="text-center projects-header">Projects</h1>
      <Card img={siteImage} title={siteTitle} description={siteDescription} link={siteLink}/>
    </Container>
    </div>
  )
}

export default ProjectsSection
