import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styles from "@/styles/Home/Home.module.scss";
import Link from "next/link";
const HomeBrand: React.FC = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 100,
    slidesToShow: 6,
    slidesToScroll: 1,
  };
  const data = [
    { img: "/images/Home/Body/Widgets/HomeBrand/img1.png" },
    { img: "/images/Home/Body/Widgets/HomeBrand/img2.png" },
    { img: "/images/Home/Body/Widgets/HomeBrand/img3.png" },
    { img: "/images/Home/Body/Widgets/HomeBrand/img4.png" },
    { img: "/images/Home/Body/Widgets/HomeBrand/img5.png" },
    { img: "/images/Home/Body/Widgets/HomeBrand/img6.png" },
    { img: "/images/Home/Body/Widgets/HomeBrand/img7.png" },
  ];
  return (
    <div>
      <Slider {...settings}>
        {data.map((data) => {
          return (
            <div className={styles.sliderWrapperItem}>
              <div className={styles.sliderItem}>
                <Link href="/dealhot">
                  <img src={data.img} alt="" />
                </Link>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};
export default HomeBrand;
