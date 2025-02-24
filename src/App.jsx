import { Navbar } from './Components/Navbar/Navbar.jsx';
import { Hero } from './Components/Hero/Hero.jsx';
import { Menu } from './Components/Menu/Menu.jsx';
import { Services } from './Components/Services/Services.jsx';
import { About } from './Components/About/About.jsx';
import { Contact } from "./Components/Contact/Contact.jsx";
import { Footer } from "./Components/Footer/Footer.jsx";

export const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Menu />
      <Services />
      <About />
      <Contact />
      <Footer />
    </>
  );
};
