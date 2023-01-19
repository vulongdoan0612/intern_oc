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
              <Tab
                label={
                  <div className={styles.tabItem}>
                    <div className={styles.iconTab}>
                      <img src="/images/Home/Body/Widgets/TabBar/img1.webp"></img>
                    </div>
                    <div className={styles.tabText}>Dành cho bạn</div>
                  </div>
                }
                {...a11yProps(0)}
              ></Tab>
              <Tab
                label={
                  <div className={styles.tabItem}>
                    <div className={styles.iconTab}>
                      <img src="/images/Home/Body/Widgets/TabBar/img2.webp"></img>
                    </div>
                    <div className={styles.tabText}>Đi chợ siêu sale</div>
                  </div>
                }
                {...a11yProps(1)}
              />
              <Tab
                label={
                  <div className={styles.tabItem}>
                    <div className={styles.iconTab}>
                      <img src="/images/Home/Body/Widgets/TabBar/img3.webp"></img>
                    </div>
                    <div className={styles.tabText}>Dịch vụ số</div>
                  </div>
                }
                {...a11yProps(2)}
              />
              <Tab
                label={
                  <div className={styles.tabItem}>
                    <div className={styles.iconTab}>
                      <img src="/images/Home/Body/Widgets/TabBar/img4.webp"></img>
                    </div>
                    <div className={styles.tabText}>Deal siêu hot</div>
                  </div>
                }
                {...a11yProps(3)}
              />
              <Tab
                label={
                  <div className={styles.tabItem}>
                    <div className={styles.iconTab}>
                      <img src="/images/Home/Body/Widgets/TabBar/img5.webp"></img>
                    </div>
                    <div className={styles.tabText}>Rẻ vô đối</div>
                  </div>
                }
                {...a11yProps(4)}
              />
              <Tab
                label={
                  <div className={styles.tabItem}>
                    <div className={styles.iconTab}>
                      <img src="/images/Home/Body/Widgets/TabBar/img6.webp"></img>
                    </div>
                    <div className={styles.tabText}>Xu hướng thời trang</div>
                  </div>
                }
                {...a11yProps(5)}
              />
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
