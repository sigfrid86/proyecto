import styled from "styled-components"
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
const WorkLoadingCard = props => {
  return(
    <SkeletonTheme  baseColor="#262435" highlightColor="#323444">
      <Wrap>
        <Image />
        <Data>
          <Date>
            <Skeleton />
          </Date>
          <Title><Skeleton /></Title>
          <Excerpt>
            <Skeleton count={4} />
          </Excerpt>
          <ReadMore>
            <Skeleton />
          </ReadMore>
        </Data>
      </Wrap>
    </SkeletonTheme>
  )
}
const Wrap = styled.div`
  width:100% ;
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
`
const Image = styled.div`
  width:100% ;
  aspect-ratio: 16 / 9 ;
  background: #262435;
`
const Data = styled.div`
  padding: 15px ;
`
const Date = styled.div`
  display: block ;
  span{
    width: 90px ;
  }
`
const Title = styled.h4`
  margin-top:9px;
`
const Excerpt = styled.div`
  margin-top: 9px;
`
const ReadMore = styled.div`
  display: flex ;
  margin-top:9px ;
  justify-content: flex-end ;
  span{
    width: 90px ;
  }
`

export default WorkLoadingCard