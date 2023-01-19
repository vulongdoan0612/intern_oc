import { productsB } from "@/data/dataProducts";
import React from "react";
import styles from "@/styles/Home/Home.module.scss";
import StarRateIcon from "@mui/icons-material/StarRate";
import { useRouter } from "next/router";
export default function ProductB() {
  const router = useRouter();
  const handleClick = () => {
    router.push("/product");
  };
  return (
    <div className={styles.contentProducts} onClick={handleClick}>
      {productsB.map((product) => {
        return (
          <div className={styles.productItem}>
            <div>
              <div className={styles.thumbnail}>
                <div className={styles.smallImg}>
                  <img src="/images/Home/Body/Widgets/Products/Product/uytin.png"></img>
                </div>
                <div className={styles.thumbnailImg}>
                  <img src={product.img} alt=""></img>
                </div>
              </div>
              <div className={styles.info}>
                <div className={styles.name}>
                  <h3>{product.name}</h3>
                </div>
                <div className={styles.underName}>
                  <div className={styles.rating}>
                    <span>{product.star}</span>
                    <StarRateIcon
                      style={{
                        color: "rgb(253, 216, 54)",
                        height: "14px",
                        width: "14px",
                      }}
                    ></StarRateIcon>
                  </div>
                  <div className={styles.sole}>
                    <div className={styles.soleBorder}></div>
                    <div className={styles.contentSole}>
                      Đã bán {product.sole}
                    </div>
                  </div>
                </div>
                <div className={styles.price}>{product.price}</div>
                <div className={styles.underPrice}>
                  Tặng tới 45 ASA (10k ₫) <br></br>≈ 2.4% hoàn tiền
                </div>
                <div className={styles.underRating}>
                  <div className={styles.item}>
                    <span>Freeship</span>
                  </div>
                  <div className={styles.item}>
                    <span>Freeship</span>
                  </div>
                </div>
              </div>
              <div className={styles.badgeDelivery}>
                <span style={{ color: " rgb(128, 128, 137)" }}>
                  Giao thứ 5, ngày 26/01
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
