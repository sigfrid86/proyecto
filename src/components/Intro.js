import styled from "styled-components"
const Intro = props => {
  return(
    <Wrap>
      <Name>
        <h1>Miguel Angel <span>Rivera.</span></h1>
      </Name>
      <Content>
        <h2>Fullstack developer</h2>
        <p>I'm a fullstack developer with a passion for creating beautiful and functional websites.</p>
      </Content>
    </Wrap>
  )
}
const Name = styled.div`
  align-self:center ;
  font-size:90px ;
  h1{
    line-height:105px ;
    text-shadow: 1px 2px 12px #000000;
  }
  span{
    display:block ;
  }
  &:after{
    content:'';
    display:block ;
    width:30% ;
    height:15px ;
    margin-top:20px ;
    background-color: #ffae28;
    @media screen and (max-width: 768px) {
      width: 100% ;
    }
  }
  @media screen and (max-width: 1200px) {
    font-size:80px ;
  }
  @media screen and (max-width: 768px) {
    text-align:center ;
    margin-top:50px ;
  }
  @media screen and (max-width: 480px) {
    font-size:50px ;
  }
`
const Content = styled.div`
  align-self:center ;
  padding:10% ;
  padding-left:15% ;
  h2{
    font-size:40px ;
  }
  p{
    font-size:20px ;
  }
  @media screen and (max-width: 1200px) {
    padding-left:25% ;
  }
  @media screen and (max-width: 768px) {
    text-align:center ;
    padding:0 ;
    margin-top:50px ;
  }
  
`
const Wrap = styled.section`
  background-color: #323444;
  background-image: url(/img/henry.png);
  background-size: 460px 680px;
  background-repeat: no-repeat;
  background-position: 40% 100%;
  width:100%;
  padding: 50px 10% ;
  color: #fff;
  min-height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 100px;
  @media screen and (max-width: 1024px) {
    gap: 50px;
    padding: 50px 5% ;
  }
  @media screen and (max-width: 768px) {
    display: block;
    background-size: 300px 480px;
    background-position: 40% 160%;
  }
`
export default Intro