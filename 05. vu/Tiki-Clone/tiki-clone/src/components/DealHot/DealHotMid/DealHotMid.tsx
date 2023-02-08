import React from "react";
import styles from "@/styles/DealHot/DealHotMid/DealHotMid.module.scss";
import Slider from "react-slick";
import { Carousel } from "react-bootstrap";

export default function DealHotMid() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 100,
    slidesToShow: 10,
    slidesToScroll: 10,
  };
  const data = [
    {
      img: "https://salt.tikicdn.com/ts/tmp/e7/cf/b2/42722aa968e5d7a6ae3afe90bc9ea8b3.png",
      title: "Tiki chọn",
    },
    {
      img: "https://salt.tikicdn.com/ts/sellercenterFE/93/b3/9f/6a77d8f4f0d907769eb0626b3e2171de.png",
      title: "Giao Nhanh Trong Ngày",
    },
    {
      img: "https://salt.tikicdn.com/ts/tmp/b1/dc/68/9df178b9594f1cfdad952fffaf13d00a.png",
      title: "Unilever",
    },
    {
      img: "https://salt.tikicdn.com/ts/tmp/0a/13/32/f13d4af67fb78ccdc0eee4d1debada3b.jpg",
      title: "STARBUCKS",
    },
    {
      img: "https://salt.tikicdn.com/ts/tmp/dc/4b/5f/c55719e2aa57ded3d81086b2d6e19f30.jpg",
      title: "Logitech",
    },
    {
      img: "https://salt.tikicdn.com/ts/tmp/13/35/3d/94d8d8a6e59c4e415130b0c97394ec84.png",
      title: "AZ Việt Nam",
    },
    {
      img: "https://salt.tikicdn.com/ts/tmp/e7/eb/e2/ed931bbd88a14ba5e2de92c157c56d9a.jpg",
      title: "Alpha Books",
    },  {
      img: "https://salt.tikicdn.com/ts/tmp/e7/eb/e2/ed931bbd88a14ba5e2de92c157c56d9a.jpg",
      title: "Alpha Books",
    },  {
      img: "https://salt.tikicdn.com/ts/tmp/e7/eb/e2/ed931bbd88a14ba5e2de92c157c56d9a.jpg",
      title: "Alpha Books",
    },  {
      img: "https://salt.tikicdn.com/ts/tmp/e7/eb/e2/ed931bbd88a14ba5e2de92c157c56d9a.jpg",
      title: "Alpha Books",
    },  {
      img: "https://salt.tikicdn.com/ts/tmp/e7/eb/e2/ed931bbd88a14ba5e2de92c157c56d9a.jpg",
      title: "Alpha Books",
    },
  ];
  const dataSlider = [
    {
      img: "https://salt.tikicdn.com/cache/w1080/ts/tikimsp/bf/2f/44/e214ce79115ba045a84b4f1804a7e8bb.png.webp",
    },
    {
      img: "https://salt.tikicdn.com/cache/w1080/ts/tikimsp/d1/43/59/24f7c0927da9f470af433dfcb024f2ec.png.webp",
    },
    {
      img: "https://salt.tikicdn.com/cache/w1080/ts/tikimsp/ce/79/94/892857ce4cf3577a82ba83ea507494ee.png.webp",
    },
  ];
  return (
    <div className={styles.wrapper}>
      <Slider {...settings}>
        {data.map((data) => {
          return (
            <div className={styles.sliderWrapperItem}>
              <div className={styles.sliderItem}>
                <img src={data.img} alt=""/>
                <div className={styles.tagName}>{data.title}</div>
              </div>
            </div>
          );
        })}
      </Slider>
      <Carousel>
        {dataSlider.map((data) => {
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
  );
}
