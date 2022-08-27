import styled from "styled-components";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import * as contentful from "contentful";
import WorkCard from "../components/WorkCard";
import WorkLoadingCard from "../components/WorkLoadingCard";
const Category = props => {
  let { categoryId } = useParams();
  const [ isLoading, setIsLoading ] = useState(true)
  const [ data, setData ] = useState(null)
  var client = contentful.createClient(
    {
      space: '9c1vmmkczq1u',
      accessToken: '0ZRftdas_5Ha3Ytlr8zXM_4YFGMvXf7AC_rEHJ3wxXo' 
    }
  )
  useEffect(()=>{
    client.getEntries({
      content_type: 'jobPortfolio',
      "metadata.tags.sys.id[in]": categoryId,
    })
    .then(entries => {
      setData(entries.items)
      setIsLoading(false)
    })
    .catch(err=>{
      console.log(err)
    })
  },[categoryId])
  return(
    <Wrap>
      <h2>Category {categoryId}</h2>
      <WorkGrid>
        {isLoading &&
          <>
            <WorkLoadingCard />
            <WorkLoadingCard />
            <WorkLoadingCard />
            <WorkLoadingCard />
            <WorkLoadingCard />
            <WorkLoadingCard />
          </> 
        }
        {!isLoading && 
          data.map((entry,index)=>{
            return(<WorkCard key={entry.sys.id} entry={entry} />)
          })
        }
      </WorkGrid>
    </Wrap>
  )
}
const Wrap = styled.section`
  background-color: #323444;
  width:100%;
  padding: 50px 10% ;
  color: #fff;
  min-height: 100vh;
  h2{
    text-align:center ;
    margin-top: 50px; ;
    margin-bottom: 50px;
    font-size: 2.5rem;
  }
`
const WorkGrid = styled.div`
  display: grid ;
  grid-template-columns: repeat(3, 1fr);
  gap:20px;
  @media screen and (max-width: 1024px) {
    row-gap:50px;
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
` 
export default Category