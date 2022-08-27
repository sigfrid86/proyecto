import styled from "styled-components";
import { useFormik } from "formik";
import * as Yup from "yup";
const Footer = props => {
  const formik = useFormik({
    initialValues:{
      name: "",
      lastName:"",
      email:"",
      message:""
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Este campo es requerido"),
      lastName: Yup.string().required("Este campo es requerido"),
      email: Yup.string().email("Este campo debe ser un email válido").required("Este campo es requerido"),
      message: Yup.string().required("Este campo es requerido")
    }),
    onSubmit: values => {
      console.log(values);
      alert("Formulario enviado")
    }
  })
  return(
    <FooterStyled >
      <h3>Contact me</h3>
      <form onSubmit={formik.handleSubmit}>
        <Grid count="2">
          <Input>
            <label htmlFor="name">Nombres</label><br/>
            <input
              id="name"
              name="name"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.name}
              />
            {formik.errors.name ? <p className="error">{formik.errors.name}</p> : null}
          </Input>
          <Input>
            <label htmlFor="lastName">Apellidos</label><br/>
            <input
              id="lastName"
              name="lastName"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.lastName}
              />
            {formik.errors.lastName ? <p className="error">{formik.errors.lastName}</p> : null}
          </Input>
        </Grid>
        <Grid count="1">
          <Input >
            <label htmlFor="email">E mail</label><br/>
            <input
              id="email"
              name="email"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.email}
              />
            {formik.errors.email ? <p className="error">{formik.errors.email}</p> : null}
          </Input>
        </Grid>
        <Grid count="1">
          <Input>
            <label htmlFor="message">Mensajes</label><br/>
            <input
              className="message"
              id="message"
              name="message"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.message}
              />
            {formik.errors.message ? <p className="error">{formik.errors.message}</p> : null}
          </Input>
        </Grid>
        <Submit>
          <button type="submit">Enviar</button>
        </Submit>
      </form>
    </FooterStyled>
  )
}
const FooterStyled = styled.footer`
  background-color: #262435;
  padding:50px 5% ;
  color: #fff;
  h3{
    text-align:center ;
    margin-bottom:1em ;
    font-size: 2.5rem;
  }
`
const Grid = styled.div`
  display: grid ;
  grid-template-columns: repeat(${props=>props.count}, 1fr);
  gap:20px;
  margin:20px 0;
`
const Input = styled.div`
  label{
    font-size: 1.2rem;
    margin-bottom: 5px;
  }
  input{
    width: 100%;
    height:50px ;
    font-size:1.5rem ;
  }
  .message{
    height:200px ;
  }
  .error{
    color:red ;
  }
`
const Submit = styled.div`
  display: flex ;
  justify-content: center ;
  margin-top:2em ;
  button{
    padding:.5em 1em;
    font-size: 1.5rem;
    background-color: #323444;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: all .3s ease-in-out;
    &:hover{
      background-color: #fff;
      color: #262435;
    }
  }
`
export default Footer;