import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import ContactForm from "./pages/Contact/ContactForm";
import Employment from "./pages/Employment/Employment";
import CardDetail from "./pages/CardDetail/CardDetail"; // CardDetail bileşenini import edin
import { Provider } from 'react-redux'; // Redux Provider'ı import edin
import store from './redux/store'; // Store'unuzu import edin
import { Routes, Route } from "react-router-dom"; 
import FAQPage from "./pages/FAQPage/FAQPage";
import Offer from "./pages/Offer/Offer";

const App = () => {
  return (
    <Provider store={store}> {/* Store'u burada Provider ile sarın */}
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/about" element={<About />} /> 
          <Route path="/contact" element={<ContactForm />} /> 
          <Route path="/employment" element={<Employment />} /> 
          <Route path="/offer" element={<Offer />} /> 
          <Route path="/card/:id" element={<CardDetail />} /> {/* Kart detay sayfası için rota */}
          <Route path="/faq" element={<FAQPage />} /> {/* SSS sayfasına yönlendirme */}

        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
