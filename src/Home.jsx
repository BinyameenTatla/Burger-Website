import { Services } from './Components/Services/Services.jsx';
import { Menu } from './Components/Menu/Menu.jsx';
import { About } from './Components/About/About.jsx';
import { Contact } from './Components/Contact/Contact.jsx';
import { Hero } from './Components/Hero/Hero.jsx';



 export const Home = () => {
    return (
        <>
            <Hero />
            <Services />
            <Menu />
            <About />
            <Contact />
        </>
    );
};

