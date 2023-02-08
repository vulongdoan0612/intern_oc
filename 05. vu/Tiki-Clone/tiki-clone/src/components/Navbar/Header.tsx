import React from "react";
import styles from "@/styles/Navbar/Navbar.module.scss";
import { Badge } from "@mui/material";
import Link from "next/link";
import { ControlledMenu, MenuItem, useMenuState } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";

const Header: React.FC = () => {
  const [menuProps, toggleMenu] = useMenuState({ transition: true });
  return (
    <header className={styles.mainHeader}>
      <div className={styles.container}>
        <div className={styles.middle}>
          <div className={styles.middleLeft}>
            <div className={styles.logo}>
              <div style={{ display: "flex" }}>
                <Link href="/">
                  {" "}
                  <img src="/images/Navbar/logo.png" alt=""/>
                </Link>
              </div>
            </div>
            <div className={styles.formSearch}>
              <img
                className={styles.searchIcon}
                src="/images/Navbar/search.png"
                alt=""
              />
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
              <img src="/images/Navbar/home.png" alt=""/>
              <p>Trang chủ</p>
            </div>
            <div className={styles.astra}>
              <img src="/images/Navbar/astra.png" alt=""/>
              <p>Astra</p>
            </div>
            <div className={styles.user}>
              <img
                src="https://s3.amazonaws.com/arc-authors/washpost/8ecda6d3-9f58-433c-8b2b-c8cab71b62e5.jpg"
                alt=""
                style={{ borderRadius: "50%" }}
              />
              <p onPointerEnter={() => toggleMenu(true)}>Nguyễn Vũ</p>
              <ControlledMenu
                {...menuProps}
                onPointerLeave={() => toggleMenu(false)}
                onClose={() => toggleMenu(false)}
              >
                <Link href="/sales/order/history">
                  <MenuItem>Quản lý đơn hàng</MenuItem>
                </Link>
                <MenuItem>Thông tin tài khoản</MenuItem>
                <MenuItem>Đăng xuất</MenuItem>
              </ControlledMenu>
            </div>
            <div className={styles.cart}>
              <Link href="/checkout/cart">
                <div className={styles.badgeCart}>
                  <Badge badgeContent={4} color="warning" >
                    <img src="/images/Navbar/cart.png" alt=""/>
                  </Badge>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.bottom}>
          <div className={styles.bottomLeft}>
            <a>trái cây</a>
            <a>thịt, trứng</a>
            <a>rau củ quả</a>
            <a>sữa, bơ, ahô mai</a>
            <a>hải sản</a>
            <a>gạo, mì ăn liền</a>
            <a>đồ uống, rượu bia</a>
            <a>bánh kẹo</a>
          </div>
          <div className={styles.bottomRight}>
            <img src="https://salt.tikicdn.com/ts/upload/88/5c/9d/f5ee506836792eb7775e527ef8350a44.png"/>
            <h4>Giao đến</h4>
            <div className={styles.address}>
              Q. Bình Tân, P. An Lạc, Hồ Chí Minh
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
