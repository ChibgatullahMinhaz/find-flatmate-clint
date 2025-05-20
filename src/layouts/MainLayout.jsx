import React from "react";
import Navbar from "../Components/Navbar";
import { Outlet } from "react-router";
import Footer from "../Components/Footer";
import ScrollToTop from "../Components/UI/ScrollToTop";
import GoTopButton from "../Components/UI/GoTopButton";

const MainLayout = () => {
  return (
    <>
    <ScrollToTop />
    <GoTopButton />
      <header>
        <nav>
          <Navbar />
        </nav>
      </header>
      <main className="minHight">
        <Outlet />
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default MainLayout;
