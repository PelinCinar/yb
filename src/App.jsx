import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";

import CardDetail from "./pages/CardDetail/CardDetail"; 
import { Provider } from "react-redux"; 
import store from "./redux/store"; 
import { Routes, Route } from "react-router-dom";
import FAQPage from "./pages/FAQPage/FAQPage";
import EducationDetail from "./pages/Education/EducationDetail";
import Contact from "./pages/Contact/Contact";
import ContactView from "./components/Contact/ContactView";
import OfferView from "./components/OfferContainer/OfferView";
import Offer from "./pages/Offer/Offer";
import BlogList from "./components/Blog/BlogList";
import BlogDetail from "./components/Blog/BlogDetail";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";



const App = () => {
  return (
    <Provider store={store}>
      {" "}
      <BrowserRouter>
 
        <Navbar />
        <ScrollToTop/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/blog" element={<BlogList/>} />
          <Route path="/blog/:id" element={<BlogDetail/>} />

          <Route path="/contact/view" element={<ContactView/>} />
          < Route path="/offer" element={<Offer/>}/>
          <Route path="/offer/view" element={<OfferView/>} />
          <Route path="/card/:id" element={<CardDetail />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/education/:id" element={<EducationDetail/>}/>


        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
  