import { HeroSection } from "@/components/home/hero-section";
import { ServicesPreview } from "@/components/home/services-preview";
import { ProjectsPreview } from "@/components/home/projects-preview";
import { AboutPreview } from "@/components/home/about-preview";
import { CTASection } from "@/components/home/cta-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutPreview />
      <ServicesPreview />
      <ProjectsPreview />
      <CTASection />
    </>
  );
}