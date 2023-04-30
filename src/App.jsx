import * as COMPONENTS from "./components";
import * as ICON from "./configs/icon";
import Hero from "./pages/Hero";
import Services from "./pages/Services";
import Achievement from "./pages/Achievement";
import OurWorks from "./pages/OurWorks";
import CompanyList from "./pages/CompanyList";
import Testimonial from "./pages/Testimonial";
import Footer from "./pages/Footer";

function App() {
  return (
    <>
      <COMPONENTS.Navbar />
      <Hero />
      <Services />
      <Achievement />
      <OurWorks />
      <CompanyList />
      <Testimonial />
      <Footer />
    </>
  );
}

export default App;
