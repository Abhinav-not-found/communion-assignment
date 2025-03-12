import GrowthSection from "@/components/home/GrowthSection";
import HeroSection from "@/components/home/HeroSection";
import TeamSection from "@/components/home/TeamSection";


export default function Home() {
  return (
    <div className=" bg-white">
      <HeroSection/>
      <GrowthSection/>
      <TeamSection/>
    </div>
  );
}
