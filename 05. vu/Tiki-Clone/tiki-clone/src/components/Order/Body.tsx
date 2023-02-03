import React from "react";
import LeftContent from "./Content/LeftContent/LeftContent";
import RightContent from "./Content/RightContent/RightContent";
import styles from "@/styles/Order/Body.module.scss";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
export default function Body() {
  function handleClick(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    event.preventDefault();
    console.info("You clicked a breadcrumb.");
  }
  const breadcrumbs = [
    <Link
      underline="hover"
      key="1"
      fontSize={"14px"}
      //   color="inherit"
      fontWeight={"300"}
      color={"rgb(128, 128, 137)"}
      href="/"
      onClick={handleClick}
    >
      Trang chủ
    </Link>,
    <Link
      underline="hover"
      key="2"
      fontSize={"14px"}
      //   color="inherit"
      fontWeight={"300"}
      color={"rgb(128, 128, 137)"}
      href="/material-ui/getting-started/installation/"
      onClick={handleClick}
    >
      Điện gia dụng
    </Link>,
    <Link
      underline="hover"
      key="2"
      fontSize={"14px"}
      //   color="inherit"
      fontWeight={"300"}
      color={"rgb(128, 128, 137)"}
      href="/material-ui/getting-started/installation/"
      onClick={handleClick}
    >
      Đồ dùng nhà bếp
    </Link>,
    <Link
      underline="hover"
      key="2"
      //   color="inherit"
      fontWeight={"300"}
      color={"rgb(128, 128, 137)"}
      fontSize={"14px"}
      href="/material-ui/getting-started/installation/"
      onClick={handleClick}
    >
      Nồi điện các loại
    </Link>,
    <Link
      underline="hover"
      key="2"
      fontSize={"14px"}
      //   color="inherit"
      fontWeight={"300"}
      color={"rgb(128, 128, 137)"}
      href="/material-ui/getting-started/installation/"
      onClick={handleClick}
    >
      Nồi chiên
    </Link>,

    <Typography
      key="3"
      //   color="inherit"
      fontWeight={"300"}
      color={"rgb(128, 128, 137)"}
      fontSize={"14px"}
    >
      Nồi Chiên Ngập Dầu Lock&Lock EJF716SLV (1.5 Lít) - Hàng chính hãng
    </Typography>,
  ];

  return (
    <div className={styles.wrapper}>
      <div className={styles.breadcrumb}>
        <Stack spacing={2}>
          <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" />}
            aria-label="breadcrumb"
          >
            {breadcrumbs}
          </Breadcrumbs>
        </Stack>
      </div>
      <div className={styles.container}>
        <LeftContent></LeftContent>
        <RightContent></RightContent>
      </div>
    </div>
  );
}
