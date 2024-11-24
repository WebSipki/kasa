import React from "react";
import { createBrowserRouter, Outlet } from "react-router-dom";
import HomePage from "./pages/Homepage";
import ApartementPage from "./pages/ApartementPage";
import Footer from "./layout/Footer";
import Main from "./layout/Main";
import Navbar from "./components/Navbar";
import About from "./pages/About";

const HeaderFooterLayout = () =>{
    return (
    <>
      <Navbar />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </>
    );
}
export const router = createBrowserRouter([
    {
       
        element: <HeaderFooterLayout />,
        errorElement: <h1>404 not found</h1>,
        children: [
            {
               path: "/",
               element: <HomePage />
            },
            {
                path: "/flat",
                element: <ApartementPage />
            },
            {
                path: "/about",
                element: <About />
            }
        ]
    }
]);
