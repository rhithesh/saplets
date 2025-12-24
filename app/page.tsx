import Hero from "./components/Hero";
import WhyShop from "./components/WhyShop";
import OurValues from "./components/OurValues";
import CompanySlider from "./components/newComponent";
import MapComponent from "./components/MapComponent";
import PackagingFormats from "./components/Packaging";
import ProcessSnapshot from "./components/ProcessSnapshot";
import ProductPortfolio from "./components/productprotfolio";

export default function Home() {
  return (
<>
    <Hero/>
        <CompanySlider/>

            <WhyShop/>
            <ProductPortfolio/>
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
