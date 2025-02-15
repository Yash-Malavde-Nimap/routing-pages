import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
// import NotFound from "./components/NotFound";
import LoginPage from "./components/Login";
import ErrorBoundary from "./ErrorBoundary";

const App = () => {
  return (
    <div>
      <ErrorBoundary>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="/not-found" element={<NotFound />} /> */}
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </ErrorBoundary>
    </div>
  );
};

export default App;
