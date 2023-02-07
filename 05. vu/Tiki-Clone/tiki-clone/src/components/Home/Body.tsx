import React from "react";
import styles from "@/styles/Home/Home.module.scss";
import SideBar from "./SideBar/SideBar";
import Carousel from "react-bootstrap/Carousel";
import HomeBrand from "./Widgets/HomeBrand";
import HomeSecondBrand from "./Widgets/HomeSecondBrand";
import Products from "./Widgets/Products";


const Body: React.FC = () => {
  function a11yProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  const [value, setValue] = React.useState(0);
  const data = [
    { img: "/images/Home/Body/Widgets/Carousels/pic1.webp" },
    { img: "/images/Home/Body/Widgets/Carousels/pic2.webp" },
    { img: "/images/Home/Body/Widgets/Carousels/pic3.webp" },
    { img: "/images/Home/Body/Widgets/Carousels/pic4.webp" },
    { img: "/images/Home/Body/Widgets/Carousels/pic5.webp" },
  ];
  return (
    <main>
      <div className={styles.container}>
        <div className={styles.inner}>
          <SideBar />
          <div className={styles.widgets}>
            <div className={styles.mainGrid}>
              <div className={styles.leftBanner}>
                <Carousel>
                  {data.map((data) => {
                    return (
                      <Carousel.Item>
                        <img
                          className="d-block w-100 h-100"
                          src={data.img}
                          alt="First slide"
                        />
                      </Carousel.Item>
                    );
                  })}
                </Carousel>
              </div>
              <div className={styles.rightBanner}>
                <img src="/images/Home/Body/Widgets/Carousels/pic6.webp"></img>
              </div>
            </div>
            <div className={styles.homeBrand}>
              <div className={styles.homeBrandTitle}>
                Thương Hiệu Chính Hãng
                <img src="/images/Home/Body/Widgets/HomeBrand/homeBrand.png"></img>
              </div>
              <div className={styles.homeBrandSlider}>
                <HomeBrand></HomeBrand>
              </div>
            </div>
            <div className={styles.homeSecondBrand}>
              <div className={styles.homeBrandTitle}>Thương Hiệu Sale Tết</div>
              <div className={styles.homeBrandSlider}>
                <HomeSecondBrand></HomeSecondBrand>
              </div>
            </div>

            <div className={styles.widgetProduct}>
              <Products></Products>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
export default Body;
