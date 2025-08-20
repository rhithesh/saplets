import Image from "next/image";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WhyShop from "./components/WhyShop";
import OurValues from "./components/OurValues";
import DogPoem from "./components/DogPoem";
import Footer from "./components/Footer";
import HappyCustomers from "./components/HappyCustomers";
import PawJourney from "./components/newComponent";
import PetPersonality from "./components/Happy"
import CustomerLove from "./components/CustomerLove"
import SplitScrollShowcase from "./components/SplitScroll";
import ScrollSwapShowcase from "./components/ScrollSwap";
import FullSnapSections from "./components/Swap"
import CompanySlider from "./components/newComponent"
import MobileCallBar from "./components/MobileCall";
import TopBar from "./components/TopBar";
import MapComponent from "./components/MapComponent";
import PackagingFormats from "./components/Packaging";
import ProcessSnapshot from "./components/ProcessSnapshot";

export default function Home() {
  return (
<>
    <Hero/>
        <CompanySlider/>

            <WhyShop/>
            <ProcessSnapshot/>


    {/* <SplitScrollShowcase/> */}
    {/* <div className=" bg-white">
          <FullSnapSections/>


    </div> */}
        {/* <PetPersonality/> */}

    {/* <CustomerLove/> */}
    {/* <ScrollSwapShowcase/> */}
    {/* <DogPoem/> */}
    {/* <HappyCustomers/> */}
    <PackagingFormats/>
    <MapComponent/>
    <OurValues/>

    
  </>
  );
}
