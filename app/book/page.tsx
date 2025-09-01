import ServicesPage from "../components/Services"
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Dog Food Manufacturer in India | SAPLPets",
  description:
    "SAPLPets is a trusted dog food manufacturer in India. Offering organic, premium, and custom formulations with global supply.",
};


export default function Page(){

    return (

        <ServicesPage/>
    )
}