import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import { Outlet, useLocation } from "react-router";
import Footer from "../Components/Footer";
import ScrollToTop from "../Components/UI/ScrollToTop";
import GoTopButton from "../Components/UI/GoTopButton";
import { ToastContainer } from "react-toastify";
import LoadingSpinner from "../Components/UI/LoadingSpinner";
import { motion } from "framer-motion";
import NetworkStatus from "../Components/NetworkStatus";
const MainLayout = () => {
  const [routeLoading, setRouteLoading] = useState(true);
  const location = useLocation();
  useEffect(() => {
    setRouteLoading(true);
  const timing=  setTimeout(() => {
      setRouteLoading(false)
    }, 300);
    return ()=> clearTimeout(timing)
  }, [location]);

  return (
    <>
    <NetworkStatus />
      <ToastContainer />
      <ScrollToTop />
      <GoTopButton />
      <motion.header
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <nav>
          <Navbar />
        </nav>
      </motion.header>
      <main className="minHight">
        {routeLoading ? (
          <>
            <LoadingSpinner />
          </>
        ) : (
          <Outlet />
        )}
      </main>

      <motion.footer
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Footer />
      </motion.footer>
    </>
  );
};

export default MainLayout;
