import React from "react";
import DealHotBottom from "./DealHotBottom/DealHotBottom";
import DealHotMid from "./DealHotMid/DealHotMid";
import DealHotTop from "./DealHotTop/DealHotTop";
import styles from "@/styles/DealHot/Body.module.scss";

export default function Body() {
  return (
    <div className={styles.wrapper}>
      <DealHotTop />
      <DealHotMid />
      <DealHotBottom />
    </div>
  );
}
