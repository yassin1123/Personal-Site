import { MotionProvider } from "@/components/MotionProvider";
import { HomeHero } from "@/components/home/Hero";
import { HomeScrollSpy } from "@/components/home/HomeScrollSpy";
import { NotesPreview } from "@/components/home/NotesPreview";
import { SubstrateTeaser } from "@/components/home/SubstrateTeaser";
import { WorkLedger } from "@/components/home/WorkLedger";
import { SiteFooter } from "@/components/site/SiteFooter";

export default function Home() {
  return (
    <MotionProvider>
      <HomeScrollSpy />
      <HomeHero />
      <main id="main">
        <SubstrateTeaser />
        <WorkLedger />
        <NotesPreview />
      </main>
      <SiteFooter />
    </MotionProvider>
  );
}
