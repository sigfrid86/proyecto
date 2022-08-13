import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/Home";
import Category from "./pages/Category";
import Single from "./pages/Single";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/categoria" element={<Category />} />
        <Route path="/entrada/:id" element={<Single />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
