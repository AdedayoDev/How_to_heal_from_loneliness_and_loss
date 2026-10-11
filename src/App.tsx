import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import MobilePurchaseBar from "./components/layout/MobilePurchaseBar";
import AuthorStory from "./components/sections/AuthorStory";
import AuthorBio from "./components/sections/AuthorBio";
import BookBenefits from "./components/sections/BookBenefits";
import BookAudience from "./components/sections/BookAudience";
import BookPreview from "./components/sections/BookPreview";
import FAQ from "./components/sections/FAQ";
import FinalCTA from "./components/sections/FinalCTA";
import Hero from "./components/sections/Hero";
import PainPoints from "./components/sections/PainPoints";
import OfferSection from "./components/sections/OfferSection";
import ProofStrip from "./components/sections/ProofStrip";
import Testimonials from "./components/sections/Testimonials";

function App() {
  return (
    <div id='top'>
      <Header />
      <main>
        <Hero />
        <PainPoints />
        <ProofStrip />
        <AuthorStory />
        <BookBenefits />
        <BookPreview />
        <AuthorBio />
        <Testimonials />
        <BookAudience />
        <OfferSection />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <MobilePurchaseBar />
    </div>
  );
}

export default App;
