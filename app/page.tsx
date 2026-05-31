import { Building } from "@/components/Building";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { MotionProvider } from "@/components/MotionProvider";
import { Notes } from "@/components/Notes";
import { Work } from "@/components/Work";
import { HomeNav } from "@/components/chrome/HomeNav";
import { ScrollProgress } from "@/components/chrome/ScrollProgress";

export default function Home() {
  return (
    <MotionProvider>
      <ScrollProgress />
      <HomeNav />
      <Hero />
      <main id="main">
        <Building />
        <Work />
        <Notes />
      </main>
      <Footer />
    </MotionProvider>
  );
}
