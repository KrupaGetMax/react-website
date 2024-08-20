// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Nav from "./Components/Navbar/Nav";
// import "./App.css";
// import Home from "./Components/Home/Home";
// import Feature from "./Components/Home/Feature";
// import Cards from "./Components/Home/Cards";
// import Blogs from "./Components/Home/Blogs";
// import Footer from "./Components/Home/Footer";
// import Portfolio from "./Components/Home/Portfolio";
// import Testimonial from "./Components/Home/Testimonial";
// import Brand from "./Components/Home/Brand";
// import Login from "./Components/Login/Login";

// function App() {
//   return (
//     <Router>
//       <Home />
//       <Feature />
//       <Cards />
//       <Brand />
//       <Blogs />
//       <Portfolio />
//       <Testimonial />
//       <Routes>
//         {/* Home page */}

//         <Route path="/login" element={<Login />} />
//       </Routes>
//       <Footer />
//     </Router>
//   );
// }

// export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./Components/Navbar/Nav";
import "./App.css";
import Home from "./Components/Home/Home";
import Feature from "./Components/Home/Feature";
import Cards from "./Components/Home/Cards";
import Blogs from "./Components/Home/Blogs";
import Footer from "./Components/Home/Footer";
import Portfolio from "./Components/Home/Portfolio";
import Testimonial from "./Components/Home/Testimonial";
import Brand from "./Components/Home/Brand";
import Login from "./Components/Login/Login";
import Post from "./Components/Home/Post";
import CTA from "./Components/CTA/CTA";
import Tools from "./Components/CTA/Tools";
import Newsletter from "./Components/Newsletter/Newsletter";
import LearnWebby from "./Components/Webby/LearnWebby";
import Website from "./Components/Web/Website";

function App() {
  return (
    <Router>
      <Routes>
        {/* Route for the Home page that includes all the sections */}
        <Route
          path="/"
          element={
            <>
              <Home />
              <Feature />
              <Cards />
              <Brand />
              <Blogs />
              <Portfolio />
              <Newsletter />
              <Testimonial />
              <Post />
              <CTA />
              <Tools />
            </>
          }
        />

        {/* Route for the Login page that only shows the Login component */}
        <Route path="/login" element={<Login />} />
        <Route path="/learnwebby" element={<LearnWebby />} />
        <Route path="/visitwebsite" element={<Website />} />
      </Routes>
      <Footer /> {/* Footer should be visible on all routes */}
    </Router>
  );
}

export default App;
