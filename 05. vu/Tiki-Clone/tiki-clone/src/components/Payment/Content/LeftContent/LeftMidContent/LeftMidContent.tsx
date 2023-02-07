import React from "react";
import styles from "@/styles/Payment/Content/LeftContent/LeftMidContent/LeftMidContent.module.scss";
import Checkbox from "@mui/material/Checkbox";

export default function LeftMidContent() {
  const [checked, setChecked] = React.useState(false);

  return (
    <div className={styles.wrapper}>
      <h3>Thanh toán bằng Tiki Xu</h3>
      <label className={styles.styledCheckBox}>
        <Checkbox
          checked={checked}
          inputProps={{ "aria-label": "controlled" }}
        />
        <span className={styles.label}>
          Bạn không có đủ Tiki Xu{" "}
          <img src="https://salt.tikicdn.com/ts/upload/e7/5a/ed/b69b599394e0c51f828fd80f317ae945.png"></img>
        </span>
      </label>
      <p className={styles.addition}>
        Bạn cần thêm Tiki Xu?{" "}
        <a href="https://tiki.vn/customer/reward?callback=https%3A%2F%2Ftiki.vn%2Fcheckout%2Fpayment">
          Giao dịch tại đây
        </a>
      </p>
    </div>
  );
}
