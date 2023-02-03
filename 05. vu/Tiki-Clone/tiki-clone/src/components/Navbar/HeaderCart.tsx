import React from "react";
import Image from "next/image";
import styles from "@/styles/Navbar/Navbar.module.scss";
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
                <img src="/images/Navbar/logo.png" alt=""></img>
              </Link>
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
            <div
              className={styles.user}
              onPointerEnter={() => toggleMenu(true)}
            >
              <img src="/images/Navbar/user.png" alt=""></img>
              <p>Tài khoản</p>
            </div>
            <div className={styles.cart}>
              <Link href="/checkout/cart">
                <div className={styles.badgeCart}>
                  <Badge badgeContent={4} color="secondary">
                    <img src="/images/Navbar/cart.png" alt=""></img>
                  </Badge>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <ControlledMenu
        {...menuProps}
        // anchorRef={ref}
        onPointerLeave={() => toggleMenu(false)}
        onClose={() => toggleMenu(false)}
      >
        <MenuItem>New File</MenuItem>
        <MenuItem>Save</MenuItem>
        <MenuItem>Close Window</MenuItem>
      </ControlledMenu>
    </header>
  );
};
export default Header;
