import React from "react";
import styles from "@/styles/DetailProduct/DetailProduct.module.scss";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
export default function Container() {
  return (
    <div className={styles.productContainer}>
      <div className={styles.productContainerLeft}>
        <div className={styles.groupImage}>
          <div className={styles.thumbNail}>
            <img src="/images/DetailProduct/GroupImage/img1.webp"></img>
          </div>
          <div className={styles.thumbNailBottom}>
            <button>
              <img src="/images/DetailProduct/GroupImage/shareIcon.png"></img>
              <span>Chia sẻ nhận +17.990 Xu</span>
            </button>
          </div>
        </div>
      </div>
      <div className={styles.productContainerMid}></div>
      <div className={styles.productContainerRight}>
        <div className={styles.productHeader}>
          <div className={styles.brand}>
            <span>
              <h6>Thương hiệu: </h6>
            </span>
            <span>
              <div className={styles.brandName}> LocknLock</div>
            </span>
          </div>
          <h1 className={styles.productTitle}>
            Nồi Chiên Ngập Dầu Lock&Lock EJF716SLV (1.5 Lít) - Hàng chính hãng
          </h1>
          <div className={styles.belowTitle}>
            <div style={{ display: "flex" }}>
              <div className={styles.review}>
                <div className={styles.rating}>
                  <Rating
                    name="text-feedback"
                    value={3.5}
                    readOnly
                    precision={0.5}
                    emptyIcon={
                      <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                    }
                  />
                </div>
                <span className={styles.numberReview}>(Xem 873 đánh giá)</span>
                <div className={styles.borderReview}></div>
              </div>
              <div className={styles.sold}>Đã bán 3419</div>
            </div>
          </div>
        </div>
        <div className={styles.productBody}>
          <div className={styles.bodyLeft}>
            <div className={styles.priceIcon}>
              <div className={styles.productPrice}>
                <div className={styles.currentPrice}>693.000 đ</div>
                <div className={styles.minusPrice}>1.385.800 đ</div>
                <div className={styles.discountRate}>-50%</div>
              </div>
              <div className={styles.giftProduct}>
                <div className={styles.cashGift}>
                  <img src="/images/DetailProduct/GroupImage/iconCash.png"></img>
                  <span>Thưởng 13,86 ASA (≈ 3.063đ)</span>
                  <span className={styles.help}></span>
                </div>
                <img
                  src="/images/DetailProduct/GroupImage/iconGift.gif"
                  className={styles.iconGift}
                ></img>
              </div>
            </div>
            <div className={styles.vouchers}>
              <div className={styles.titleVoucher}>5 Mã Giảm Giá</div>
              <div className={styles.voucherTags}>
                <div className={styles.tag}>Giảm 10K</div>
                <div className={styles.tag}>Giảm 20K</div>
                <div className={styles.tag}>Giảm 50K</div>
                <img src="/images/DetailProduct/GroupImage/next.png"></img>
              </div>
            </div>
            <div className={styles.deliveryZone}>
              <div className={styles.address}>
                <span>Giao đến </span>
                <span>Q. 1, P. Bến Nghé, Hồ Chí Minh</span>
                <span> - Đổi địa chỉ</span>
              </div>
              <div className={styles.zoneInner}>
                <div className={styles.shippingInfo}>
                  <div className={styles.shippingHeader}>
                    <div className={styles.shippingIcon}>
                      <img src="/images/DetailProduct/GroupImage/fast.png"></img>
                    </div>
                    <div className={styles.divider}></div>
                    <div className={styles.shippingDeadline}>
                      Ngày mai, trước 23:00
                    </div>
                  </div>
                  <div className={styles.shippingFree}>
                    Vận chuyển:
                    <span>Miễn phí </span>
                    <span>
                      <del>14.000đ</del>
                    </span>
                  </div>
                  <div className={styles.shippingInfoBottom}>
                    <img src="/images/DetailProduct/GroupImage/iconCash.png"></img>
                    <span>Freeship 100% với 1.000,93 ASA</span>
                    <span></span>
                  </div>
                </div>
                <div className={styles.addToCart}>
                  <div className={styles.qntyGroup}>
                    <p>Số lượng</p>
                    <div className={styles.groupInput}>
                      <button>
                        <RemoveIcon
                          style={{ width: "20px", height: "20px" }}
                        ></RemoveIcon>
                      </button>
                      <input value="1"></input>
                      <button>
                        <AddIcon
                          style={{ width: "20px", height: "20px" }}
                        ></AddIcon>
                      </button>
                    </div>
                  </div>
                  <div className={styles.addGroup}>
                    <button>Chọn mua</button>
                    <button>
                      Mua trước trả sau <span>Lãi suất 0%</span>
                    </button>
                    <div className={styles.chat}>
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M0 8.25C0 3.95165 4.15905 0.75 9 0.75C13.8409 0.75 18 3.95165 18 8.25C18 10.0141 17.2499 11.5969 16.0855 12.8642L16.4951 16.414C16.5254 16.6772 16.4147 16.9369 16.2037 17.0972C15.9927 17.2575 15.7128 17.2946 15.4674 17.1947L11.2797 15.4913C10.5273 15.6864 9.78118 15.75 9 15.75C4.15905 15.75 0 12.5483 0 8.25ZM9 2.25C4.69095 2.25 1.5 5.04835 1.5 8.25C1.5 11.4517 4.69095 14.25 9 14.25C9.77869 14.25 10.451 14.1792 11.1095 13.9816C11.2734 13.9325 11.4491 13.9408 11.6076 14.0053L14.8598 15.3282L14.5549 12.686C14.5287 12.4585 14.6078 12.2316 14.7697 12.0697C15.8609 10.9785 16.5 9.66018 16.5 8.25C16.5 5.04835 13.3091 2.25 9 2.25Z"
                          fill="#0d5cb6"
                        ></path>
                      </svg>
                      <span>Chat</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.bodyRight}>
            <div className={styles.currentSeller}>
              <div className={styles.sellerWidget}>
                <div className={styles.sellerInfo}>
                  <div className={styles.sellerInfoIcon}>
                    <img src="/images/DetailProduct/GroupImage/tikiIcon.webp"></img>
                  </div>
                  <div className={styles.overviewRight}>
                    <span className={styles.sellerName}>
                      <span>Tiki Trading</span>
                      <img src="/images/DetailProduct/GroupImage/official.webp"></img>
                    </span>
                  </div>
                </div>
                <div className={styles.sellerDetail}>
                  <div className={styles.itemReview}>
                    <div className={styles.title}>
                      <span>4.7 / 5</span>
                      <div className={styles.starIcon}>
                        <StarIcon></StarIcon>
                      </div>
                    </div>
                    <div className={styles.subTitle}>5.2tr+</div>
                  </div>
                  <div className={styles.borderLeft}></div>
                  <div className={styles.itemNormal}>
                    <div className={styles.title}>
                      <span>458.3k+</span>
                    </div>
                    <div className={styles.subTitle}>Theo dõi</div>
                  </div>
                </div>
                <div className={styles.sellerAction}>
                  <div className={styles.shop}>
                    <img src="/images/DetailProduct/GroupImage/shop.png"></img>
                    <span>Xem Shop</span>
                  </div>
                  <div className={styles.follow}>
                    <img src="/images/DetailProduct/GroupImage/plus.png"></img>
                    <span>Theo Dõi</span>
                  </div>
                </div>
              </div>
              <div className={styles.warrantyDetail}>
                <div className={styles.warrantyItem}>
                  <span>Thời gian bảo hành</span>
                  <span>24 tháng</span>
                </div>
                <div className={styles.warrantyItem}>
                  <span>Hình thức bảo hành</span>
                  <span>Hóa đơn</span>
                </div>

                <div className={styles.warrantyItem}>
                  <span>Nơi bảo hành</span>
                  <span>Bảo hành chính hãng</span>
                </div>
                <div className={styles.warrantyItem}>
                  <span>Hướng dẫn bảo hành</span>
                  <span style={{ color: "rgb(13, 92, 182)" }}>
                    Xem chi tiết
                  </span>
                </div>
              </div>
              <div className={styles.customerBenefit}>
                <div className={styles.benefitItem}>
                  <img src="/images/DetailProduct/GroupImage/safeIcon.png"></img>
                  <span>
                    Hoàn tiền <br></br> <b>111%</b>
                    <br></br>nếu hàng giả
                  </span>
                </div>
                <div className={styles.benefitItem}>
                  <img src="/images/DetailProduct/GroupImage/likeIcon.png"></img>
                  <span>
                    Mở hộp<br></br>kiểm tra<br></br>nhận hàng
                  </span>
                </div>
                <div className={styles.benefitItem}>
                  <img src="/images/DetailProduct/GroupImage/backIcon.png"></img>
                  <span>
                    Đổi trả trong<br></br>
                    <b>30 ngày</b>
                    <br></br>nếu sp lỗi
                  </span>
                </div>
              </div>
            </div>
            <div className={styles.compareShop}>
              <div className={styles.compareShopLeft}>
                <p>2 nhà bán khác</p>
                <p>Giá từ 767.000 ₫</p>
              </div>
              <div className={styles.compareShopRight}>So sánh</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
