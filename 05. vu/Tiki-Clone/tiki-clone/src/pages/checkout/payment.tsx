import HeaderCart from "@/components/Navbar/HeaderCart";
import Body from "@/components/Payment/Body";
import Head from "next/head";
import React from "react";

export default function payment() {
  return (
    <div>
      <Head>
        <title>Nhận xét sản phẩm bạn đã mua | Tiki.vn</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          href="https://salt.tikicdn.com/media/upload/2018/12/03/0054c1410e38f1b9f3609c244974dd9c.png"
        />
      </Head>
      <HeaderCart />
      <div style={{ background: "rgb(245, 245, 250)" }}>
        <Body />
      </div>
    </div>
  );
}
