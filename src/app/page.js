import Header from "./components/header";
import Hero from "./components/hero";
import AreaOfWork from "./components/area-of-work";
import Expertise from "./components/expertise";
import ContactForm from "./components/contact";
import Footer from "./components/footer";
import Hero2 from "./components/hero2";

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <Hero2 />
        <AreaOfWork />
        <Expertise />
      </main>
      <Footer />
    </div>
  );
}
