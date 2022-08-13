import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
const Body = props => {
  return(<>
    <Header/>
    <Outlet/>
    <Footer/>
  </>)
}
export default Body;