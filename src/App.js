import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AboutPage from "./pages/about-page/AboutPage";
import HomePage from "./pages/home-page/HomePage";
import { FeedbackProvider } from "./context/FeedbackContext";
const App = () => {
  return (
    <FeedbackProvider>
      <Router>
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </Router>
    </FeedbackProvider>
  );
};

export default App;
