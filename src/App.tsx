import "./App.css";
import { BrowserRouter } from "react-router-dom";
import NavBar from "./component/TopBar";
import Footer from "./component/Footer";
import AnimatorRoute from "./component/AnimatorRoute";

function App() {
  return (
    <BrowserRouter>
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
