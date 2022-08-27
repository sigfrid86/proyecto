import { useState, useEffect } from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"
import { useLocation } from "react-router-dom";
const Navigation = props => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false)
  const handleOpenMenu = () => {
    setIsOpen(!isOpen)
  }
  useEffect(() => {
    setIsOpen(false)
  }, [location]);
  return(<>
    <div>
      <Nav className={isOpen ? 'open' : ''}>
        <Link 
          to="/">
            HOME
        </Link>
        <Link 
          to="/categoria/uiDesign">
            UI DESIGN
        </Link>
        <Link 
          to="/categoria/uxDesign">
            UX DESIGN
        </Link>
        <Link 
          to="/categoria/webDesigner">
            WEB DESIGNER
        </Link>
        <Link 
          to="/categoria/layoutWebsite">
            LAYOUT
        </Link>
      </Nav>
      <Hamburguesa onClick={handleOpenMenu}>
        <span className="material-icons-outlined">menu</span>   
      </Hamburguesa>
    </div>
  </>)
}
const Nav = styled.nav`
  display: flex ;
  align-items:center ;
  gap: 10px ;
  a{
    color: inherit;
    @media screen and (max-width: 768px) {
      display: block ;
      width:100% ;
      text-align:center ;
      padding: 15px 5px;
      border-bottom:1px solid #FFF ;
    }
  }
  @media screen and (max-width: 768px) {
    transition: .3s all ease-in-out ;
    width:320px ;
    height:100vh ;
    position:absolute ;
    display:block ;
    background:#000 ;
    top:0 ;
    left:-320px ;
    &.open{
      left:0 ;
    }
  }
`
const Hamburguesa = styled.div`
  display:none ;
  cursor: pointer;
  @media screen and (max-width: 768px) {
    display:block ;
  }
`
export default Navigation;