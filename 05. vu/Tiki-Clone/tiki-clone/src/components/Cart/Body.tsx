import React from "react";
import Title from "./Title/Title";
import styles from "@/styles/Cart/Body.module.scss";
import LeftContent from "./Content/LeftContent/LeftContent";
import RightContent from "./Content/RightContent/RightContent";

export default function Body() {
  return (
    <div className={styles.wrapper}>
      <Title/>
      <div className={styles.container}>
        <LeftContent/>
        <RightContent/>
      </div>
    </div>
  );
}
