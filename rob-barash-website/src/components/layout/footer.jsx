//Gonna put social stuff here
import React from "react"
import footerStyles from "../layout/footer.module.css"
import { Container } from "react-bootstrap"
const Footer = () => (
  <footer className={footerStyles.footer}>
    <Container>
      <span className="text-muted">This is our footer container</span>
    </Container>
  </footer>
)

export default Footer

//Shift-Alt-F to fix format of code