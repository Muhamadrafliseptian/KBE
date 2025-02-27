import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import IndexHome from "./pages/home/IndexHome";
import IndexGallery from "./pages/gallery/IndexGallery";
import IndexContact from "./pages/contact/IndexContact";
import IndexProduct from "./pages/product/IndexProduct";
import IndexNews from "./pages/news/IndexNews";
import IndexAbout from "./pages/about_us/IndexAbout";
import Navbar from "./component/header/navbar";
import Footer from "./component/footer/footer";
import WhatsAppButton from "./component/partOf/whatsappButton";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route path="/" element={<IndexHome />} />
          <Route path="/gallery" element={<IndexGallery />} />
          <Route path="/product" element={<IndexProduct />} />
          <Route path="/contact" element={<IndexContact />} />
          <Route path="/news" element={<IndexNews />} />
          <Route path="/about-us" element={<IndexAbout />} />
        </Routes>
        <WhatsAppButton /> {/* Tambahkan tombol WhatsApp */}
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
