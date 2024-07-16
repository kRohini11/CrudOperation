
"use client"

import { Inter } from "next/font/google";
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.css';
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import AppReducer from "@/components/UserReducer";

const inter = Inter({ subsets: ["latin"] });

const store = configureStore({
  reducer: {
    users: AppReducer
  }
})
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider store={store}>
          {children}
        </Provider>

      </body>
    </html>
  );
}
