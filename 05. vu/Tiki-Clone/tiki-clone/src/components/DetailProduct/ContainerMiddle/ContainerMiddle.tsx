import React, { ReactNode, useEffect, useState } from "react";
import styles from "@/styles/DetailProduct/ContainerMiddle.module.scss";
import ShowMore from "react-show-more-button";
import { useRouter } from "next/router";
import axios, { AxiosResponse } from "axios";
import parse from "html-react-parser";

export default function ContainerMiddle() {
  const [dataProduct, setDataProduct] = useState<AxiosResponse | null | void>(
    null
  );
  const [dataShow, setDataShow] = useState();
  const router = useRouter();
  useEffect(() => {
    const getApi = async () => {
      if (!router.isReady) return;
      const { id } = router.query;
      const data2 = await axios.get(`https://tiki.vn/api/v2/products/${id}`);
      setDataProduct(data2);
      setDataShow(data2.data.description);
    };
    getApi();
  }, [router]);
  console.log(dataProduct);
  console.log(dataShow);
  return (
    <div className={styles.wrapper}>
      <div className={styles.left}>
        <div className={styles.groupTable}>
          <h2>Thông tin chi tiết</h2>
          <div className={styles.contentTable}>
            <table>
              <tbody>
                {/* {dataProduct.data.specifications.map((product) => {
                  return <></>;
                })} */}
                {dataProduct?.data.specifications[0] ? (
                  <>
                    {dataProduct?.data.specifications[0].attributes.map(
                      (product: {
                        value: ReactNode;
                        name:
                          | string
                          | number
                          | boolean
                          | React.ReactElement<
                              any,
                              string | React.JSXElementConstructor<any>
                            >
                          | React.ReactFragment
                          | React.ReactPortal
                          | null
                          | undefined;
                      }) => {
                        return (
                          <tr>
                            <td>{product.name}</td>
                            <td>{parse(`${product.value}`)}</td>
                          </tr>
                        );
                      }
                    )}
                  </>
                ) : (
                  <></>
                )}
                {dataProduct?.data.specifications[1] ? (
                  <>
                    {dataProduct?.data.specifications[1].attributes.map(
                      (product: {
                        value: ReactNode;
                        name:
                          | string
                          | number
                          | boolean
                          | React.ReactElement<
                              any,
                              string | React.JSXElementConstructor<any>
                            >
                          | React.ReactFragment
                          | React.ReactPortal
                          | null
                          | undefined;
                      }) => {
                        return (
                          <tr>
                            <td>{product.name}</td>
                            <td>{product.value}</td>
                          </tr>
                        );
                      }
                    )}
                  </>
                ) : (
                  <></>
                )}
              </tbody>
            </table>
          </div>
        </div>
        <div className={styles.groupInfo}>
          <h2>Mô Tả Sản Phẩm</h2>
          <div className={styles.contentInfo}>
            <ShowMore
              maxHeight={700}
              defaultAnchor={true}
              // className={styles.showMore}
              classNameButton={styles.buttonShow}
              classNameButtonDiv={styles.buttonShowDiv}
            >
              <div
                className="Container"
                dangerouslySetInnerHTML={{ __html: dataShow }}
              ></div>
              <div className={styles.gradient}></div>
            </ShowMore>
            {/* <ShowMore
              maxHeight={700}
              defaultAnchor={true}
              // className={styles.showMore}
              classNameButton={styles.buttonShow}
            >
              <p>
                <img src="https://salt.tikicdn.com/ts/tmp/c5/f0/1d/b8a5acdab59f28a1855b6d186e48118e.jpg"></img>
              </p>
              <p>
                <img src="https://salt.tikicdn.com/ts/tmp/ec/c4/e4/a369d4029067aecc00b427900d223a24.jpg"></img>
              </p>
              <p>
                <img src="https://salt.tikicdn.com/ts/tmp/cc/ce/8c/5dd5c59484c2bf9032492d03c44d1729.jpg"></img>
              </p>
              <ul>
                <li>
                  Bình giữ nhiệt có ống hút Lock&Lock Bucket Tumbler with Straw
                  LHC4268
                </li>
                <li>
                  Bình giữ nhiệt có ống hút Lock&Lock Bucket Tumbler with Straw
                  LHC4268
                </li>
                <li>
                  Bình giữ nhiệt có ống hút Lock&Lock Bucket Tumbler with Straw
                  LHC4268
                </li>
                <p>
                  Giá sản phẩm trên Tiki đã bao gồm thuế theo luật hiện hành.
                  Bên cạnh đó, tuỳ vào loại sản phẩm, hình thức và địa chỉ giao
                  hàng mà có thể phát sinh thêm chi phí khác như phí vận chuyển,
                  phụ phí hàng cồng kềnh, thuế nhập khẩu (đối với đơn hàng giao
                  từ nước ngoài có giá trị trên 1 triệu đồng).....
                </p>
              </ul>
            </ShowMore> */}
          </div>
        </div>
      </div>
      <div className={styles.right}>
        <div className="">
          <img src="https://salt.tikicdn.com/cache/w1080/ts/tka/a2/72/4d/b24f18833652303c59d931310fbe2b7e.png.webp"></img>
        </div>
      </div>
    </div>
  );
}
