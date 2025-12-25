import HeroCarousel from "./hero-carousel/HeroCarousel.component";
import TextContent from "./text-content/TextContent.component";

export default function HeroSection() {
  return (
    <section className="grid lg:grid-cols-2 gap-24 items-center">
      <TextContent />
      <HeroCarousel />
    </section>
  );
}
