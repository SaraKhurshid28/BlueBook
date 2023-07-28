import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  AboutUs,
  ContactUs,
  EstimationFees,
  Home,
  Payments,
  Services,
  Testimonials,
  WorkSample,
} from "./Components";
import PublicRoute from "./Utilities/publicRouting";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<PublicRoute />}>
          <Route extact path="/" element={<Home />} />
          <Route extact path="home" element={<Home />} />
          <Route extact path="services" element={<Services />} />
          <Route extact path="contactus" element={<ContactUs />} />
          <Route extact path="testimonials" element={<Testimonials />} />
          <Route extact path="fee" element={<EstimationFees />} />
          <Route extact path="worksample" element={<WorkSample />} />
          <Route extact path="aboutus" element={<AboutUs />} />
          <Route extact path="payment" element={<Payments />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
