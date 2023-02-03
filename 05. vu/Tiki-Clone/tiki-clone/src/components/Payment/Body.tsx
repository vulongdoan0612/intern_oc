import React from "react";
import RightContent from "./Content/RightContent/RightContent";
import LeftContent from "./Content/LeftContent/LeftContent";
import styles from "@/styles/Payment/Body.module.scss";

export default function Body() {
  return (
    <div className={styles.container}>
      <LeftContent></LeftContent>
      <RightContent></RightContent>
    </div>
  );
}
