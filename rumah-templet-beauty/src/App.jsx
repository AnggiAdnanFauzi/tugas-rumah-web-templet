import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Templates } from "./pages/Templates";
import { TemplateDetail } from "./pages/TemplateDetail";
import { TemplatePreview } from "./pages/TemplatePreview";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { NotFound } from "./pages/NotFound";
import { ScrollToTop } from "./components/common/ScrollToTop";
import { FloatingOrbs } from "./components/ui/Parallax";
import { FloatingWhatsApp } from "./components/ui/FloatingWhatsApp";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <FloatingOrbs />
      <FloatingWhatsApp />
      <div className="relative z-0">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/templates" element={<Templates />} />
          <Route path="/templates/:slug" element={<TemplateDetail />} />
          <Route path="/templates/:slug/preview" element={<TemplatePreview />} />
          <Route path="/preview/:slug" element={<TemplatePreview />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
