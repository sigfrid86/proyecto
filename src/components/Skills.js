import styled from "styled-components"
import { skillsData } from "../components/skillsData"
import SkillCard from "./SkillCard"
const Skills = props => {
  return(
    <Wrap>
      <h2>My Skills</h2>
      <SkillGrid>
        {skillsData.map(skill => {
          return <SkillCard key={skill.name} {...skill}/>
        })}
      </SkillGrid>
    </Wrap>
  )
}
const Wrap = styled.section`
  background-color: #262435;
  width:100%;
  padding: 50px 10% ;
  color: #fff;
  min-height: 650px;
  h2{
    text-align:center ;
    margin-bottom: 50px;
    font-size: 2.5rem;
  }
`
const SkillGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`
export default Skills