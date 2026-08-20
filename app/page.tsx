import Header from "./components/Header";
import Hero from "./components/Hero";
import WelcomeLetter from "./components/WelcomeLetter";
import Mission from "./components/Mission";
import Treatments from "./components/Treatments";
import WhyChooseUs from "./components/WhyChooseUs";
import BeforeAfter from "./components/BeforeAfter";
import Journey from "./components/Journey";
import Testimonials from "./components/Testimonials";
import Top10Things from "./components/Top10Things";
import Locations from "./components/Locations";
import BookSection from "./components/BookSection";
import QuizCTA from "./components/QuizCTA";
import ContactCTA from "./components/ContactCTA";
import Footer from "./components/Footer";
import MobileActionBar from "./components/MobileActionBar";
import AnimatedStrip from "./components/AnimatedStrip";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <main className="flex-1">
        <AnimatedStrip />
        <Mission />
        <Top10Things />
        <QuizCTA />
        <BookSection />
        <WelcomeLetter />
        <BeforeAfter />
        <Treatments />
        <WhyChooseUs />
        <Journey />
        <Testimonials />
        <Locations />
        <ContactCTA />
      </main>
      <AnimatedStrip />
      <Footer />
      <MobileActionBar />
    </>
  );
}
