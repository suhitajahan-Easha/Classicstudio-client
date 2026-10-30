import AboutUs from "@/components/Home/AboutUs";
import Banner from "@/components/Home/Banner";
import HostGuarantee from "@/components/Home/HostGuarantee";
import HowBookingWorks from "@/components/Home/HowBookingWorks";
import Navbar from "@/components/Home/Navbar";
import Link from "next/link";


export default function Home() {
  return (
   <div>
    <Banner></Banner>
    <HowBookingWorks></HowBookingWorks>
    <AboutUs></AboutUs>
    <HostGuarantee></HostGuarantee>
   </div>
  );
}
