import Body from "@/components/DealHot/Body";
import Footer from "@/components/Footer/Footer";
import HeaderCart from "@/components/Navbar/HeaderCart";
import React from "react";

export default function index() {
  return (
    <div style={{ background: "#f5f5fa", minHeight: "100vh" }}>
      <HeaderCart />
      <Body />
      <Footer />
    </div>
  );
}
