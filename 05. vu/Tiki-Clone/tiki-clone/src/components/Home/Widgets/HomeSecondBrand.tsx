import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "@/styles/Home/Home.module.scss";
import Slider from "react-slick";
const HomeSecondBrand: React.FC = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <Slider {...settings}>
        <div className={styles.firstSlide}>
          <div className={styles.groupSlide}>
            <div className={styles.groupLeft}>
              <img
                src="/images/Home/Body/Widgets/HomeSecondBrand/img1.png"
                alt=""
              ></img>
            </div>
            <div className={styles.groupRight}>
              <div className={styles.groupRightTop}>
                {" "}
                <img
                  src="/images/Home/Body/Widgets/HomeSecondBrand/img2.png"
                  alt=""
                ></img>
              </div>
              <div className={styles.groupRightBottom}>
                {" "}
                <img
                  src="/images/Home/Body/Widgets/HomeSecondBrand/img3.png"
                  alt=""
                ></img>
              </div>
            </div>
          </div>
          <div className={styles.groupSlide}>
            <div className={styles.groupLeft}>
              <img
                src="/images/Home/Body/Widgets/HomeSecondBrand/img4.png"
                alt=""
              ></img>
            </div>
            <div className={styles.groupRight}>
              <div className={styles.groupRightTop}>
                {" "}
                <img
                  src="/images/Home/Body/Widgets/HomeSecondBrand/img5.png"
                  alt=""
                ></img>
              </div>
              <div className={styles.groupRightBottom}>
                {" "}
                <img
                  src="/images/Home/Body/Widgets/HomeSecondBrand/img6.png"
                  alt=""
                ></img>
              </div>
            </div>
          </div>
          <div className={styles.groupSlide}>
            <div className={styles.groupLeft}>
              {" "}
              <img
                src="/images/Home/Body/Widgets/HomeSecondBrand/img7.png"
                alt=""
              ></img>
            </div>
            <div className={styles.groupRight}>
              <div className={styles.groupRightTop}>
                {" "}
                <img
                  src="/images/Home/Body/Widgets/HomeSecondBrand/img8.png"
                  alt=""
                ></img>
              </div>
              <div className={styles.groupRightBottom}>
                {" "}
                <img
                  src="/images/Home/Body/Widgets/HomeSecondBrand/img9.png"
                  alt=""
                ></img>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.firstSlide}>
          <div className={styles.groupSlide}>
            <div className={styles.groupLeft}>
              <img
                src="/images/Home/Body/Widgets/HomeSecondBrand/img10.png"
                alt=""
              ></img>
            </div>
            <div className={styles.groupRight}>
              <div className={styles.groupRightTop}>
                {" "}
                <img
                  src="/images/Home/Body/Widgets/HomeSecondBrand/img11.png"
                  alt=""
                ></img>
              </div>
              <div className={styles.groupRightBottom}>
                {" "}
                <img
                  src="/images/Home/Body/Widgets/HomeSecondBrand/img12.png"
                  alt=""
                ></img>
              </div>
            </div>
          </div>
          <div className={styles.groupSlide}>
            <div className={styles.groupLeft}>
              <img
                src="/images/Home/Body/Widgets/HomeSecondBrand/img13.png"
                alt=""
              ></img>
            </div>
            <div className={styles.groupRight}>
              <div className={styles.groupRightTop}>
                {" "}
                <img
                  src="/images/Home/Body/Widgets/HomeSecondBrand/img14.png"
                  alt=""
                ></img>
              </div>
              <div className={styles.groupRightBottom}>
                {" "}
                <img
                  src="/images/Home/Body/Widgets/HomeSecondBrand/img15.png"
                  alt=""
                ></img>
              </div>
            </div>
          </div>
          <div className={styles.groupSlide}>
            <div className={styles.groupLeft}>
              {" "}
              <img
                src="/images/Home/Body/Widgets/HomeSecondBrand/img16.png"
                alt=""
              ></img>
            </div>
            <div className={styles.groupRight}>
              <div className={styles.groupRightTop}>
                {" "}
                <img
                  src="/images/Home/Body/Widgets/HomeSecondBrand/img17.png"
                  alt=""
                ></img>
              </div>
              <div className={styles.groupRightBottom}>
                {" "}
                <img
                  src="/images/Home/Body/Widgets/HomeSecondBrand/img18.png"
                  alt=""
                ></img>
              </div>
            </div>
          </div>
        </div>
        {/* <div className={styles.secondSlide}>
          <div className={styles.groupSlide}>
            <div className={styles.groupLeft}></div>
            <div className={styles.groupRight}>
              <div className={styles.groupRightTop}></div>
              <div className={styles.groupRightBottom}></div>
            </div>
          </div>
          <div className={styles.groupSlide}>
            <div className={styles.groupLeft}></div>
            <div className={styles.groupRight}>
              <div className={styles.groupRightTop}></div>
              <div className={styles.groupRightBottom}></div>
            </div>
          </div>
          <div className={styles.groupSlide}>
            <div className={styles.groupLeft}></div>
            <div className={styles.groupRight}>
              <div className={styles.groupRightTop}></div>
              <div className={styles.groupRightBottom}></div>
            </div>
          </div>
        </div> */}
      </Slider>
    </div>
  );
};
export default HomeSecondBrand;
