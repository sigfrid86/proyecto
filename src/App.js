import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/Home";
import Category from "./pages/Category";
import Single from "./pages/Single";
import Body from "./layout/Body";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Body />}>
          <Route path="/" index element={<Home />} />
          <Route path="/categoria/:id" element={<Category />} />
          <Route path="/entrada/:id" element={<Single />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
