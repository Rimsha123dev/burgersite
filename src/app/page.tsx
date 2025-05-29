
import Banner from "./components/Banner";
import Card from "./components/Card";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";
import MenuItem from "./components/MenuItem"
import Navbar from "./components/Navbar";
import Offer from "./components/Offer";
// import ProductCard from "./components/Productcard";
import Productlist from "./components/Productlist";
import Progressor from "./components/Progressor";
import Testimonials from "./components/Testimonials";

export default function Home() {
  return (
    <div className="bg-gradient-to-r from-black to-slate-700 text-white min-h-screen">
    <Navbar/>
    <Carousel/>
    <Progressor/>
    <Productlist/>
    <MenuItem/>
    <Banner/>
    <Offer/>
    <Card/>
    <Testimonials/>
  
    <Footer/>



    </div>

    
  )
}
