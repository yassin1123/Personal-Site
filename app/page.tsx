import { Building } from "@/components/Building";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { MotionProvider } from "@/components/MotionProvider";
import { Notes } from "@/components/Notes";
import { Work } from "@/components/Work";

export default function Home() {
  return (
    <MotionProvider>
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
