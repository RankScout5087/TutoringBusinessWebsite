import { Routes, Route } from "react-router-dom";
import App from "./App";
import Form from "./Form";
import Services from "./Services";
import ScrollToTop from "./ScrollToTop";
import Tutors from "./Tutors";
export default function AppRoutes() {
  return (
    <>
    <ScrollToTop/>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/form" element={<Form />} />
      <Route path="/services" element={<Services />} />
      <Route path="/tutors" element={<Tutors />}/>
    </Routes>
    </>
  );
}