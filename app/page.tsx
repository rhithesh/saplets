import Image from "next/image";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WhyShop from "./components/WhyShop";
import OurValues from "./components/OurValues";
import DogPoem from "./components/DogPoem";
import Footer from "./components/Footer";
import HappyCustomers from "./components/HappyCustomers";

export default function Home() {
  return (
<>
    <Navbar/>
    <Hero/>
    <WhyShop/>
    <DogPoem/>
    <HappyCustomers/>
    <OurValues/>
    <Footer/>
  </>
  );
}
