import styled from "styled-components"
import { Link } from "react-router-dom"
const Navigation = props => {
  return(
    <Nav>
      <Link to="/">HOME</Link>
      <Link to="/categoria/uiDesign">UI DESIGN</Link>
      <Link to="/categoria/uxDesign">UX DESIGN</Link>
      <Link to="/categoria/webDesigner">WEB DESIGNER</Link>
      <Link to="/categoria/layoutWebsite">LAYOUT</Link>
    </Nav>
  )
}
const Nav = styled.nav`
  display: flex ;
  align-items:center ;
  gap: 10px ;
  a{
    color: inherit;
  }
`
export default Navigation;