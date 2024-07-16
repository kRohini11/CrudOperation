
"use client"

import Image from "next/image";
import styles from "./page.module.css";
import Home from "@/components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Create from "@/components/Create";
import Update from "@/components/Update";


export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/create" element={<Create />}></Route>
          <Route path="/edit/:id" element={<Update />}></Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}
