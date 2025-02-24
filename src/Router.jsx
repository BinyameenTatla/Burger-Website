import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"; // Added Outlet import
import { Menu } from './Components/Menu/Menu.jsx';
import { Services } from './Components/Services/Services.jsx';
import { About } from './Components/About/About.jsx';
import { Contact } from "./Components/Contact/Contact.jsx";
import { Footer } from "./Components/Footer/Footer.jsx";
import { Navbar } from "./Components/Navbar/Navbar.jsx";
import { Home } from "./Home.jsx";

const AppLayout = () => (
    <>
        <Navbar />
        <Outlet /> {/* This will render the nested routes */}
        <Footer />
    </>
);

export const Routers = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <AppLayout />, // Layout that includes Navbar and Footer
            children: [
                { path: "/", element: <Home /> }, // Home route
                { path: "/menu", element: <Menu /> }, // Menu route
                { path: "/services", element: <Services /> }, // Services route
                { path: "/about", element: <About /> }, // About route
                { path: "/contact", element: <Contact /> }, // Contact route
            ],
        },
    ]);

    return <RouterProvider router={router} />; // Provide the router to the application
};
