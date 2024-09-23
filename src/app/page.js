import Header from "./components/header";
import Hero from "./components/hero";
import AreaOfWork from "./components/area-of-work";
import Expertise from "./components/expertise";
import ContactForm from "./components/contact";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <AreaOfWork />
        <Expertise />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
