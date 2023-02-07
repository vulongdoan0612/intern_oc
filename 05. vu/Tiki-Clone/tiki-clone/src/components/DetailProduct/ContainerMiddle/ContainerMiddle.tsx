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
  return (
    <div className={styles.wrapper}>
      <div className={styles.left}>
        <div className={styles.groupTable}>
          <h2>Thông tin chi tiết</h2>
          <div className={styles.contentTable}>
            <table>
              <tbody>
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
              classNameButton={styles.buttonShow}
              classNameButtonDiv={styles.buttonShowDiv}
            >
              <div
                className="Container"
                dangerouslySetInnerHTML={{ __html: dataShow }}
              ></div>
              <div className={styles.gradient}></div>
            </ShowMore>
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
