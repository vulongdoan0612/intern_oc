import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styles from "@/styles/Home/Home.module.scss";
const HomeBrand: React.FC = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 100,
    slidesToShow: 6,
    slidesToScroll: 1,
  };

  return (
    <div>
      <Slider {...settings}>
        <div className={styles.sliderWrapperItem}>
          <div className={styles.sliderItem}>
            <img
              src="/images/Home/Body/Widgets/HomeBrand/img1.png"
              alt=""
            ></img>
          </div>
        </div>
        <div className={styles.sliderWrapperItem}>
          <div className={styles.sliderItem}>
            <img
              src="/images/Home/Body/Widgets/HomeBrand/img2.png"
              alt=""
            ></img>
          </div>
        </div>
        <div className={styles.sliderWrapperItem}>
          <div className={styles.sliderItem}>
            <img
              src="/images/Home/Body/Widgets/HomeBrand/img3.png"
              alt=""
            ></img>
          </div>
        </div>
        <div className={styles.sliderWrapperItem}>
          <div className={styles.sliderItem}>
            <img
              src="/images/Home/Body/Widgets/HomeBrand/img4.png"
              alt=""
            ></img>
          </div>
        </div>
        <div className={styles.sliderWrapperItem}>
          <div className={styles.sliderItem}>
            <img
              src="/images/Home/Body/Widgets/HomeBrand/img5.png"
              alt=""
            ></img>
          </div>
        </div>
        <div className={styles.sliderWrapperItem}>
          <div className={styles.sliderItem}>
            <img
              src="/images/Home/Body/Widgets/HomeBrand/img6.png"
              alt=""
            ></img>
          </div>
        </div>
        <div className={styles.sliderWrapperItem}>
          <div className={styles.sliderItem}>
            <img
              src="/images/Home/Body/Widgets/HomeBrand/img7.png"
              alt=""
            ></img>
          </div>
        </div>
      </Slider>
    </div>
  );
};
export default HomeBrand;
