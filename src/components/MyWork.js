import { useEffect, useState } from 'react';
import styled from 'styled-components';
import WorkCard from './WorkCard';
import WorkLoadingCard from './WorkLoadingCard';
import * as contentful from 'contentful';
const MyWork = () => {
  var client = contentful.createClient(
    {
      space: '9c1vmmkczq1u',
      accessToken: '0ZRftdas_5Ha3Ytlr8zXM_4YFGMvXf7AC_rEHJ3wxXo' 
    }
  )
  const [isLoading , setIsLoading] = useState(true);
  const [data, setData] = useState([])
  useEffect(()=>{
    client.getEntries({limit:3,  content_type: 'jobPortfolio'})
      .then(entries => {
        setData(entries.items)
        setIsLoading(false)
      })
      .catch(err=>{
        console.log(err)
      })
  },[])
  return(
    <Wrap>
      <h2>My Work</h2>
      <WorkGrid>
        {isLoading &&
          <>
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
  min-height: 650px;
  h2{
    text-align:center ;
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
export default MyWork;