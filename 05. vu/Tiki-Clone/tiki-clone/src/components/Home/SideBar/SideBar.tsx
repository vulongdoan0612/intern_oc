import React from "react";
import styles from "@/styles/Home/Home.module.scss";

const SideBar: React.FC = () => {
  const data = [
    {
      title: "Siêu Sale Sinh Nhật",
      img: "/images/Home/Body/SideBar/item1.webp",
    },
    { title: "Mã giảm giá", img: "/images/Home/Body/SideBar/item2.webp" },
    {
      title: "Đóng tiền, nạp thẻ",
      img: "/images/Home/Body/SideBar/item3.webp",
    },
    { title: "Mua trước trả sau", img: "/images/Home/Body/SideBar/item4.webp" },
    { title: "Ưu đãi thẻ, ví", img: "/images/Home/Body/SideBar/item5.webp" },
    { title: "Bảo hiểm Tiki360", img: "/images/Home/Body/SideBar/item6.webp" },
    { title: "Tiki Exchange", img: "/images/Home/Body/SideBar/item7.webp" },
  ];
  return (
    <div className={styles.sideBar}>
      <div className={styles.listItem}>
        <div className={styles.titleList}>Nổi bật</div>
        {data.map((data) => {
          return (
            <div className={styles.item}>
              <div className={styles.pictureItem}>
                <img src={data.img}></img>
              </div>
              <div className={styles.contentItem}>{data.title}</div>
            </div>
          );
        })}
      </div>
      <div className={styles.listItem}>
        <div className={styles.titleList}>Nổi bật</div>
        {data.map((data) => {
          return (
            <div className={styles.item}>
              <div className={styles.pictureItem}>
                <img src={data.img}></img>
              </div>
              <div className={styles.contentItem}>{data.title}</div>
            </div>
          );
        })}
      </div>
      <div className={styles.listItem}>
        <div className={styles.titleList}>Nổi bật</div>
        {data.map((data) => {
          return (
            <div className={styles.item}>
              <div className={styles.pictureItem}>
                <img src={data.img}></img>
              </div>
              <div className={styles.contentItem}>{data.title}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SideBar;
