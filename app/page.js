import Navbar from "@/components/Gobal/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import OurServices from "@/components/OurServices/OurServices";
import OurTeam from "@/components/OurTeam/OurTeam";
import Testimonials from "@/components/Testimonials/Testimonials";
import Image from "next/image";

export default function Home() {
  return (
<>
<Navbar />
<Hero />
<OurServices />
<OurTeam />
<Testimonials />
</>
  );
}
