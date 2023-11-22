import "./App.css";
import { HashRouter } from "react-router-dom";
import NavBar from "./component/TopBar";
import Footer from "./component/Footer";
import AnimatorRoute from "./AnimatorRoute";

function App() {
  return (
    <HashRouter>
      <NavBar />
      <main>
        <AnimatorRoute />
      </main>
      <footer>
        <Footer />
      </footer>
    </HashRouter>
  );
}

export default App;
