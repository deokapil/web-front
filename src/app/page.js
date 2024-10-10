import Header from "./components/header";
import Hero from "./components/hero";
import AreaOfWork from "./components/area-of-work";
import Expertise from "./components/expertise";
import ContactForm from "./components/contact";
import Footer from "./components/footer";
import Hero2 from "./components/hero2";
import Services from "./components/services";
import Works from "./components/works";
import Recent from "./components/recent";
import Partners from "./components/partners";
import LogoTicker from "./components/logo-ticker";

export default function Home() {
  return (
    <div>
      <div className="bg-[url('/hero-2.png')] bg-cover">
        <Header light />
        <Hero2 />
      </div>
      <LogoTicker />
      <Services />
      <Works />
      {/* <AreaOfWork /> */}
      <Recent />
      <Expertise />
      <Partners />
      <Footer />
    </div>
  );
}
