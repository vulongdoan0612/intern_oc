import React from "react";
import LeftBottomContent from "./LeftBottomContent/LeftBottomContent";
import LeftMidContent from "./LeftMidContent/LeftMidContent";
import LeftTopContent from "./LeftTopContent/LeftTopContent";
import styles from "@/styles/Payment/Content/LeftContent/LeftContent.module.scss";

export default function LeftContent() {
  return (
    <div className={styles.wrapper}>
      <LeftTopContent />
      <LeftMidContent />
      <LeftBottomContent />
    </div>
  );
}
