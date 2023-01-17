import React from "react";
import styles from "@/styles/Home/Home.module.scss";
import SideBar from "./SideBar/SideBar";
import Carousel from "react-bootstrap/Carousel";

const Body: React.FC = () => {
  return (
    <main>
      <div className={styles.container}>
        <div className={styles.inner}>
          {/* <div className={styles.sideBar}>
            <div className={styles.listItem}>
              <div className={styles.titleList}>Nổi bật</div>
              <div className={styles.item}>
                <div className={styles.pictureItem}>
                  <img src="/images/Home/Body/SideBar/item1.webp"></img>
                </div>
                <div className={styles.contentItem}>Siêu Sale Sinh Nhật</div>
              </div>
              <div className={styles.item}>
                <div className={styles.pictureItem}>
                  <img src="/images/Home/Body/SideBar/item2.webp"></img>
                </div>
                <div className={styles.contentItem}>Mã giảm giá</div>
              </div>
              <div className={styles.item}>
                <div className={styles.pictureItem}>
                  <img src="/images/Home/Body/SideBar/item3.webp"></img>
                </div>
                <div className={styles.contentItem}>Đóng tiền, nạp thẻ</div>
              </div>
              <div className={styles.item}>
                <div className={styles.pictureItem}>
                  <img src="/images/Home/Body/SideBar/item4.webp"></img>
                </div>
                <div className={styles.contentItem}>Mua trước trả sau</div>
              </div>
              <div className={styles.item}>
                <div className={styles.pictureItem}>
                  <img src="/images/Home/Body/SideBar/item5.webp"></img>
                </div>
                <div className={styles.contentItem}>Ưu đãi thẻ, ví</div>
              </div>
              <div className={styles.item}>
                <div className={styles.pictureItem}>
                  <img src="/images/Home/Body/SideBar/item6.webp"></img>
                </div>
                <div className={styles.contentItem}>Bảo hiểm Tiki360</div>
              </div>
              <div className={styles.item}>
                <div className={styles.pictureItem}>
                  <img src="/images/Home/Body/SideBar/item7.webp"></img>
                </div>
                <div className={styles.contentItem}>Tiki Exchange</div>
              </div>
            </div>
            <div className={styles.listItem}>
              <div className={styles.titleList}>Nổi bật</div>
              <div className={styles.item}>
                <div className={styles.pictureItem}>
                  <img src="/images/Home/Body/SideBar/item1.webp"></img>
                </div>
                <div className={styles.contentItem}>Siêu Sale Sinh Nhật</div>
              </div>
              <div className={styles.item}>
                <div className={styles.pictureItem}>
                  <img src="/images/Home/Body/SideBar/item2.webp"></img>
                </div>
                <div className={styles.contentItem}>Mã giảm giá</div>
              </div>
              <div className={styles.item}>
                <div className={styles.pictureItem}>
                  <img src="/images/Home/Body/SideBar/item3.webp"></img>
                </div>
                <div className={styles.contentItem}>Đóng tiền, nạp thẻ</div>
              </div>
              <div className={styles.item}>
                <div className={styles.pictureItem}>
                  <img src="/images/Home/Body/SideBar/item4.webp"></img>
                </div>
                <div className={styles.contentItem}>Mua trước trả sau</div>
              </div>
              <div className={styles.item}>
                <div className={styles.pictureItem}>
                  <img src="/images/Home/Body/SideBar/item5.webp"></img>
                </div>
                <div className={styles.contentItem}>Ưu đãi thẻ, ví</div>
              </div>
              <div className={styles.item}>
                <div className={styles.pictureItem}>
                  <img src="/images/Home/Body/SideBar/item6.webp"></img>
                </div>
                <div className={styles.contentItem}>Bảo hiểm Tiki360</div>
              </div>
              <div className={styles.item}>
                <div className={styles.pictureItem}>
                  <img src="/images/Home/Body/SideBar/item7.webp"></img>
                </div>
                <div className={styles.contentItem}>Tiki Exchange</div>
              </div>
            </div>
            <div className={styles.listItem}>
              <div className={styles.titleList}>Nổi bật</div>
              <div className={styles.item}>
                <div className={styles.pictureItem}>
                  <img src="/images/Home/Body/SideBar/item1.webp"></img>
                </div>
                <div className={styles.contentItem}>Siêu Sale Sinh Nhật</div>
              </div>
              <div className={styles.item}>
                <div className={styles.pictureItem}>
                  <img src="/images/Home/Body/SideBar/item2.webp"></img>
                </div>
                <div className={styles.contentItem}>Mã giảm giá</div>
              </div>
              <div className={styles.item}>
                <div className={styles.pictureItem}>
                  <img src="/images/Home/Body/SideBar/item3.webp"></img>
                </div>
                <div className={styles.contentItem}>Đóng tiền, nạp thẻ</div>
              </div>
              <div className={styles.item}>
                <div className={styles.pictureItem}>
                  <img src="/images/Home/Body/SideBar/item4.webp"></img>
                </div>
                <div className={styles.contentItem}>Mua trước trả sau</div>
              </div>
              <div className={styles.item}>
                <div className={styles.pictureItem}>
                  <img src="/images/Home/Body/SideBar/item5.webp"></img>
                </div>
                <div className={styles.contentItem}>Ưu đãi thẻ, ví</div>
              </div>
              <div className={styles.item}>
                <div className={styles.pictureItem}>
                  <img src="/images/Home/Body/SideBar/item6.webp"></img>
                </div>
                <div className={styles.contentItem}>Bảo hiểm Tiki360</div>
              </div>
              <div className={styles.item}>
                <div className={styles.pictureItem}>
                  <img src="/images/Home/Body/SideBar/item7.webp"></img>
                </div>
                <div className={styles.contentItem}>Tiki Exchange</div>
              </div>
            </div>
          </div> */}
          <SideBar></SideBar>
          <div className={styles.widgets}>
            <div className={styles.mainGrid}>
              <div className={styles.leftBanner}>
                <Carousel>
                  <Carousel.Item>
                    <img
                      className="d-block w-100 h-100"
                      src="/images/Home/Body/Widgets/Carousels/pic1.webp"
                      alt="First slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100 h-100"
                      src="/images/Home/Body/Widgets/Carousels/pic2.webp"
                      alt="Second slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100 h-100"
                      src="/images/Home/Body/Widgets/Carousels/pic3.webp"
                      alt="Third slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100 h-100"
                      src="/images/Home/Body/Widgets/Carousels/pic4.webp"
                      alt="Third slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100 h-100"
                      src="/images/Home/Body/Widgets/Carousels/pic5.webp"
                      alt="Third slide"
                    />
                  </Carousel.Item>
                </Carousel>
              </div>
              <div className={styles.rightBanner}>
                <img src="/images/Home/Body/Widgets/Carousels/pic6.webp"></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
export default Body;
