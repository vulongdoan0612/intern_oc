import React from "react";
import styles from "@/styles/Cart/CartTitle/CartTitle.module.scss";

export default function Title() {
  return (
    <div className={styles.mainTitle}>
      <h4>Giỏ hàng</h4>
      <div className={styles.tikiXu}>
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M4.5 3C3.67157 3 3 3.67157 3 4.5C3 5.32843 3.67157 6 4.5 6C5.32843 6 6 5.32843 6 4.5C6 3.67157 5.32843 3 4.5 3ZM2 4.5C2 3.11929 3.11929 2 4.5 2C5.88071 2 7 3.11929 7 4.5C7 5.88071 5.88071 7 4.5 7C3.11929 7 2 5.88071 2 4.5ZM9.64645 2.64645C9.84171 2.45118 10.1583 2.45118 10.3536 2.64645C10.5488 2.84171 10.5488 3.15829 10.3536 3.35355L9.70711 4H12.5C12.7761 4 13 4.22386 13 4.5V7.5C13 7.77614 12.7761 8 12.5 8C12.2239 8 12 7.77614 12 7.5V5H9.70711L10.3536 5.64645C10.5488 5.84171 10.5488 6.15829 10.3536 6.35355C10.1583 6.54882 9.84171 6.54882 9.64645 6.35355L8.14645 4.85355C7.95118 4.65829 7.95118 4.34171 8.14645 4.14645L9.64645 2.64645ZM3.5 8C3.77614 8 4 8.22386 4 8.5V11H6.29289L5.64645 10.3536C5.45118 10.1583 5.45118 9.84171 5.64645 9.64645C5.84171 9.45118 6.15829 9.45118 6.35355 9.64645L7.85355 11.1464C8.04882 11.3417 8.04882 11.6583 7.85355 11.8536L6.35355 13.3536C6.15829 13.5488 5.84171 13.5488 5.64645 13.3536C5.45118 13.1583 5.45118 12.8417 5.64645 12.6464L6.29289 12H3.5C3.22386 12 3 11.7761 3 11.5V8.5C3 8.22386 3.22386 8 3.5 8ZM11.5 10C10.6716 10 10 10.6716 10 11.5C10 12.3284 10.6716 13 11.5 13C12.3284 13 13 12.3284 13 11.5C13 10.6716 12.3284 10 11.5 10ZM9 11.5C9 10.1193 10.1193 9 11.5 9C12.8807 9 14 10.1193 14 11.5C14 12.8807 12.8807 14 11.5 14C10.1193 14 9 12.8807 9 11.5Z"
            fill="#6F55ED"
          ></path>
        </svg>
        <span>Đổi ASA/Xu</span>
      </div>
    </div>
  );
}