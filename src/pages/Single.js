import { useState, useEffect } from "react"
import BigLoader from "../components/BigLoader"
import * as contentful from 'contentful';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { useParams } from "react-router-dom"
import Job from "../components/Job";
const Single = props => {
  let { id } = useParams();
  var client = contentful.createClient(
    {
      space: '9c1vmmkczq1u',
      accessToken: '0ZRftdas_5Ha3Ytlr8zXM_4YFGMvXf7AC_rEHJ3wxXo' 
    }
  )
  const [isLoading, setIsLoading] = useState(true)
  const [data, setData] = useState(null)
  useEffect(()=>{
    client.getEntry(id)
    .then(entry => {
      let richTextContent = documentToHtmlString(entry.fields.content) 
      entry.fields.richTextContent = richTextContent
      setData(entry)
      setIsLoading(false)
    })
    .catch(err=>{
      console.log(err)
    })
  },[])
  return(<>
    {isLoading && 
      <BigLoader />
    }
    {!isLoading && 
      <Job {...data.fields} saludo="Hola Zen"/>
    }
  </>)
}
export default Single