import React from "react"
import { Helmet } from "react-helmet"
import Layout from "../components/layout/layout"
import "../styles/main.scss"
import "bootstrap/dist/css/bootstrap.min.css"
import { Container } from "react-bootstrap"
import SkillsSection from "../components/sections/skillsSection.jsx"
import fontawesome from "../components/fontawesome"
import ProjectsSection from "../components/sections/projectsSection.jsx"
import {Link} from "gatsby";
import Footer from "../components/layout/footer.jsx"

//Create Header
//Create footer with privacy section
//We are going to use an "Active" prop to switch between images
//Active = 1 is default for Main Banner
//ACtive = 0 is default for Bottom Banner
//Active switches to 0 for Main Banner
//active = 1 switches for Bottom Banner when users scrolls past a certain point.
//Put smooth gradient on the bottom border, make it more crisp.
//Kinda make the component look like the footer
//https://www.w3schools.com/howto/howto_css_bg_change_scroll.asp

//Image sizes differently based on the screensize.
//NEed to determine the screen sizes to toggle images specifically
//Probably need to make several cuts of the same image because of this

//0rem 0px
export default function Index() {
  return (
    <div>
    <div className="sunset-image">
      <Container>
        <Layout>
          <div className={"header-text"}>
          <h1>Hi, my name is Rob!</h1> 
          <p className={'move-text'} style={{color:"#d97802"}}>I'm a software developer with focuses on .NET & React</p>
          <p className={'p-notice'}></p>
        </div>
        </Layout>
          </Container>
      </div>
      <SkillsSection/>
      <ProjectsSection/>
      </div>
  )
}


/*
      <Footer/>

          <span className="photo-credits">
          <p style={{fontWeight:"bold",color:"#363136",marginBottom:"0"}}>Photo taken in</p><p style={{margin:"0",paddingTop:"0"}}> Ko Pha Ngan, Thailand</p> 
          </span>
          
             <p>Plan to Repeat the bottom of the ocean background when the user is scrollign on the Y-Axis. That way
            the container is consistent and creates a pretty theme that matches the main picture for when we put future components</p><br/>
            <br/>
            <p>The links in the navbar should change to HREF's that stay on the single page but link down into the component</p>
            <p>From there we will have a snippet of design, and then a "Read More" that actually takes us to a new page!</p>
            <br/>
            <br/>
            <br/>
            */
