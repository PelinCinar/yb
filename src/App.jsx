import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import ContactForm from "./pages/Contact/ContactForm";
import CardDetail from "./pages/CardDetail/CardDetail"; // CardDetail bileşenini import edin
import { Provider } from "react-redux"; // Redux Provider'ı import edin
import store from "./redux/store"; // Store'unuzu import edin
import { Routes, Route } from "react-router-dom";
import FAQPage from "./pages/FAQPage/FAQPage";
import Offer from "./pages/Offer/Offer";

const App = () => {
  return (
    <Provider store={store}>
      {" "}
      {/* Store'u burada Provider ile sarın */}
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/offer" element={<Offer />} />
          <Route path="/card/:id" element={<CardDetail />} />
          <Route path="/faq" element={<FAQPage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
