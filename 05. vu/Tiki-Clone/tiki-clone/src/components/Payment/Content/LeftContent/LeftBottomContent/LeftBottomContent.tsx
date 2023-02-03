import React from "react";
import styles from "@/styles/Payment/Content/LeftContent/LeftBottomContent/LeftBottomContent.module.scss";
import { FormControlLabel, Radio, RadioGroup } from "@mui/material";

export default function LeftBottomContent() {
  const [value, setValue] = React.useState("female");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };
  return (
    <div className={styles.wrapper}>
      <h3>Chọn hình thức thanh toán</h3>
      <div className={styles.styledMethodList}>
        <div className="">
          <label>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              value={value}
              onChange={handleChange}
            >
              <FormControlLabel
                className={styles.styledLabel}
                value="female"
                control={<Radio />}
                label={
                  <div className={styles.methodFlex}>
                    <div className={styles.methodLogo}>
                      <img src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/checkout/icon-payment-method-cod.svg"></img>
                    </div>
                    <div className={styles.methodText}>
                      Thanh toán tiền mặt khi nhận hàng
                    </div>
                  </div>
                }
              />
              <FormControlLabel
                className={styles.styledLabel}
                value="male"
                control={<Radio />}
                label={
                  <>
                    <div className={styles.methodFlex}>
                      <div className={styles.methodLogo}>
                        <img src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/checkout/icon-payment-method-credit.svg"></img>
                      </div>
                      <div className={styles.methodText}>
                        <div>Thanh toán bằng thẻ quốc tế Visa, Master, JCB</div>
                        <div className={styles.methodCards}>
                          <img src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/checkout/icon-payment-credit-type-tiki-card.svg"></img>
                          <img src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/checkout/icon-visa.png  "></img>
                          <img src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/checkout/icon-payment-credit-type-mastercard.svg?v=1"></img>
                          <img src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/checkout/icon-payment-credit-type-jcb.svg"></img>
                        </div>
                      </div>
                    </div>
                  </>
                }
              />
            </RadioGroup>
            <div className={styles.cardAndPromotion}>
              <button className={styles.cardNewAdd}>
                <img src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/checkout/icon-add.svg"></img>
                <span>Thêm thẻ mới</span>
              </button>
              <div className={styles.bannerList}>
                <div className={styles.blockTitle}>
                  <img src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/checkout/icons-promotion-outline.svg"></img>
                  Ưu đãi thanh toán thẻ
                </div>
                <div className={styles.bannerListCard}>
                  <div className={styles.bannerCard}>
                    <div className={styles.rowFirst}>
                      <div className={styles.rowTitle}>Giảm 20K</div>
                      <img src="https://salt.tikicdn.com/cache/w144/ts/upload/aa/31/ef/8bd8c2d691ea5291117df6012eb7f5a0.png.webp"></img>
                    </div>
                    <div className={styles.rowSecond}>
                      <div className={styles.rowSubTitle}>Đơn từ 400K</div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        aria-describedby="popup-38"
                      >
                        <path
                          d="M12.75 11.25C12.75 10.8358 12.4142 10.5 12 10.5C11.5858 10.5 11.25 10.8358 11.25 11.25V15.75C11.25 16.1642 11.5858 16.5 12 16.5C12.4142 16.5 12.75 16.1642 12.75 15.75V11.25Z"
                          fill="#0d5cb6"
                        ></path>
                        <path
                          d="M12.75 8.25C12.75 8.66421 12.4142 9 12 9C11.5858 9 11.25 8.66421 11.25 8.25C11.25 7.83579 11.5858 7.5 12 7.5C12.4142 7.5 12.75 7.83579 12.75 8.25Z"
                          fill="#0d5cb6"
                        ></path>
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3ZM4.5 12C4.5 7.85786 7.85786 4.5 12 4.5C16.1421 4.5 19.5 7.85786 19.5 12C19.5 16.1421 16.1421 19.5 12 19.5C7.85786 19.5 4.5 16.1421 4.5 12Z"
                          fill="#0d5cb6"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div className={styles.bannerCard}>
                    <div className={styles.rowFirst}>
                      <div className={styles.rowTitle}>Giảm 20K</div>
                      <img src="https://salt.tikicdn.com/cache/w144/ts/upload/aa/31/ef/8bd8c2d691ea5291117df6012eb7f5a0.png.webp"></img>
                    </div>
                    <div className={styles.rowSecond}>
                      <div className={styles.rowSubTitle}>Đơn từ 400K</div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        aria-describedby="popup-38"
                      >
                        <path
                          d="M12.75 11.25C12.75 10.8358 12.4142 10.5 12 10.5C11.5858 10.5 11.25 10.8358 11.25 11.25V15.75C11.25 16.1642 11.5858 16.5 12 16.5C12.4142 16.5 12.75 16.1642 12.75 15.75V11.25Z"
                          fill="#0d5cb6"
                        ></path>
                        <path
                          d="M12.75 8.25C12.75 8.66421 12.4142 9 12 9C11.5858 9 11.25 8.66421 11.25 8.25C11.25 7.83579 11.5858 7.5 12 7.5C12.4142 7.5 12.75 7.83579 12.75 8.25Z"
                          fill="#0d5cb6"
                        ></path>
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3ZM4.5 12C4.5 7.85786 7.85786 4.5 12 4.5C16.1421 4.5 19.5 7.85786 19.5 12C19.5 16.1421 16.1421 19.5 12 19.5C7.85786 19.5 4.5 16.1421 4.5 12Z"
                          fill="#0d5cb6"
                        ></path>
                      </svg>
                    </div>
                  </div>{" "}
                  <div className={styles.bannerCard}>
                    <div className={styles.rowFirst}>
                      <div className={styles.rowTitle}>Giảm 20K</div>
                      <img src="https://salt.tikicdn.com/cache/w144/ts/upload/aa/31/ef/8bd8c2d691ea5291117df6012eb7f5a0.png.webp"></img>
                    </div>
                    <div className={styles.rowSecond}>
                      <div className={styles.rowSubTitle}>Đơn từ 400K</div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        aria-describedby="popup-38"
                      >
                        <path
                          d="M12.75 11.25C12.75 10.8358 12.4142 10.5 12 10.5C11.5858 10.5 11.25 10.8358 11.25 11.25V15.75C11.25 16.1642 11.5858 16.5 12 16.5C12.4142 16.5 12.75 16.1642 12.75 15.75V11.25Z"
                          fill="#0d5cb6"
                        ></path>
                        <path
                          d="M12.75 8.25C12.75 8.66421 12.4142 9 12 9C11.5858 9 11.25 8.66421 11.25 8.25C11.25 7.83579 11.5858 7.5 12 7.5C12.4142 7.5 12.75 7.83579 12.75 8.25Z"
                          fill="#0d5cb6"
                        ></path>
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3ZM4.5 12C4.5 7.85786 7.85786 4.5 12 4.5C16.1421 4.5 19.5 7.85786 19.5 12C19.5 16.1421 16.1421 19.5 12 19.5C7.85786 19.5 4.5 16.1421 4.5 12Z"
                          fill="#0d5cb6"
                        ></path>
                      </svg>
                    </div>
                  </div>{" "}
                  <div className={styles.bannerCard}>
                    <div className={styles.rowFirst}>
                      <div className={styles.rowTitle}>Giảm 20K</div>
                      <img src="https://salt.tikicdn.com/cache/w144/ts/upload/aa/31/ef/8bd8c2d691ea5291117df6012eb7f5a0.png.webp"></img>
                    </div>
                    <div className={styles.rowSecond}>
                      <div className={styles.rowSubTitle}>Đơn từ 400K</div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        aria-describedby="popup-38"
                      >
                        <path
                          d="M12.75 11.25C12.75 10.8358 12.4142 10.5 12 10.5C11.5858 10.5 11.25 10.8358 11.25 11.25V15.75C11.25 16.1642 11.5858 16.5 12 16.5C12.4142 16.5 12.75 16.1642 12.75 15.75V11.25Z"
                          fill="#0d5cb6"
                        ></path>
                        <path
                          d="M12.75 8.25C12.75 8.66421 12.4142 9 12 9C11.5858 9 11.25 8.66421 11.25 8.25C11.25 7.83579 11.5858 7.5 12 7.5C12.4142 7.5 12.75 7.83579 12.75 8.25Z"
                          fill="#0d5cb6"
                        ></path>
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3ZM4.5 12C4.5 7.85786 7.85786 4.5 12 4.5C16.1421 4.5 19.5 7.85786 19.5 12C19.5 16.1421 16.1421 19.5 12 19.5C7.85786 19.5 4.5 16.1421 4.5 12Z"
                          fill="#0d5cb6"
                        ></path>
                      </svg>
                    </div>
                  </div>{" "}
                  <div className={styles.bannerCard}>
                    <div className={styles.rowFirst}>
                      <div className={styles.rowTitle}>Giảm 20K</div>
                      <img src="https://salt.tikicdn.com/cache/w144/ts/upload/aa/31/ef/8bd8c2d691ea5291117df6012eb7f5a0.png.webp"></img>
                    </div>
                    <div className={styles.rowSecond}>
                      <div className={styles.rowSubTitle}>Đơn từ 400K</div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        aria-describedby="popup-38"
                      >
                        <path
                          d="M12.75 11.25C12.75 10.8358 12.4142 10.5 12 10.5C11.5858 10.5 11.25 10.8358 11.25 11.25V15.75C11.25 16.1642 11.5858 16.5 12 16.5C12.4142 16.5 12.75 16.1642 12.75 15.75V11.25Z"
                          fill="#0d5cb6"
                        ></path>
                        <path
                          d="M12.75 8.25C12.75 8.66421 12.4142 9 12 9C11.5858 9 11.25 8.66421 11.25 8.25C11.25 7.83579 11.5858 7.5 12 7.5C12.4142 7.5 12.75 7.83579 12.75 8.25Z"
                          fill="#0d5cb6"
                        ></path>
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3ZM4.5 12C4.5 7.85786 7.85786 4.5 12 4.5C16.1421 4.5 19.5 7.85786 19.5 12C19.5 16.1421 16.1421 19.5 12 19.5C7.85786 19.5 4.5 16.1421 4.5 12Z"
                          fill="#0d5cb6"
                        ></path>
                      </svg>
                    </div>
                  </div>{" "}
                  <div className={styles.bannerCard}>
                    <div className={styles.rowFirst}>
                      <div className={styles.rowTitle}>Giảm 20K</div>
                      <img src="https://salt.tikicdn.com/cache/w144/ts/upload/aa/31/ef/8bd8c2d691ea5291117df6012eb7f5a0.png.webp"></img>
                    </div>
                    <div className={styles.rowSecond}>
                      <div className={styles.rowSubTitle}>Đơn từ 400K</div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        aria-describedby="popup-38"
                      >
                        <path
                          d="M12.75 11.25C12.75 10.8358 12.4142 10.5 12 10.5C11.5858 10.5 11.25 10.8358 11.25 11.25V15.75C11.25 16.1642 11.5858 16.5 12 16.5C12.4142 16.5 12.75 16.1642 12.75 15.75V11.25Z"
                          fill="#0d5cb6"
                        ></path>
                        <path
                          d="M12.75 8.25C12.75 8.66421 12.4142 9 12 9C11.5858 9 11.25 8.66421 11.25 8.25C11.25 7.83579 11.5858 7.5 12 7.5C12.4142 7.5 12.75 7.83579 12.75 8.25Z"
                          fill="#0d5cb6"
                        ></path>
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3ZM4.5 12C4.5 7.85786 7.85786 4.5 12 4.5C16.1421 4.5 19.5 7.85786 19.5 12C19.5 16.1421 16.1421 19.5 12 19.5C7.85786 19.5 4.5 16.1421 4.5 12Z"
                          fill="#0d5cb6"
                        ></path>
                      </svg>
                    </div>
                  </div>{" "}
                  <div className={styles.bannerCard}>
                    <div className={styles.rowFirst}>
                      <div className={styles.rowTitle}>Giảm 20K</div>
                      <img src="https://salt.tikicdn.com/cache/w144/ts/upload/aa/31/ef/8bd8c2d691ea5291117df6012eb7f5a0.png.webp"></img>
                    </div>
                    <div className={styles.rowSecond}>
                      <div className={styles.rowSubTitle}>Đơn từ 400K</div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        aria-describedby="popup-38"
                      >
                        <path
                          d="M12.75 11.25C12.75 10.8358 12.4142 10.5 12 10.5C11.5858 10.5 11.25 10.8358 11.25 11.25V15.75C11.25 16.1642 11.5858 16.5 12 16.5C12.4142 16.5 12.75 16.1642 12.75 15.75V11.25Z"
                          fill="#0d5cb6"
                        ></path>
                        <path
                          d="M12.75 8.25C12.75 8.66421 12.4142 9 12 9C11.5858 9 11.25 8.66421 11.25 8.25C11.25 7.83579 11.5858 7.5 12 7.5C12.4142 7.5 12.75 7.83579 12.75 8.25Z"
                          fill="#0d5cb6"
                        ></path>
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3ZM4.5 12C4.5 7.85786 7.85786 4.5 12 4.5C16.1421 4.5 19.5 7.85786 19.5 12C19.5 16.1421 16.1421 19.5 12 19.5C7.85786 19.5 4.5 16.1421 4.5 12Z"
                          fill="#0d5cb6"
                        ></path>
                      </svg>
                    </div>
                  </div>{" "}
                  <div className={styles.bannerCard}>
                    <div className={styles.rowFirst}>
                      <div className={styles.rowTitle}>Giảm 20K</div>
                      <img src="https://salt.tikicdn.com/cache/w144/ts/upload/aa/31/ef/8bd8c2d691ea5291117df6012eb7f5a0.png.webp"></img>
                    </div>
                    <div className={styles.rowSecond}>
                      <div className={styles.rowSubTitle}>Đơn từ 400K</div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        aria-describedby="popup-38"
                      >
                        <path
                          d="M12.75 11.25C12.75 10.8358 12.4142 10.5 12 10.5C11.5858 10.5 11.25 10.8358 11.25 11.25V15.75C11.25 16.1642 11.5858 16.5 12 16.5C12.4142 16.5 12.75 16.1642 12.75 15.75V11.25Z"
                          fill="#0d5cb6"
                        ></path>
                        <path
                          d="M12.75 8.25C12.75 8.66421 12.4142 9 12 9C11.5858 9 11.25 8.66421 11.25 8.25C11.25 7.83579 11.5858 7.5 12 7.5C12.4142 7.5 12.75 7.83579 12.75 8.25Z"
                          fill="#0d5cb6"
                        ></path>
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3ZM4.5 12C4.5 7.85786 7.85786 4.5 12 4.5C16.1421 4.5 19.5 7.85786 19.5 12C19.5 16.1421 16.1421 19.5 12 19.5C7.85786 19.5 4.5 16.1421 4.5 12Z"
                          fill="#0d5cb6"
                        ></path>
                      </svg>
                    </div>
                  </div>{" "}
                  <div className={styles.bannerCard}>
                    <div className={styles.rowFirst}>
                      <div className={styles.rowTitle}>Giảm 20K</div>
                      <img src="https://salt.tikicdn.com/cache/w144/ts/upload/aa/31/ef/8bd8c2d691ea5291117df6012eb7f5a0.png.webp"></img>
                    </div>
                    <div className={styles.rowSecond}>
                      <div className={styles.rowSubTitle}>Đơn từ 400K</div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        aria-describedby="popup-38"
                      >
                        <path
                          d="M12.75 11.25C12.75 10.8358 12.4142 10.5 12 10.5C11.5858 10.5 11.25 10.8358 11.25 11.25V15.75C11.25 16.1642 11.5858 16.5 12 16.5C12.4142 16.5 12.75 16.1642 12.75 15.75V11.25Z"
                          fill="#0d5cb6"
                        ></path>
                        <path
                          d="M12.75 8.25C12.75 8.66421 12.4142 9 12 9C11.5858 9 11.25 8.66421 11.25 8.25C11.25 7.83579 11.5858 7.5 12 7.5C12.4142 7.5 12.75 7.83579 12.75 8.25Z"
                          fill="#0d5cb6"
                        ></path>
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3ZM4.5 12C4.5 7.85786 7.85786 4.5 12 4.5C16.1421 4.5 19.5 7.85786 19.5 12C19.5 16.1421 16.1421 19.5 12 19.5C7.85786 19.5 4.5 16.1421 4.5 12Z"
                          fill="#0d5cb6"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              value={value}
              onChange={handleChange}
            >
              <FormControlLabel
                className={styles.styledLabel}
                value="female"
                control={<Radio />}
                label={
                  <div className={styles.methodFlex}>
                    <div className={styles.methodLogo}>
                      <img src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/checkout/icon-payment-method-cod.svg"></img>
                    </div>
                    <div className={styles.methodText}>
                      Thanh toán tiền mặt khi nhận hàng
                    </div>
                  </div>
                }
              />
              <FormControlLabel
                className={styles.styledLabel}
                value="male"
                control={<Radio />}
                label={
                  <>
                    <div className={styles.methodFlex}>
                      <div className={styles.methodLogo}>
                        <img src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/checkout/icon-payment-method-credit.svg"></img>
                      </div>
                      <div className={styles.methodText}>
                        <div>Thanh toán bằng thẻ quốc tế Visa, Master, JCB</div>
                        <div className={styles.methodCards}>
                          <img src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/checkout/icon-payment-credit-type-tiki-card.svg"></img>
                          <img src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/checkout/icon-visa.png  "></img>
                          <img src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/checkout/icon-payment-credit-type-mastercard.svg?v=1"></img>
                          <img src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/checkout/icon-payment-credit-type-jcb.svg"></img>
                        </div>
                      </div>
                    </div>
                  </>
                }
              />
            </RadioGroup>
          </label>{" "}
        </div>
      </div>
    </div>
  );
}
