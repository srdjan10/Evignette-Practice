import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./input.css";
import MainLayout from "./components/MainLayout";
import Home from "./pages/Home";
import BuyVignette from "./pages/BuyVignette";
import Countries from "./pages/Countries";
import { PriceVignette } from "./pages/PriceVignette";
import Contact from "./pages/Contact";
function App() {
  return (
    <div>
      {" "}
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <MainLayout>
                <Home />
              </MainLayout>
            }
          />
        </Routes>
        <Routes>
          <Route
            path="/BuyVignette"
            element={
              <MainLayout>
                <BuyVignette />
              </MainLayout>
            }
          />
        </Routes>
        <Routes>
          <Route
            path="/Countries"
            element={
              <MainLayout>
                <Countries />
              </MainLayout>
            }
          />
        </Routes>
        <Routes>
          <Route
            path="/PriceVignette"
            element={
              <MainLayout>
                <PriceVignette />
              </MainLayout>
            }
          />
        </Routes>
        <Routes>
          <Route
            path="/Contact"
            element={
              <MainLayout>
                <Contact />
              </MainLayout>
            }
          />
        </Routes>
        {/*         <Routes>
          <Route
            path="/Contact"
            element={
              <MainLayout>
                <Contact />
              </MainLayout>
            }
          />
        </Routes> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
