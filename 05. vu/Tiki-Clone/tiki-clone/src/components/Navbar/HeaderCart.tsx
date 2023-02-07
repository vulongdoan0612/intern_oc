import React from "react";
import styles from "@/styles/Navbar/HeaderCart.module.scss";
import { Badge } from "@mui/material";
import Link from "next/link";
import { ControlledMenu, MenuItem, useMenuState } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css"; // import MailIcon from "@mui/icons-material/Mail";

const Header: React.FC = () => {
  const [menuProps, toggleMenu] = useMenuState({ transition: true });
  return (
    <header className={styles.mainHeader}>
      <div className={styles.container}>
        <div className={styles.middle}>
          <div className={styles.middleLeft}>
            <div className={styles.logo}>
              <Link href="/">
                {" "}
                <img
                  src="https://salt.tikicdn.com/ts/upload/ae/f5/15/2228f38cf84d1b8451bb49e2c4537081.png"
                  alt=""
                ></img>
              </Link>
            </div>
            <div className={styles.formSearch}>
              <input
                className={styles.searchInput}
                placeholder="Bạn tìm gì hôm nay"
                type="text"
              ></input>
              <button className={styles.searchBtn}>Tìm kiếm</button>
            </div>
          </div>
          <div className={styles.middleRight}>
            <div className={styles.user}>
              <img
                src="https://salt.tikicdn.com/ts/upload/67/de/1e/90e54b0a7a59948dd910ba50954c702e.png"
                alt=""
              ></img>
              <div className={styles.infoUser}>
                <p>Tài khoản</p>
                <p
                  style={{ display: "flex", alignItems: "center" }}
                  onPointerEnter={() => toggleMenu(true)}
                >
                  Nguyen Vu
                  <img
                    src="https://salt.tikicdn.com/ts/upload/d7/d4/a8/34939af2da1ceeeae9f95b7485784233.png"
                    style={{ width: "16px", height: "16px" }}
                  ></img>
                </p>
              </div>
            </div>
            <div className={styles.cart}>
              <Link href="/checkout/cart">
                <div
                  className={styles.badgeCart}
                  style={{ display: "flex", alignItems: "flex-end" }}
                >
                  <Badge badgeContent={4} color="secondary">
                    <img
                      src="https://salt.tikicdn.com/ts/upload/40/44/6c/b80ad73e5e84aeb71c08e5d8d438eaa1.png"
                      alt=""
                    ></img>
                  </Badge>
                  <span style={{ color: "white", marginLeft: "10px" }}>
                    Giỏ hàng
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.bottom}>
          <div
            style={{ display: "flex", alignItems: "center" }}
            className={styles.bottomLeft}
          >
            <Link href="https://tiki.vn/astra-rewards/home">
              <img src="https://salt.tikicdn.com/ts/brickv2og/70/07/62/9a90de2324bda05df7ff137972de1c70.png"></img>
            </Link>
            <div className={styles.quickLinks}>
              <p>trái cây</p>
              <p>thịt, trứng</p>
              <p>rau củ quả</p>
              <p>sữa, bơ, phô mai</p>
              <p>hải sản</p>
              <p>gạo, mì ăn liền</p>
              <p>đồ uống, rượu bia</p>
              <p>bánh kẹo</p>
            </div>
          </div>
          <div className={styles.bottomRight}>
            <img src="https://frontend.tikicdn.com/_desktop-next/static/img/icon-seller.svg"></img>
            <span>Bán hàng cùng Tiki</span>
          </div>
        </div>
      </div>
      <ControlledMenu
        className={styles.control}
        {...menuProps}
        // anchorRef={ref}
        onPointerLeave={() => toggleMenu(false)}
        onClose={() => toggleMenu(false)}
      >
        <MenuItem>Thông tin tài khoản</MenuItem>
        <MenuItem>Đơn hàng của tôi</MenuItem>
        <MenuItem>Đăng xuất</MenuItem>
      </ControlledMenu>
    </header>
  );
};
export default Header;
