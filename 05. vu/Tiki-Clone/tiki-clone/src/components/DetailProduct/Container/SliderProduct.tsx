import React from "react";
import styles from "@/styles/DetailProduct/DetailProduct.module.scss";
import Slider from "react-slick";
import StarRateIcon from "@mui/icons-material/StarRate";
import { productsA } from "@/data/dataProducts";
const SliderProduct: React.FC = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 100,
    slidesToShow: 6,
    slidesToScroll: 2,
  };

  return (
    <Slider {...settings}>
      {productsA.map((product) => {
        return (
          <div className={styles.sliderWrapperItem}>
            <div className={styles.sliderItem}>
              <div className={styles.imgItem}>
                <img src={product.img}></img>
              </div>
              <div className={styles.infoItem}>
                <p className={styles.priceItem}>
                  <span>
                    {product.price}
                    <sup>đ</sup>
                  </span>
                </p>
                <div className={styles.titleItem}>
                  <h3>{product.name}</h3>
                </div>
                <div className={styles.bottomItem}>
                  <div className={styles.rating}>
                    <span>{product.star}</span>
                    <StarRateIcon
                      style={{ color: "rgb(253, 216, 54)" }}
                    ></StarRateIcon>
                  </div>
                  <div className={styles.sell}>
                    <div className={styles.sellBorder}></div>
                    <div className="" style={{ paddingLeft: "6px" }}>
                      Đã bán {product.sole}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </Slider>
  );
};
export default SliderProduct;
