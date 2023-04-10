import React from "react";
import styles from "@/styles/DetailProduct/DetailProduct.module.scss";
import BreadCumb from "./BreadCumb/BreadCumb";
import Container from "./Container/Container";
import SliderProduct from "./Container/SliderProduct";
import ContainerMiddle from "./ContainerMiddle/ContainerMiddle";

const Body: React.FC = () => {
  return (
    <main style={{ backgroundColor: "rgb(245 245 250)" }}>
      <div className={styles.breadCumbWrapper}>
        <BreadCumb/>
      </div>
      <div className={styles.containerWrapper}>
        <Container/>
        <div className={styles.sliderPart}>
          <h2>Sản Phẩm Tương Tự</h2>
          <SliderProduct/>
        </div>
        <div className={styles.containerMiddle}>
          <ContainerMiddle/>
        </div>
      </div>
      <div className={styles.containerWrapperMiddle}></div>
    </main>
  );
};
export default Body;
