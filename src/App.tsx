import "./App.css";
import { BrowserRouter } from "react-router-dom";
import NavBar from "./component/TopBar";
import Footer from "./component/Footer";
import AnimatorRoute from "./AnimatorRoute";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <NavBar />
      <main>
        <AnimatorRoute />
      </main>
      <footer>
        <Footer />
      </footer>
    </BrowserRouter>
  );
}

export default App;
