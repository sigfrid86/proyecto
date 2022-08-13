import styled from "styled-components";
const BigLoader = props => {
  return (
    <Wrap>
      <div className="loader4"></div>
    </Wrap>
  );
}


const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  .loader4 {
    width:45px;
    height:45px;
    display:inline-block;
    padding:0px;
    border-radius:100%;
    border:5px solid;
    border-top-color:rgba(246, 36, 89, 1);
    border-bottom-color:rgba(255,255,255, 0.3);
    border-left-color:rgba(246, 36, 89, 1);
    border-right-color:rgba(255,255,255, 0.3);
    -webkit-animation: loader4 1s ease-in-out infinite;
    animation: loader4 1s ease-in-out infinite;
  }
  @keyframes loader4 {
    from {transform: rotate(0deg);}
    to {transform: rotate(360deg);}
  }
  @-webkit-keyframes loader4 {
    from {-webkit-transform: rotate(0deg);}
    to {-webkit-transform: rotate(360deg);}
  }
`
export default BigLoader;