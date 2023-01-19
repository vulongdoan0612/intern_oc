import Body from "@/components/DetailProduct/Body";
import Head from "next/head";
import React from "react";
import styles from "@/styles/DetailProduct/DetailProduct.module.scss";
import Header from "@/components/Navbar/Header";

export default function Product() {
  return (
    <>
      <Head>
        <title>Nồi Chiên Ngập Dầu Lock&Lock EJF716SLV (1.5 Lít)</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          href="https://salt.tikicdn.com/media/upload/2018/12/03/0054c1410e38f1b9f3609c244974dd9c.png"
        />
      </Head>
      <div className={styles.detailPage}>
        <Header></Header>
        <Body></Body>
      </div>
    </>
  );
}
