import React, { useEffect, useState } from "react";
import StarRateIcon from "@mui/icons-material/StarRate";
// import styles from "@/styles/Home/Home.module.scss";

import styles from "@/styles/DealHot/DealHotBottom/DealHotBottom.module.scss";
import InfiniteScroll from "react-infinite-scroll-component";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import Spinner from "@/components/Spinner/Spinner";
interface Product {
  id: number;
  master_id: number;
  sku: string;
  name: string;
  url_key: string;
  url_path: string;
  type: string;
  short_description: string;
  price: number;
  list_price: number;
  original_price: number;
  price_prefix: string;
  discount: number;
  discount_rate: number;
  rating_average: number;
  review_count: number;
  favourite_count: number;
  thumbnail_url: string;
  has_ebook: boolean;
  inventory_status: string;
  inventory_type: string;
  productset_group_name: string;
  is_flower: boolean;
  is_fresh: boolean;
  is_gift_card: boolean;
  seller_product_id: number;
  delivery_info_text: string;
}

interface Datum {
  progress: any;
  thumbnail_url: string | undefined;
  deal_id: number;
  name: string;
  deal_status: string;
  status: number;
  url: string;
  tags: string;
  discount_percent: number;
  special_price: number;
  special_from_date: number;
  from_date: string;
  special_to_date: number;
  score: number;
  store_id: number;
  store_name: string;
  store_logo: string;
  product: Product;
}
export default function DealHotBottom() {
  const router = useRouter();

  const [data, setData] = useState<Datum[]>([]);

  const [hasMore, sethasMore] = useState(true);

  const [page, setpage] = useState(12);

  const clickedDetail = (id: number) => {
    router.push({
      pathname: `/${id}`,
    });
  };
  // useEffect(() => {
  //   const getAPI = async () => {
  //     const commentsFormServer = await axios.get(
  //       `https://api.tiki.vn/v2/widget/deals/collection?per_page=12&trackity_id=0e640482-cb3d-105a-0fc1-4b5219c5064b`
  //     );
  //     setData(commentsFormServer.data.data);
  //   };
  //   getAPI();
  // }, []);
  const fetchData = async () => {
    const commentsFormServer = await axios.get(
      `https://api.tiki.vn/v2/widget/deals/collection?per_page=${page}&trackity_id=0e640482-cb3d-105a-0fc1-4b5219c5064b`
    );
    console.log(commentsFormServer);
    if (commentsFormServer.data.data.length > 100000000000000) {
      console.log();
      sethasMore(false);
    }
    // if (Array.isArray(commentsFormServer.data.data)) {
    setData([...commentsFormServer.data.data]);
    // } else {
    // console.log("error");
    // } // }, 500);
    console.log(data);
    setpage(page + 17);
  };
  return (
    <InfiniteScroll
      dataLength={data.length} //This is important field to render the next data
      next={fetchData}
      hasMore={hasMore}
      loader={<Spinner />}
      endMessage={<>End</>}
    >
      <div className={styles.contentProducts}>
        {data.map((product) => {
          return (
            <Link href={`/${product.product?.master_id}`}>
              <div
                className={styles.productItem}
                onClick={() => clickedDetail(product.product?.master_id)}
              >
                <>
                  <div className={styles.thumbnail}>
                    <div className={styles.smallImg}>
                      <img src="/images/Home/Body/Widgets/Products/Product/uytin.png"></img>
                    </div>
                    <div className={styles.thumbnailImg}>
                      <img src={product.product?.thumbnail_url} alt=""></img>
                    </div>
                  </div>
                  <div className={styles.info}>
                    <div className={styles.name}>
                      <h3>{product.name}</h3>
                    </div>
                    {/* <div className={styles.underName}>
                      <div className={styles.rating}>
                        <span>{product.product?.rating_average}</span>
                        <StarRateIcon
                          style={{
                            color: "rgb(253, 216, 54)",
                            height: "14px",
                            width: "14px",
                          }}
                        ></StarRateIcon>
                      </div>
                      <div className={styles.sole}>
                        <div className={styles.soleBorder}></div>
                        <div className={styles.contentSole}>
                          Đã bán {product.progress?.qty_ordered}
                        </div>
                      </div>
                    </div> */}
                    <div className={styles.price}>
                      {product.product?.price}
                      <span style={{ fontSize: "10px", marginLeft: "10px" }}>
                        -4%
                      </span>
                    </div>
                    <div
                      className={styles.underPrice}
                      style={{ textDecoration: "line-through" }}
                    >
                      160.000d
                    </div>
                    <div className={styles.progressBar}>
                      <div className={styles.bar}>
                        <div
                          className={styles.percent}
                          style={{ width: "10%" }}
                        ></div>
                        <div className={styles.content}>
                          <p>Vừa mở bán</p>
                        </div>
                      </div>
                    </div>
                    {/* <div className={styles.underRating}>
                      <div className={styles.item}>
                        <span>Freeship</span>
                      </div>
                      <div className={styles.item}>
                        <span>Freeship</span>
                      </div>
                    </div> */}
                  </div>
                  {/* <div className={styles.badgeDelivery}>
                    <span style={{ color: " rgb(128, 128, 137)" }}>
                      Giao thứ 5, ngày 26/01
                    </span>
                  </div> */}
                </>
              </div>
            </Link>
          );
        })}
      </div>
    </InfiniteScroll>
  );
}
