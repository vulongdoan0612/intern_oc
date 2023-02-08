import React from "react";
import styles from "@/styles/Order/Content/RightContent/RightContent.module.scss";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import RightTopContent from "./RightTopContent/RightTopContent";
import { TabPanelProps } from "@/interface";

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
          <Typography>{children}</Typography>
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
export default function RightContent() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  const data = [
    {
      title: ` Dây Kháng Lực Resistance Bands Cleacco Hỗ Trợ Tập Gym
  , Yoga , Tập Thể Thao Mức Kháng Lực Theo Màu Săc Riêng
  - Hàng cao cấp - Màu xanh lục ( 50 -125 LBS)`,
      img: "https://salt.tikicdn.com/cache/200x200/ts/product/fd/8c/3c/c3d4d57a9da4147be6fb4d463dcb1cf4.jpg",
      price: "193.000 đ",
      totalPrice: "212.000 đ",
      brand: "BORO SPORT",
    },
    {
      title: ` Dây Kháng Lực Resistance Bands Cleacco Hỗ Trợ Tập Gym
    , Yoga , Tập Thể Thao Mức Kháng Lực Theo Màu Săc Riêng
    - Hàng cao cấp - Màu xanh lục ( 50 -125 LBS)`,
      img: "https://salt.tikicdn.com/cache/200x200/ts/product/fd/8c/3c/c3d4d57a9da4147be6fb4d463dcb1cf4.jpg",
      price: "193.000 đ",
      totalPrice: "212.000 đ",
      brand: "BORO SPORT",
    },
  ];
  return (
    <div className={styles.wrapper}>
      <div className={styles.headingTitle}>Đơn hàng của tôi</div>
      <div className={styles.styledTab}>
        {" "}
        <Box sx={{ width: "1019px" }}>
          <div className={styles.tab2}>
            <Box
              sx={{ borderBottom: 1, borderColor: "divider" }}
              className={styles.tab}
            >
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
              >
                <Tab label="Tất cả đơn" {...a11yProps(0)} />
                <Tab label="Chờ thanh toán" {...a11yProps(1)} />
                <Tab label="Đang xử lý" {...a11yProps(2)} />
                <Tab label="Đang vận chuyển" {...a11yProps(2)} />
                <Tab label="Đã giao" {...a11yProps(2)} />
                <Tab label="Đã hủy" {...a11yProps(2)} />
              </Tabs>
            </Box>
          </div>
          <TabPanel value={value} index={0}>
            <RightTopContent />
            <span className={styles.orders}>
              {data.map((data) => {
                return (
                  <span className={styles.orderContainer}>
                    <span className={styles.statusDeli}>
                      <span>Giao hàng thành công</span>
                    </span>
                    <span className={styles.orderInfo}>
                      <span className={styles.orderInfoLeft}>
                        <span className={styles.orderInfoDetail}>
                          <img src={data.img} />
                          <span className={styles.orderText}>
                            <span className={styles.orderName}>
                              {data.title}
                            </span>
                            <span className={styles.orderStore}>
                              <span>{data.brand}</span>
                            </span>
                          </span>
                        </span>
                      </span>
                      <span className={styles.orderInfoRight}>
                        <span>{data.price}</span>
                      </span>
                    </span>
                    <span className={styles.orderFooter}>
                      <span className={styles.totalMoney}>
                        <span className={styles.total}>Tổng tiền:</span>
                        <span className={styles.price}>{data.totalPrice}</span>
                      </span>
                      <span className={styles.buttonGroup}>
                        <span className={styles.buyAgain}>Mua lại</span>
                        <span className={styles.detail}>Xem chi tiết</span>
                      </span>
                    </span>
                  </span>
                );
              })}
            </span>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <RightTopContent />
            <span className={styles.emptyPage}>
              <span className={styles.empty}>
                <img src="https://frontend.tikicdn.com/_desktop-next/static/img/account/empty-order.png" />
                <p>Chưa có đơn hàng</p>
              </span>
            </span>
          </TabPanel>
          <TabPanel value={value} index={2}>
            <RightTopContent />
            <span className={styles.orders}>
              {data.map((data) => {
                return (
                  <span className={styles.orderContainer}>
                    <span className={styles.statusDeli}>
                      <span>Giao hàng thành công</span>
                    </span>
                    <span className={styles.orderInfo}>
                      <span className={styles.orderInfoLeft}>
                        <span className={styles.orderInfoDetail}>
                          <img src={data.img} />
                          <span className={styles.orderText}>
                            <span className={styles.orderName}>
                              {data.title}
                            </span>
                            <span className={styles.orderStore}>
                              <span>{data.brand}</span>
                            </span>
                          </span>
                        </span>
                      </span>
                      <span className={styles.orderInfoRight}>
                        <span>{data.price}</span>
                      </span>
                    </span>
                    <span className={styles.orderFooter}>
                      <span className={styles.totalMoney}>
                        <span className={styles.total}>Tổng tiền:</span>
                        <span className={styles.price}>{data.totalPrice}</span>
                      </span>
                      <span className={styles.buttonGroup}>
                        <span className={styles.buyAgain}>Mua lại</span>
                        <span className={styles.detail}>Xem chi tiết</span>
                      </span>
                    </span>
                  </span>
                );
              })}
            </span>
          </TabPanel>
          <TabPanel value={value} index={3}>
            <RightTopContent />
            <span className={styles.emptyPage}>
              <span className={styles.empty}>
                <img src="https://frontend.tikicdn.com/_desktop-next/static/img/account/empty-order.png" />
                <p>Chưa có đơn hàng</p>
              </span>
            </span>
          </TabPanel>{" "}
          <TabPanel value={value} index={4}>
            <RightTopContent />
            <span className={styles.emptyPage}>
              <span className={styles.empty}>
                <img src="https://frontend.tikicdn.com/_desktop-next/static/img/account/empty-order.png" />
                <p>Chưa có đơn hàng</p>
              </span>
            </span>
          </TabPanel>{" "}
          <TabPanel value={value} index={5}>
            <RightTopContent />
            <span className={styles.emptyPage}>
              <span className={styles.empty}>
                <img src="https://frontend.tikicdn.com/_desktop-next/static/img/account/empty-order.png" />
                <p>Chưa có đơn hàng</p>
              </span>
            </span>
          </TabPanel>{" "}
          <TabPanel value={value} index={6}>
            <RightTopContent />
            <span className={styles.emptyPage}>
              <span className={styles.empty}>
                <img src="https://frontend.tikicdn.com/_desktop-next/static/img/account/empty-order.png" />
                <p>Chưa có đơn hàng</p>
              </span>
            </span>
          </TabPanel>
        </Box>
      </div>
    </div>
  );
}
