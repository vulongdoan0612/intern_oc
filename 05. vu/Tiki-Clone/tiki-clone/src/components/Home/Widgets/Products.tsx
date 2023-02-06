import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import styles from "@/styles/Home/Home.module.scss";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { productsB, productsA } from "../../../data/dataProducts";
import Product from "./Product";
import ProductB from "./ProductB";
export default function Products() {
  interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
  }
  function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography component="div">{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
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
    {
      img: "/images/Home/Body/Widgets/TabBar/img1.webp",
      title: "Dành cho bạn",
      number: 0,
    },
    {
      img: "/images/Home/Body/Widgets/TabBar/img2.webp",
      title: "Đi chợ siêu sale",
      number: 1,
    },
    {
      img: "/images/Home/Body/Widgets/TabBar/img3.webp",
      title: "Dịch vụ số",
      number: 2,
    },
    {
      img: "/images/Home/Body/Widgets/TabBar/img4.webp",
      title: "Deal siêu hot",
      number: 3,
    },
    {
      img: "/images/Home/Body/Widgets/TabBar/img5.webp",
      title: "Rẻ vô đối",
      number: 4,
    },
    {
      img: "/images/Home/Body/Widgets/TabBar/img6.webp",
      title: "Xu hướng thời trang",
      number: 5,
    },
  ];
  return (
    <div>
      <div className={styles.wrapperProducts}>
        <div className={styles.headerProducts}>
          <div className={styles.titleProducts} style={{ marginTop: "16px" }}>
            <h2>Gợi ý hôm nay</h2>
          </div>
          <div className={styles.tabProducts}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              {data.map((data) => {
                return (
                  <Tab
                    label={
                      <div className={styles.tabItem}>
                        <div className={styles.iconTab}>
                          <img src={data.img}></img>
                        </div>
                        <div className={styles.tabText}>{data.title}</div>
                      </div>
                    }
                    {...a11yProps(data.number)}
                  ></Tab>
                );
              })}
            </Tabs>
          </div>
        </div>
        <div className={styles.tabContent}>
          <div className={styles.content}>
            <TabPanel value={value} index={0}>
              <Product></Product>
            </TabPanel>
            <TabPanel value={value} index={1}>
              <ProductB></ProductB>
            </TabPanel>
          </div>
        </div>
      </div>
    </div>
  );
}
