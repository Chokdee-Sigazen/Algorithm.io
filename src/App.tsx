import "./App.css";
import { HashRouter } from "react-router-dom";
import NavBar from "./component/TopBar";
import Footer from "./component/Footer";
import { Routes, Route, useLocation } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Quiz from "./pages/Quiz";

function App() {
  const location = useLocation();
  return (
    <HashRouter>
      <NavBar />
      <main>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<HomePage />} />
          <Route path="/quiz" element={<Quiz />} />
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </HashRouter>
  );
}

export default App;
