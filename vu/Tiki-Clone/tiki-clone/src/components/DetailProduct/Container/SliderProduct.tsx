import React, { useEffect, useState } from "react";
import styles from "@/styles/DetailProduct/DetailProduct.module.scss";
import Slider from "react-slick";
import StarRateIcon from "@mui/icons-material/StarRate";
import axios from "axios";
import { Datum } from "@/interface";
import Link from "next/link";

const SliderProduct: React.FC = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 100,
    slidesToShow: 6,
    slidesToScroll: 2,
  };
  const [data, setData] = useState<Datum[]>([]);
  const numberFormatter = Intl.NumberFormat("en-US");

  useEffect(() => {
    const getAPI = async () => {
      const res = await axios.get(
        "https://api.tiki.vn/v2/widget/deals/collection?per_page=12&trackity_id=0e640482-cb3d-105a-0fc1-4b5219c5064b"
      );
      if (Array.isArray(res.data.data)) {
        setData(res.data.data);
      } else {
        console.log("error");
      }
    };
    getAPI();
  }, []);
  return (
    <Slider {...settings}>
      {data.map((product) => {
        return (
          <Link href={`/${product.product?.master_id}`}>
            <div className={styles.sliderWrapperItem} key={product.name}>
              <div className={styles.sliderItem}>
                <div className={styles.imgItem}>
                  <img src={product.product.thumbnail_url} />
                </div>
                <div className={styles.infoItem}>
                  <p className={styles.priceItem}>
                    <span>
                      {numberFormatter.format(product.product.price)}
                      <sup>đ</sup>
                    </span>
                  </p>
                  <div className={styles.titleItem}>
                    <h3>{product.name}</h3>
                  </div>
                  <div className={styles.bottomItem}>
                    <div className={styles.rating}>
                      <span>{product.product.rating_average}</span>
                      <StarRateIcon style={{ color: "rgb(253, 216, 54)" }} />
                    </div>
                    <div className={styles.sell}>
                      <div className={styles.sellBorder}></div>
                      <div className="" style={{ paddingLeft: "6px" }}>
                        Đã bán {product.progress.qty_ordered}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        );
      })}
    </Slider>
  );
};
export default SliderProduct;
