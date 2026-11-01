import AboutUs from "@/components/Home/AboutUs";
import Banner from "@/components/Home/Banner";
import CategorySection from "@/components/Home/CategorySection";
import FeaturedStudios from "@/components/Home/FeaturedStudios";
import HostGuarantee from "@/components/Home/HostGuarantee";
import HowBookingWorks from "@/components/Home/HowBookingWorks";

export default function Home() {
  return (
   <div>
    {/* <Banner></Banner>
    <FeaturedStudios></FeaturedStudios>
    <CategorySection></CategorySection> */}
    <HowBookingWorks></HowBookingWorks>
    <AboutUs></AboutUs>
    <HostGuarantee></HostGuarantee>
   </div>
  );
}
