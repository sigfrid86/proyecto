import styled from "styled-components";
const SkillCard = props => {
  return (
    <Wrap>
      <Icon color={props.color}/>
      <h5>{props.name}</h5>
      <p>{props.level}%</p>
      <Loader quantity={props.level} />
    </Wrap>
  )
}
const Wrap = styled.div`
  width:100% ;
  border: 1px solid #323444;
  padding: 20px;
  border-radius:10px ;
  position:relative ;
  h5{
    font-size: 1.5rem;
  }
  p{
    text-align:right ;
  }
  @media screen and (max-width: 768px) {
    h5{
      text-align:center ;
      padding-top:20px ;
    }
  }
`
const Loader = styled.div`
  width:100% ;
  height:15px ;
  border-radius:10px ;
  border:1px solid #ffae28 ;
  margin-top:10px ;
  position:relative ;
  overflow:hidden ;
  &:before{
    content:"";
    position:absolute ;
    width:${props => props.quantity}%;
    height:100%;
    background-color:#ffae28;
  }
`
const Icon = styled.div`
  width:30px ;
  height:30px ;
  border-radius:50%;
  position:absolute ;
  background-color:${props => props.color};
  right:-15px ;
  top:-15px ;
  @media screen and (max-width: 768px) {
    right:calc(50% - 15px);
  }
`
export default SkillCard;