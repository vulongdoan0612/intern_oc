import Body from "@/components/DetailProduct/Body";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import styles from "@/styles/DetailProduct/DetailProduct.module.scss";
import Header from "@/components/Navbar/Header";
import { getData } from "../utils/fetchData";
import { useRouter } from "next/router";
import axios from "axios";
import Footer from "@/components/Footer/Footer";

export default function Product() {
  return (
    <>
      <div className={styles.detailPage}>
        <Header />
        <Body />
        <Footer />
      </div>
    </>
  );
}
