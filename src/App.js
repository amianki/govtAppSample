import "./App.css";
import Main from "./components/Main";
import ContactUsPage from "./pages/ContactUsPage";
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import GalleryPage from "./pages/GalleryPage";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes >
      <Route index element={<Main />} />
      <Route path="/contactUsPage" element={<ContactUsPage />} />
      <Route path="/GalleryPage" element={<GalleryPage />} />


      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
