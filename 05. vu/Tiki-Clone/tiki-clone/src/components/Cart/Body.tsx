import React, { useEffect, useState } from "react";
import Title from "./Title/Title";
import styles from "@/styles/Cart/Body.module.scss";
import LeftContent from "./Content/LeftContent/LeftContent";
import RightContent from "./Content/RightContent/RightContent";
import axios from "axios";

export default function Body() {
  const [items, setItems] = useState([]);
  const accessToken =
    "eyJhbGciOiJSUzI1NiJ9.eyJzdWIiOiI1MTQwMzgwIiwiaWF0IjoxNjc1NzYyOTM4LCJleHAiOjE2NzU4NDkzMzgsImlzcyI6Imh0dHBzOi8vdGlraS52biIsImN1c3RvbWVyX2lkIjoiNTE0MDM4MCIsImVtYWlsIjoibG9uZ3Z1eGF1dHJhaTEyQGdtYWlsLmNvbSIsImNsaWVudF9pZCI6InRpa2ktc3NvIiwibmFtZSI6IjUxNDAzODAiLCJzY29wZSI6InNzbyJ9.eyNj18dE4kyLsLEyrPdLpQf8GnPY6n5Rf87_3FZixMBVKhTPse5jI9W8dYxzUi2xnc9tXScbntQ2EWTrAgg5BJD9W9muJF0MQ-M4SI9uZd44mRj-U5KmxAXD9XLFiBbByJD_T7nN9Q0JbsX9EIT5blYNnrT1ROCIh3vxYr3Lhr7Fwt3eptVglLCaBVtNE-YUeqs2EYR4VKyJ8A6HR8tq9eTJ_MmOq4Iy7WFGiLrUUrFGOO9jHrFoygOOhbLJkCr0B0hDzk1ArOqPtnBq7C4LeqqXLLWWqsTCHPYaG95yV_OeIn51mLs3e5QR9BKPZTC3PgYYWiNdQyNRIUt4LUERXydyJr-LShMuPx9mwAsO0LKRKgk1uT5GSaNGUu0c9l4HTnGBKJewS6iN7yPt5_VvPczZkcxXEHkkd5Pj19E5JDfpHwpuMDXH9IOrTZsow0d7cSSoVlbSrRJt3w2KyzHe6P9EYJFTBfcjUi1OpTzqWI92NxnQ9dSYFONeYgVh2EiVsCDSAVYkIT9JP4Q02xPgUPob4bsbMyB2WhGnNHKKYc_8T9cU2D4WsCuMVVmOPUm9VnHPGMGRS9jPNWVvGmivSrUlRS4ivgn_niXeerFWJs_los42mrk3cHtFvBxo60ocHfXb-L-MuY7LTIf61j36GMPWF4Rd-1dWJrq2e9QrNxc";
  const cookie =
    "_trackity=0e640482-cb3d-105a-0fc1-4b5219c5064b; _gcl_au=1.1.1582764071.1672659236; _fbp=fb.1.1672659236279.592816093; __uidac=963cc7adac5292b118a68615a0dc28d5; __RC=5; __R=3; _hjSessionUser_522327=eyJpZCI6Ijc4Y2NlYWViLTY5OTgtNTE1NC1iZmYxLWVhNTU5YmQ3OWExNCIsImNyZWF0ZWQiOjE2NzI2NTkyMzY2MTQsImV4aXN0aW5nIjp0cnVlfQ==; __tb=0; __iid=749; __iid=749; __su=0; __su=0; _bs=13866b57-1d5e-dc13-61b9-46b06b07dc57; _ga_W6PZ1YEX5L=GS1.1.1674049215.2.0.1674049215.0.0.0; __UF=1%252C3; TKSESSID=eb8970fb9e1d747745652414b5ad5197; _gid=GA1.2.1248232031.1675607805; delivery_zone=Vk4wMzkwMTgwMDE=; tiki_client_id=46131672.1672659232; TIKI_ACCESS_TOKEN=eyJhbGciOiJSUzI1NiJ9.eyJzdWIiOiI1MTQwMzgwIiwiaWF0IjoxNjc1NzM3NTc0LCJleHAiOjE2NzU4MjM5NzQsImlzcyI6Imh0dHBzOi8vdGlraS52biIsImN1c3RvbWVyX2lkIjoiNTE0MDM4MCIsImVtYWlsIjoibG9uZ3Z1eGF1dHJhaTEyQGdtYWlsLmNvbSIsImNsaWVudF9pZCI6InRpa2ktc3NvIiwibmFtZSI6IjUxNDAzODAiLCJzY29wZSI6InNzbyJ9.Pa8u7ElOzYpMLXL-1SmyILXDcszNHp3ZtyAlT4nIpjmVoPqkp1Ozw3tkmYvczm2WxuxgeQoP-S8N5XyvNguT87_HE54-QXcUtLVDUgmPmuymEb-o4LP9QQzE3TxYF_LXf6_IcFd7aN9chNPP7oUp6tmt2sQsQgU62rxCHjFcd3gLpLVk4wiZnSAtHBhSj7bbU-stN1d-PzXiqh9psUckoTKnqzYnQzJVvp1vASx1GyH0w6I8HCVOxEbFVjYi3GRXtUVsSCuTPZ1HDKUTYcH8XEhzKfcDj2DIboXL-s4VTadqyh2xT4g6BMR0FhIsANqlrZc6yUF8j1cyZljFkfqiE8upBH3B2S91bRyImjPXvthFGNPAmlRizWTMvU1MozYx3zhxHOdANlK59AtH67ZVr0CpkGUWT23Njl-avwFgPOlEjRGPuYaCS5KEKjtRGjfm7VKze_lAke4y7MM7e7-kVeukUDmmqcobVlYgoYGNi1rrW5ciyhI1kCc6YdC8Xr7M43XzEtq0LnvbUK8HxPZrZZnwiv-_36UYbDb-dsBnbXIynPQkajdVqrpac7T5ZnIQbfm_agVQASnLYRHBqY3RY-Lmg8xd_tpfjZKRo7hl_ymapI0OITINQb2JB1QoQvRAQxS_9K0Rzid3CiHZfc_cp5kgcmzWJkYUInRbRijiLtI; TIKI_USER=1KZgK5Pn3FIJljlrwKnoy%2Fit8eDK%2Bxd7%2B5zEysjaC3Lc2dI7h%2FVDVLohE29hOLgnxqLSCeNVrv4%3D; _gac_UA-15036050-1=1.1675737575.Cj0KCQiA54KfBhCKARIsAJzSrdpS5JtLw-okMuzirJliW9jDa_L5RdI_8-cn6GMUV2qACsSsC49MkWMaAlFlEALw_wcB; _gcl_aw=GCL.1675737578.Cj0KCQiA54KfBhCKARIsAJzSrdpS5JtLw-okMuzirJliW9jDa_L5RdI_8-cn6GMUV2qACsSsC49MkWMaAlFlEALw_wcB; __utm=source%3Dgoogle%7Cmedium%3Dcpc%7Ccampaign%3DSEA_NBR_GGL_PMA_DAP_ALL_VN_EA_UNK_UNK_C.ALL_X.18215988848_Y._V.115778542_W.DT_A._O.UNK; __utm=source%3Dgoogle%7Cmedium%3Dcpc%7Ccampaign%3DSEA_NBR_GGL_PMA_DAP_ALL_VN_EA_UNK_UNK_C.ALL_X.18215988848_Y._V.115778542_W.DT_A._O.UNK; __uif=__uid%3A5926592372884669007%7C__ui%3A1%252C3%7C__create%3A1672659237; __IP=1897275844; _ga=GA1.1.46131672.1672659232; cto_bundle=ZzAYgl9qc3RONnEzM08wc3I5WnFKRDByWnJMV2YzWlpnUiUyQllhc0ljUm51N2pzTVlxTjNRNGVBZ1AyTUlYeGtwNVV6dHZGS3R1ajh0VG5YS1ZVSTZTanRXenczcGRWSzUlMkJ5UXJXend4a25BSkJaMEg5WlkzZTlNUHVrQ3BpUHdtcDkwQk1QRDUyZFdWdlJlQzVFVldQMmhyWHp3JTNEJTNE; TOKENS={%22access_token%22:%22eyJhbGciOiJSUzI1NiJ9.eyJzdWIiOiI1MTQwMzgwIiwiaWF0IjoxNjc1NzYyOTM4LCJleHAiOjE2NzU4NDkzMzgsImlzcyI6Imh0dHBzOi8vdGlraS52biIsImN1c3RvbWVyX2lkIjoiNTE0MDM4MCIsImVtYWlsIjoibG9uZ3Z1eGF1dHJhaTEyQGdtYWlsLmNvbSIsImNsaWVudF9pZCI6InRpa2ktc3NvIiwibmFtZSI6IjUxNDAzODAiLCJzY29wZSI6InNzbyJ9.eyNj18dE4kyLsLEyrPdLpQf8GnPY6n5Rf87_3FZixMBVKhTPse5jI9W8dYxzUi2xnc9tXScbntQ2EWTrAgg5BJD9W9muJF0MQ-M4SI9uZd44mRj-U5KmxAXD9XLFiBbByJD_T7nN9Q0JbsX9EIT5blYNnrT1ROCIh3vxYr3Lhr7Fwt3eptVglLCaBVtNE-YUeqs2EYR4VKyJ8A6HR8tq9eTJ_MmOq4Iy7WFGiLrUUrFGOO9jHrFoygOOhbLJkCr0B0hDzk1ArOqPtnBq7C4LeqqXLLWWqsTCHPYaG95yV_OeIn51mLs3e5QR9BKPZTC3PgYYWiNdQyNRIUt4LUERXydyJr-LShMuPx9mwAsO0LKRKgk1uT5GSaNGUu0c9l4HTnGBKJewS6iN7yPt5_VvPczZkcxXEHkkd5Pj19E5JDfpHwpuMDXH9IOrTZsow0d7cSSoVlbSrRJt3w2KyzHe6P9EYJFTBfcjUi1OpTzqWI92NxnQ9dSYFONeYgVh2EiVsCDSAVYkIT9JP4Q02xPgUPob4bsbMyB2WhGnNHKKYc_8T9cU2D4WsCuMVVmOPUm9VnHPGMGRS9jPNWVvGmivSrUlRS4ivgn_niXeerFWJs_los42mrk3cHtFvBxo60ocHfXb-L-MuY7LTIf61j36GMPWF4Rd-1dWJrq2e9QrNxc%22%2C%22refresh_token%22:%22TKIAFlvWgx6DHTBrMnwSOLhpeOG5j2yE_9jL7jMDUBCfaEV0iuPqDvJ4TCmUuES1qVOdQ_MUEccAeIHsGOei%22%2C%22token_type%22:%22bearer%22%2C%22expires_in%22:86400%2C%22expires_at%22:1675849338603%2C%22customer_id%22:5140380}; _hjAbsoluteSessionInProgress=0; bnpl_whitelist_info={%22content%22:%22Mua%20tr%C6%B0%E1%BB%9Bc%20tr%E1%BA%A3%20sau%22%2C%22is_enabled%22:true%2C%22icon%22:%22https://salt.tikicdn.com/ts/tmp/95/15/2d/4b3d64b220f55f42885c86ac439d6d62.png%22%2C%22deep_link%22:%22https://tiki.vn/mua-truoc-tra-sau/dang-ky?src=account_page%22}; amp_99d374=kMA9TtKrzOlkqCIWTUAvLj.NTE0MDM4MA==..1goo3nfmg.1goo4rrge.hq.lm.17g; _ga_GSD4ETCY1D=GS1.1.1675847670.57.0.1675847670.60.0.0";
  useEffect(() => {
    const customAxios = axios.create();

    customAxios.defaults.headers.common["Authorization"] =
      "Bearer " + accessToken;
    customAxios.defaults.headers.common["Cookie"] = cookie;

    customAxios
      .get(
        "https://tiki.vn/api/v2/intended_cart/items?reset=false&page=1&page_size=30",
        { withCredentials: true }
      )
      .then((response) => {
        setItems(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  console.log(items);
  return (
    <div className={styles.wrapper}>
      <Title />
      <div className={styles.container}>
        <LeftContent />
        <RightContent />
      </div>
    </div>
  );
}
