import CollectibleSneakers from "@/components/Landing/CollectibleSneakers";
import TheBestOfTheBest from "@/components/Landing/TheBestOfTheBest";
import WhyJoinUs from "@/components/Landing/WhyJoinUs";
import BecauseTheyLoveUs from "@/components/Landing/BecauseTheyLoveUs";
import GrowYourCollection from "@/components/Landing/GrowYourCollection";
import World from "@/components/Landing/World";

export default function Home() {
  return (
    <main>
      <CollectibleSneakers />
      <TheBestOfTheBest />
      <WhyJoinUs />
      <BecauseTheyLoveUs />
      <GrowYourCollection />
      <World />
    </main>
  );
}
