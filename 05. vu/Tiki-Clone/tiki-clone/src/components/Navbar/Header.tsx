import React from "react";
import Image from "next/image";
import styles from "@/styles/Navbar/Navbar.module.scss";
import { Badge } from "@mui/material";
// import MailIcon from "@mui/icons-material/Mail";

const Header: React.FC = () => {
  return (
    <header className={styles.mainHeader}>
      <div className={styles.container}>
        <div className={styles.middle}>
          <div className={styles.middleLeft}>
            <div className={styles.logo}>
              <img src="/images/Navbar/logo.png" alt=""></img>
            </div>
            <div className={styles.formSearch}>
              <img
                className={styles.searchIcon}
                src="/images/Navbar/search.png"
                alt=""
              ></img>
              <input
                className={styles.searchInput}
                placeholder="Bạn tìm gì hôm nay"
                type="text"
              ></input>
              <button className={styles.searchBtn}>Tìm kiếm</button>
            </div>
          </div>
          <div className={styles.middleRight}>
            <div className={styles.home}>
              <img src="/images/Navbar/home.png" alt=""></img>
              <p>Trang chủ</p>
            </div>
            <div className={styles.astra}>
              <img src="/images/Navbar/astra.png" alt=""></img>
              <p>Astra</p>
            </div>
            <div className={styles.user}>
              <img src="/images/Navbar/user.png" alt=""></img>
              <p>Tài khoản</p>
            </div>
            <div className={styles.cart}>
              <div className={styles.badgeCart}>
                <Badge badgeContent={4} color="secondary">
                  <img src="/images/Navbar/cart.png" alt=""></img>
                </Badge>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.bottom}>
          <div className={styles.bottomLeft}>
            <a>trái cây</a>
            <a>thịt trứng</a>
            <a>rau củ quả</a>
            <a>sữa, ahô mai, bơ</a>
            <a>hải sản</a>
            <a>gạo</a>
            <a>bánh kẹo</a>
            <a>nước uống</a>
          </div>
          <div className={styles.bottomRight}>
            <img src="/images/Navbar/location.png"></img>
            <h4>Giao đến: </h4>
            <div className={styles.address}>Q. 1, P. Bến Nghé, Hồ Chí Minh</div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
