import React from "react";
import styles from "@/styles/DetailProduct/DetailProduct.module.scss";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";

export default function Container() {
  return (
    <div className={styles.productContainer}>
      <div className={styles.productContainerLeft}>
        <div className={styles.groupImage}>
          <div className={styles.thumbNail}>
            {" "}
            <img src="/images/DetailProduct/GroupImage/img1.webp"></img>
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
              <div className={styles.customerBenefit}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
