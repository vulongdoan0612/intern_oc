import React from "react";
import styles from "@/styles/DealHot/DealHotTop/DealHotTop.module.scss";

export default function DealHotTop() {
  return (
    <div>
      <div>
        <img
          className={styles.dealImg}
          src="https://salt.tikicdn.com/ts/brickv2og/e4/0f/f3/ed1b12221c289369e26ce3bee2b93421.png"
        />
      </div>

      <div className={styles.flashDeal}>
        <img src="https://frontend.tikicdn.com/_desktop-next/static/img/giasoc-white.svg" />
        <img src="https://frontend.tikicdn.com/_desktop-next/static/img/dealFlashIcon.svg" />
        <img src="https://frontend.tikicdn.com/_desktop-next/static/img/homnay-white.svg" />
      </div>
      <div className={styles.flashDealBottom}>
        <div className={styles.flashDealBottomLeft}>
          <div className={styles.endsin}>Kết thúc</div>
          <div className={styles.countDown}>
            <div>02</div>
            <div className={styles.min}>45</div>
            <div className={styles.sec}>45</div>
          </div>
        </div>
        <div className={styles.flashDealBottomRight}>
          <div className={styles.upComing}>20:00</div>
          <div className={styles.upComingText}>Sắp diễn ra</div>
        </div>
      </div>
    </div>
  );
}
