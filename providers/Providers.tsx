"use client";

import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "next-themes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <SessionProvider>
      <ThemeProvider defaultTheme="dark" attribute="class">
        {children}
        <ToastContainer position="top-center" autoClose={1500} hideProgressBar theme="colored" />
      </ThemeProvider>
    </SessionProvider>
  );
};

export default Providers;
