import React, { useEffect, useState } from "react";
import styles from "@/styles/DealHot/DealHotBottom/DealHotBottom.module.scss";
import InfiniteScroll from "react-infinite-scroll-component";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import Spinner from "@/components/Spinner/Spinner";
import { Datum } from "@/interface";

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
  const fetchData = async () => {
    const commentsFormServer = await axios.get(
      `https://api.tiki.vn/v2/widget/deals/collection?per_page=${page}&trackity_id=0e640482-cb3d-105a-0fc1-4b5219c5064b`
    );
    console.log(commentsFormServer);
    if (commentsFormServer.data.data.length > 100000000000000) {
      console.log();
      sethasMore(false);
    }
      if (Array.isArray(commentsFormServer.data.data)) {
        setData([...commentsFormServer.data.data]);
      } else {
        console.log("error");
      }     setpage(page + 17);
  };
  return (
    <InfiniteScroll
      dataLength={data.length} 
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
                      <img src="/images/Home/Body/Widgets/Products/Product/uytin.png"/>
                    </div>
                    <div className={styles.thumbnailImg}>
                      <img src={product.product?.thumbnail_url} alt=""/>
                    </div>
                  </div>
                  <div className={styles.info}>
                    <div className={styles.name}>
                      <h3>{product.name}</h3>
                    </div>
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
