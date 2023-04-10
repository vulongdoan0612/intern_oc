import React, { useEffect, useState } from "react";
import styles from "@/styles/Home/Home.module.scss";
import StarRateIcon from "@mui/icons-material/StarRate";
import { useRouter } from "next/router";
import axios from "axios";
import Link from "next/link";
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from "@/components/Spinner/Spinner";
import { Datum } from "@/interface";

export default function Product() {
  const router = useRouter();
  const numberFormatter = Intl.NumberFormat("en-US");

  const [data, setData] = useState<Datum[]>([]);

  const [hasMore, sethasMore] = useState(true);

  const [page, setpage] = useState(12);
  const clickedDetail = (id: number) => {
    router.push({
      pathname: `/${id}`,
    });
  };
  useEffect(() => {
    const getAPI = async () => {
      const commentsFormServer = await axios.get(
        `https://api.tiki.vn/v2/widget/deals/collection?per_page=12&trackity_id=0e640482-cb3d-105a-0fc1-4b5219c5064b`
      );
      setData(commentsFormServer.data.data);
    };
    getAPI();
  }, []);
  console.log(data);
  const fetchData = async () => {
    const commentsFormServer = await axios.get(
      `https://api.tiki.vn/v2/widget/deals/collection?per_page=${page}&trackity_id=0e640482-cb3d-105a-0fc1-4b5219c5064b`
    );
    if (commentsFormServer.data.data.length > 240) {
      console.log();
      sethasMore(false);
    }
    if (Array.isArray(commentsFormServer.data.data)) {
      setData([...commentsFormServer.data.data]);
    } else {
      console.log("error");
    }
    setpage(page + 12);
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
                key={product.product.master_id}
                className={styles.productItem}
                onClick={() => clickedDetail(product.product?.master_id)}
              >
                <>
                  <div className={styles.thumbnail}>
                    <div className={styles.smallImg}>
                      <img src="/images/Home/Body/Widgets/Products/Product/uytin.png" />
                    </div>
                    <div className={styles.thumbnailImg}>
                      <img src={product.product?.thumbnail_url} alt="" />
                    </div>
                  </div>
                  <div className={styles.info}>
                    <div className={styles.name}>
                      <h3>{product.name}</h3>
                    </div>
                    <div className={styles.underName}>
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
                    </div>
                    <div className={styles.price}>
                      {numberFormatter.format(product.product?.price)}
                    </div>
                    <div className={styles.underPrice}>
                      Tặng tới 45 ASA (10k ₫) <br></br>≈ 2.4% hoàn tiền
                    </div>
                    <div className={styles.underRating}>
                      <div className={styles.item}>
                        <span>Freeship</span>
                      </div>
                      <div className={styles.item}>
                        <span>Freeship</span>
                      </div>
                    </div>
                  </div>
                  <div className={styles.badgeDelivery}>
                    <span style={{ color: " rgb(128, 128, 137)" }}>
                      Giao thứ 5, ngày 26/01
                    </span>
                  </div>
                </>
              </div>
            </Link>
          );
        })}
      </div>
    </InfiniteScroll>
  );
}
