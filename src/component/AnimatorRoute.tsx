import { Routes, Route, useLocation } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Quiz from "../pages/Quiz";
import { AnimatePresence } from "framer-motion";
const AnimatorRoute = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route path="/quiz" element={<Quiz />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatorRoute;
