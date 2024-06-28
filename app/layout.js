'use client'

import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "./Navigation/page";
import Footer from "./Footer/page";
import store from "./store"
import { Provider } from "react-redux";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider store={store}>
          <Navigation />
          {children}
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
