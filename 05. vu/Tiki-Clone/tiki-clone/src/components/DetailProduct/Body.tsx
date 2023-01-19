import React from "react";
import styles from "@/styles/DetailProduct/DetailProduct.module.scss";
import BreadCumb from "./BreadCumb/BreadCumb";
import Container from "./Container/Container";

const Body: React.FC = () => {
  return (
    <main style={{ backgroundColor: "rgb(245 245 250)" }}>
      <div className={styles.breadCumbWrapper}>
        <BreadCumb></BreadCumb>
      </div>
      <div className={styles.containerWrapper}>
        <Container></Container>
      </div>
    </main>
  );
};
export default Body;
