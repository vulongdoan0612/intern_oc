import React from "react";
import styles from "@/styles/Order/Content/RightContent/RightTopContent/RightTopContent.module.scss";

export default function RightTopContent() {
  return (
    <span className={styles.wrapper}>
      <svg
        stroke="currentColor"
        fill="currentColor"
        stroke-width="0"
        className={styles.iconLeft}
        viewBox="0 0 24 24"
        color="#808089"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
      </svg>
      <input
        name="search"
        placeholder="Tìm đơn hàng theo Mã đơn hàng, Nhà bán hoặc Tên sản phẩm"
        type="search"
        className={styles.inputSearch}
      ></input>
      <span className={styles.searchRight}>Tìm đơn hàng</span>
    </span>
  );
}
