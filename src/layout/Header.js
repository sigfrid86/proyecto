import styled from "styled-components";
import Navigation from "./Navigation";
const Header = props => {
  return(<>
    <Head>
      <Logo>
        <h1>MR</h1>
      </Logo>
      <Navigation />
    </Head>
  </>)
}
const Head = styled.header`
  width:100% ;
  height:60px;
  background-color:rgba(0,0,0,0.4);
  position:fixed ;
  z-index:8888;
  padding:0 5% ;
  color:#FFF;
  display: flex ;
  align-items:center ;
  justify-content:space-between ;
`
const Ghots = styled.div`
  width:100% ;
  height:60px;
`
const Logo = styled.div`
  width:100px ;
  h1{
    margin-bottom:0 ;
  }
`
export default Header;