import { Routes, Route, useLocation } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Quiz from "./pages/Quiz";
import { AnimatePresence } from "framer-motion";
const AnimatorRoute = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/Algorithm.io/" element={<HomePage />} />
        <Route path="/Algorithm.io/quiz" element={<Quiz />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatorRoute;
