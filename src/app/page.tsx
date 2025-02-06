
import Banner from "./components/Banner";
import Card from "./components/Card";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Offer from "./components/Offer";
import Productlist from "./components/Productlist";
import Progressor from "./components/Progressor";
import Testimonials from "./components/Testimonials";

export default function Home() {
  return (
    <div className="bg-gradient-to-r from-black to-gray-500 text-white min-h-screen">hello main div
    <Navbar/>
    <Carousel/>
    <Progressor/>
    <Productlist/>
    <Banner/>
    <Offer/>
    <Card/>
    <Testimonials/>
    <Footer/>



    </div>

    
  )
}
