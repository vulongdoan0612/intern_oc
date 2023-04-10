import React, { useEffect, useState } from "react";
import styles from "@/styles/DetailProduct/DetailProduct.module.scss";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import axios, { AxiosResponse } from "axios";
import { useRouter } from "next/router";
function handleClick(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

export default function CustomSeparator() {
  const [dataProduct, setDataProduct] = useState<AxiosResponse | null | void>(
    null
  );
  const router = useRouter();
  useEffect(() => {
    const getApi = async () => {
      if (!router.isReady) return;
      const { id } = router.query;
      const data2 = await axios.get(`https://tiki.vn/api/v2/products/${id}`);
      setDataProduct(data2);
    };
    getApi();
  }, [router]);
  const breadcrumbs = [
    <Link
      underline="hover"
      key="1"
      fontSize={"14px"}
      fontWeight={"300"}
      color={"rgb(128, 128, 137)"}
      href="/"
      onClick={handleClick}
    >
      {dataProduct?.data.breadcrumbs[0] ? (
        dataProduct?.data.breadcrumbs[0].name
      ) : (
        <></>
      )}
    </Link>,
    <Link
      underline="hover"
      key="2"
      fontSize={"14px"}
      fontWeight={"300"}
      color={"rgb(128, 128, 137)"}
      href="/material-ui/getting-started/installation/"
      onClick={handleClick}
    >
      {dataProduct?.data.breadcrumbs[1] ? (
        dataProduct?.data.breadcrumbs[1].name
      ) : (
        <></>
      )}
    </Link>,
    <Link
      underline="hover"
      key="2"
      fontSize={"14px"}
      fontWeight={"300"}
      color={"rgb(128, 128, 137)"}
      href="/material-ui/getting-started/installation/"
      onClick={handleClick}
    >
      {dataProduct?.data.breadcrumbs[2] ? (
        dataProduct?.data.breadcrumbs[2].name
      ) : (
        <></>
      )}
    </Link>,
    <Link
      underline="hover"
      key="2"
      fontWeight={"300"}
      color={"rgb(128, 128, 137)"}
      fontSize={"14px"}
      href="/material-ui/getting-started/installation/"
      onClick={handleClick}
    >
      {dataProduct?.data.breadcrumbs[3] ? (
        dataProduct?.data.breadcrumbs[3].name
      ) : (
        <></>
      )}{" "}
    </Link>,
    <Link
      underline="hover"
      key="2"
      fontSize={"14px"}
      fontWeight={"300"}
      color={"rgb(128, 128, 137)"}
      href="/material-ui/getting-started/installation/"
      onClick={handleClick}
    >
      {dataProduct?.data.breadcrumbs[4] ? (
        dataProduct?.data.breadcrumbs[4].name
      ) : (
        <></>
      )}{" "}
    </Link>,

    <Typography
      key="3"
      fontWeight={"300"}
      color={"rgb(128, 128, 137)"}
      fontSize={"14px"}
    >
      {dataProduct?.data.breadcrumbs[length - 1] ? (
        dataProduct?.data.breadcrumbs[length - 1].name
      ) : (
        <></>
      )}
    </Typography>,
  ];

  return (
    <Stack spacing={2}>
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
      >
        {breadcrumbs}
      </Breadcrumbs>
    </Stack>
  );
}
