import React from "react";
import styles from "@/styles/Footer/Footer.module.scss";
import { data, data2 } from "./data";
import parse from "html-react-parser";

export default function Footer() {
  return (
    <div className={styles.wrapperFooter}>
      <div className={styles.footerTop}>
        <div className={styles.footerTopContainer}>
          <div className={styles.footerBlockSuport}>
            <h4>Hỗ trợ khách hàng</h4>
            <p>
              Hotline: <a>1900-6035</a>
              <span>(1000 đ/phút, 8-21h kể cả T7, CN)</span>
            </p>
            <a>Các câu hỏi thường gặp</a>
            <a>Gửi yêu cầu hỗ trợ</a>
            <a>Hướng dẫn đặt hàng</a>
            <a>Phương thức vận chuyển</a>
            <a>Chính sách đổi trả</a>
            <a>Hướng dẫn trả góp</a>
            <a>Chính sách hàng nhập khẩu</a>
          </div>
          <div className={styles.footerBlockAboutTiki}>
            <h4>Về Tiki</h4>
            <a>Giới thiệu Tiki</a>
            <a>Tiki Blog</a>
            <a>Tuyển dụng</a>
            <a>Chính sách bảo mật thanh toán</a>
            <a>Chính sách bảo mật thông tin cá nhân</a>
            <a>Chính sách giải quyết khiếu nại</a>
            <a>Điều khoản sử dụng</a>
            <a>Giới thiệu Tiki Xu</a>
            <a>Gửi Astra nhận Xu mua sắm thả ga</a>
            <a>Tiếp thị liên kết cùng Tiki</a>
            <a>Bán hàng doanh nghiệp</a>
            <a>Điều kiện vận chuyển</a>
          </div>
          <div className={styles.footerBlockHopTac}>
            <h4>Hợp tác và liên kết</h4>
            <a>Quy chế hoạt động Sàn GDTMĐT</a>
            <a>Bán hàng cùng Tiki</a>
            <h4 style={{ marginTop: "24px" }}>Chứng nhận bởi</h4>
            <div className={styles.footerBlockImg}>
              <a>
                <img src="https://frontend.tikicdn.com/_desktop-next/static/img/footer/bo-cong-thuong-2.png" />
              </a>
              <a>
                <img src="https://frontend.tikicdn.com/_desktop-next/static/img/footer/bo-cong-thuong.svg" />
              </a>
            </div>
          </div>
          <div className={styles.footerBlockPayment}>
            <h4>Phương thức thanh toán</h4>
            <p>
              {data.map((data, index) => {
                return <span key={index}> {parse(data.svg)}</span>;
              })}
            </p>
            <h4 style={{ margin: "24px 0px 12px" }}>Dịch vụ giao hàng</h4>
            <p>
              <svg
                width="68"
                height="33"
                viewBox="0 0 68 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0)">
                  <path
                    d="M3.27822 10.3092H1.54327C0.77827 10.3092 0.460938 9.70448 0.460938 9.11486C0.460938 8.50823 0.858548 7.91956 1.54327 7.91956H7.39883C8.0826 7.91956 8.48116 8.50823 8.48116 9.11486C8.48116 9.70448 8.16288 10.3092 7.39883 10.3092H5.66671V19.0023C5.66671 19.8669 5.15766 20.3507 4.47199 20.3507C3.78633 20.3507 3.27822 19.8669 3.27822 19.0023V10.3092Z"
                    fill="#1AA7FF"
                  ></path>
                  <path
                    d="M10.063 9.26605C10.063 8.40714 10.6117 7.92807 11.3493 7.92807C12.0869 7.92807 12.6357 8.40714 12.6357 9.26605V19.0136C12.6357 19.8707 12.0869 20.3507 11.3493 20.3507C10.6117 20.3507 10.063 19.8707 10.063 19.0136V9.26605Z"
                    fill="#1AA7FF"
                  ></path>
                  <path
                    d="M14.1055 9.19613C14.1055 8.49407 14.6192 7.92808 15.3918 7.92808C16.1294 7.92808 16.6772 8.40714 16.6772 9.19613V12.9039L20.897 8.40714C21.0196 8.26163 21.1716 8.14372 21.343 8.06116C21.5144 7.97859 21.7013 7.93324 21.8915 7.92808C22.0561 7.92507 22.2196 7.95471 22.3727 8.01528C22.5258 8.07585 22.6653 8.16615 22.7833 8.28096C22.9013 8.39578 22.9955 8.53284 23.0602 8.68424C23.125 8.83564 23.1592 8.99838 23.1608 9.16306C23.1608 9.60811 22.886 9.97001 22.3212 10.5351L19.0789 13.7269L23.0456 17.8637C23.4564 18.2747 23.7652 18.6527 23.7652 19.1658C23.7652 19.9727 23.1296 20.3497 22.427 20.3497C21.9302 20.3497 21.6044 20.0597 21.1236 19.5447L16.6847 14.7389V19.1157C16.6847 19.7856 16.17 20.3497 15.3994 20.3497C14.6608 20.3497 14.113 19.8707 14.113 19.1157L14.1055 9.19613Z"
                    fill="#1AA7FF"
                  ></path>
                  <path
                    d="M25.1299 9.26887C25.1299 8.4109 25.6795 7.93184 26.4162 7.93184C27.1529 7.93184 27.7026 8.4109 27.7026 9.26887V19.0108C27.7026 19.8669 27.1529 20.3469 26.4162 20.3469C25.6795 20.3469 25.1299 19.8669 25.1299 19.0108V9.26887Z"
                    fill="#1AA7FF"
                  ></path>
                  <path
                    d="M11.2284 6.26221C10.9207 6.26245 10.616 6.20202 10.3316 6.08435C10.0473 5.96669 9.78892 5.7941 9.5713 5.57646C9.35368 5.35883 9.18108 5.10041 9.06336 4.81598C8.94563 4.53155 8.8851 4.2267 8.88523 3.91885C8.88558 3.70158 8.91576 3.48537 8.97495 3.27632H13.479C13.5796 3.62508 13.5977 3.99249 13.5317 4.34944C13.4658 4.70639 13.3176 5.04307 13.0991 5.33281C12.8805 5.62254 12.5975 5.85737 12.2725 6.01869C11.9474 6.18001 11.5893 6.26338 11.2265 6.26221H11.2284ZM11.2265 0.666504C10.6213 0.666504 10.0298 0.846032 9.52656 1.18239C9.02336 1.51875 8.63116 1.99683 8.39952 2.55619C8.16789 3.11554 8.10724 3.73106 8.22523 4.3249C8.34323 4.91874 8.63457 5.46425 9.06242 5.89244C9.49028 6.32063 10.0354 6.61228 10.6289 6.73052C11.2225 6.84875 11.8377 6.78826 12.3969 6.55669C12.956 6.32512 13.434 5.93287 13.7703 5.42953C14.1067 4.9262 14.2863 4.33439 14.2865 3.72893C14.2867 3.32677 14.2078 2.92851 14.0541 2.55691C13.9004 2.18531 13.675 1.84766 13.3909 1.56325C13.1067 1.27884 12.7693 1.05325 12.3979 0.899381C12.0265 0.745513 11.6285 0.66638 11.2265 0.666504Z"
                    fill="#1AA7FF"
                  ></path>
                  <path
                    d="M26.3037 6.2622C25.9962 6.2622 25.6917 6.20159 25.4075 6.08381C25.1234 5.96603 24.8653 5.79341 24.6479 5.57579C24.4304 5.35818 24.258 5.09984 24.1404 4.81554C24.0228 4.53124 23.9623 4.22654 23.9624 3.91885C23.9625 3.70162 23.9923 3.48541 24.0512 3.27632H28.5543C28.616 3.48495 28.6478 3.70128 28.6488 3.91885C28.6488 4.22667 28.5882 4.53146 28.4704 4.81583C28.3526 5.1002 28.18 5.35857 27.9624 5.57618C27.7448 5.7938 27.4865 5.96639 27.2022 6.0841C26.918 6.20181 26.6133 6.26233 26.3056 6.2622H26.3037ZM26.3056 0.666504C25.7004 0.666504 25.1089 0.846032 24.6057 1.18239C24.1025 1.51875 23.7103 1.99683 23.4786 2.55619C23.247 3.11554 23.1863 3.73106 23.3043 4.3249C23.4223 4.91874 23.7137 5.46425 24.1415 5.89244C24.5694 6.32063 25.1145 6.61228 25.7081 6.73052C26.3016 6.84875 26.9168 6.78826 27.476 6.55669C28.0351 6.32512 28.5131 5.93287 28.8495 5.42953C29.1858 4.9262 29.3654 4.33439 29.3656 3.72893C29.3656 2.91688 29.0433 2.13809 28.4694 1.5638C27.8956 0.989513 27.1173 0.666754 26.3056 0.666504Z"
                    fill="#1AA7FF"
                  ></path>
                  <path
                    d="M30.4963 9.65535V19.9954C30.4991 20.054 30.4899 20.1125 30.4694 20.1675C30.4488 20.2224 30.4174 20.2726 30.3769 20.3151C30.3364 20.3575 30.2878 20.3913 30.2339 20.4144C30.1799 20.4374 30.1219 20.4493 30.0633 20.4493C30.0047 20.4493 29.9466 20.4374 29.8927 20.4144C29.8388 20.3913 29.7902 20.3575 29.7497 20.3151C29.7092 20.2726 29.6778 20.2224 29.6572 20.1675C29.6367 20.1125 29.6275 20.054 29.6303 19.9954V8.40997C29.6024 8.32209 29.6031 8.22764 29.6323 8.14019C29.6615 8.05274 29.7176 7.97682 29.7927 7.92334C29.8891 7.85896 30.0066 7.83423 30.1208 7.85429C30.2349 7.87436 30.337 7.93767 30.4057 8.03106L38.0557 18.6423V8.35611C38.0557 8.23883 38.1022 8.12635 38.1851 8.04342C38.268 7.96048 38.3804 7.9139 38.4977 7.9139C38.6149 7.9139 38.7273 7.96048 38.8102 8.04342C38.8931 8.12635 38.9397 8.23883 38.9397 8.35611V19.9954C38.9369 20.1127 38.8879 20.2241 38.8033 20.3054C38.7187 20.3867 38.6055 20.4311 38.4882 20.4291C38.4223 20.4307 38.357 20.4169 38.2975 20.3886C38.2379 20.3604 38.1858 20.3186 38.1454 20.2666C38.1274 20.2486 38.0915 20.2297 38.0736 20.1938L30.4963 9.65535Z"
                    fill="#1AA7FF"
                  ></path>
                  <path
                    d="M47.0722 7.87704C50.4722 7.87704 53.146 10.6881 53.1639 14.1531C53.146 17.618 50.4732 20.4291 47.0722 20.4291C43.6354 20.4291 40.9447 17.618 40.9258 14.1531C40.9447 10.6881 43.6354 7.87704 47.0722 7.87704ZM47.0722 19.5626C49.8744 19.5626 52.2355 17.1758 52.2544 14.1578C52.2365 11.0992 49.8725 8.76619 47.0722 8.76619C44.1813 8.76619 41.8173 11.0992 41.8173 14.1578C41.8173 17.1758 44.1813 19.5626 47.0722 19.5626Z"
                    fill="#1AA7FF"
                  ></path>
                  <path
                    d="M54.7927 8.11516L57.1698 18.8521L60.634 8.90604C60.702 8.74352 60.8229 8.63486 60.9476 8.63486C61.0251 8.64063 61.099 8.66958 61.1598 8.71794C61.2206 8.76631 61.2655 8.83184 61.2885 8.90604L64.9388 18.8521L67.111 8.11516C67.1932 7.89878 67.3708 7.79012 67.5615 7.89878C67.7259 7.98855 67.8071 8.25973 67.7259 8.47611L65.2524 20.1333C65.2338 20.2001 65.1992 20.2613 65.1517 20.3117C65.1041 20.3621 65.045 20.4001 64.9794 20.4225H64.9114C64.8805 20.4224 64.8499 20.4159 64.8216 20.4034C64.7933 20.3909 64.7679 20.3726 64.7471 20.3497C64.7249 20.3293 64.7067 20.3049 64.6933 20.2779C64.671 20.2438 64.6527 20.2074 64.6385 20.1693C64.6406 20.1502 64.6355 20.131 64.6243 20.1154L60.9608 10.1325L57.4834 20.1154C57.4836 20.1474 57.474 20.1787 57.456 20.2052C57.4431 20.2519 57.4198 20.2952 57.388 20.3318C57.3738 20.3318 57.3606 20.3497 57.3606 20.3497C57.3356 20.3739 57.306 20.3929 57.2736 20.4054C57.2411 20.4179 57.2065 20.4237 57.1717 20.4225C57.133 20.4213 57.0948 20.4123 57.0596 20.3961C57.0244 20.3798 56.9928 20.3567 56.9668 20.328L56.9394 20.2921L56.9262 20.2741C56.8808 20.2102 56.8525 20.1357 56.844 20.0578L54.192 8.47611C54.1108 8.25973 54.192 7.98855 54.3563 7.89878C54.5197 7.79012 54.7247 7.89878 54.7927 8.11516Z"
                    fill="#1AA7FF"
                  ></path>
                  <path
                    d="M63.5224 23.7079H4.47761C2.00469 23.7079 0 25.7134 0 28.1872C0 30.6611 2.00469 32.6665 4.47761 32.6665H63.5224C65.9953 32.6665 68 30.6611 68 28.1872C68 25.7134 65.9953 23.7079 63.5224 23.7079Z"
                    fill="#1AA7FF"
                  ></path>
                  <path
                    d="M4.06113 29.2828H5.04997C5.04731 29.3725 5.06505 29.4617 5.10187 29.5435C5.13868 29.6254 5.19359 29.6978 5.26247 29.7553C5.40158 29.8703 5.57793 29.9304 5.7583 29.9244C5.84465 29.9249 5.93038 29.9099 6.01141 29.88C6.09173 29.8497 6.16524 29.8038 6.22769 29.7449C6.29109 29.6861 6.3413 29.6145 6.375 29.5348C6.4087 29.4552 6.42513 29.3693 6.42319 29.2828C6.42849 29.1245 6.38098 28.9689 6.28814 28.8406C6.19476 28.7318 6.07999 28.6433 5.95097 28.5808C5.815 28.5183 5.67526 28.4643 5.53258 28.4192C5.37191 28.3698 5.21423 28.3111 5.06036 28.2434C4.9065 28.1702 4.76653 28.0707 4.64669 27.9496C4.52097 27.8194 4.42184 27.666 4.35486 27.4979C4.32009 27.4133 4.29321 27.3257 4.27458 27.2362C4.25584 27.148 4.24666 27.058 4.24719 26.9678C4.24242 26.773 4.2794 26.5795 4.35564 26.4002C4.43188 26.2209 4.54561 26.0601 4.68919 25.9284C4.9743 25.6543 5.35637 25.5045 5.75169 25.5117C5.94566 25.5105 6.13795 25.5477 6.31742 25.6214C6.49689 25.695 6.65996 25.8035 6.79719 25.9407C6.93985 26.0698 7.05358 26.2276 7.1309 26.4038C7.20822 26.5801 7.24738 26.7707 7.2458 26.9631H6.27114C6.27186 26.8913 6.25685 26.8203 6.22715 26.755C6.19745 26.6897 6.15379 26.6317 6.09925 26.5851C5.99031 26.4838 5.84658 26.4283 5.69786 26.4302C5.62964 26.4278 5.56173 26.4403 5.4988 26.4667C5.43586 26.4931 5.3794 26.5329 5.3333 26.5832C5.23956 26.6896 5.19021 26.828 5.19541 26.9697C5.193 27.0923 5.23606 27.2115 5.3163 27.3042C5.41075 27.4119 5.58389 27.5064 5.83575 27.5877C6.13041 27.6885 6.30482 27.7514 6.35897 27.7766C6.52889 27.8485 6.68786 27.9439 6.83119 28.0601C7.00842 28.1974 7.15021 28.3752 7.24469 28.5785C7.33917 28.7819 7.3836 29.0049 7.37425 29.229C7.37766 29.4433 7.33604 29.6561 7.2521 29.8533C7.16815 30.0506 7.04374 30.228 6.88691 30.3742C6.733 30.5273 6.54999 30.6479 6.34868 30.7291C6.14738 30.8102 5.93186 30.8502 5.71486 30.8466C5.28648 30.8503 4.87327 30.6882 4.56169 30.394C4.40242 30.2564 4.2751 30.0857 4.18864 29.8938C4.10218 29.7018 4.05867 29.4933 4.06113 29.2828Z"
                    fill="white"
                  ></path>
                  <path
                    d="M8.0249 30.721V25.6185H9.3169L10.6863 29.5228L12.0728 25.6185H13.3582V30.721H12.4137V26.8903L11.0915 30.721H10.2878L8.96557 26.8903V30.721H8.0249Z"
                    fill="white"
                  ></path>
                  <path
                    d="M13.8198 30.721L15.9486 25.6185H16.6872L18.8367 30.721H17.7978L17.2444 29.3981H15.4329L14.8663 30.721H13.8198ZM15.7795 28.4797H16.8723L16.3264 26.9338L15.7795 28.4797Z"
                    fill="white"
                  ></path>
                  <path
                    d="M19.3564 30.721V25.6185H20.8373C20.9809 25.6185 21.1112 25.6185 21.2283 25.6317C21.3316 25.6386 21.4342 25.6531 21.5353 25.6752C21.7663 25.7246 21.9821 25.829 22.1643 25.9795C22.3466 26.1327 22.4933 26.3239 22.594 26.5398C22.7004 26.7559 22.756 26.9934 22.7564 27.2343C22.7565 27.3319 22.7473 27.4294 22.7291 27.5253C22.7068 27.6303 22.6752 27.7331 22.6346 27.8324C22.5699 28.0197 22.4685 28.1923 22.3362 28.3398C22.2154 28.4704 22.0733 28.5793 21.9159 28.662C21.7605 28.7401 21.5962 28.7991 21.4267 28.8378L22.8065 30.7276H21.6429L20.3037 28.7631V30.721H19.3564ZM20.3009 28.0441H20.8175C20.951 28.0471 21.0844 28.0347 21.2151 28.0072C21.3478 27.9811 21.4713 27.9205 21.5731 27.8315C21.6486 27.7607 21.7083 27.6748 21.7483 27.5794C21.7883 27.484 21.8078 27.3812 21.8054 27.2777C21.8061 27.1674 21.7832 27.0582 21.7383 26.9574C21.6911 26.856 21.619 26.7682 21.5287 26.7023C21.4295 26.6298 21.3158 26.5798 21.1953 26.5558C21.1547 26.5492 21.1008 26.5436 21.0432 26.5388C20.9856 26.5341 20.9091 26.5322 20.8241 26.5322H20.3037L20.3009 28.0441Z"
                    fill="white"
                  ></path>
                  <path
                    d="M23.8829 30.721V26.536H22.9385V25.6185H25.7794V26.536H24.8274V30.7247L23.8829 30.721Z"
                    fill="white"
                  ></path>
                  <path
                    d="M30.4897 30.7587V25.6279H31.4417V29.8365H33.0114V30.7587H30.4897Z"
                    fill="white"
                  ></path>
                  <path
                    d="M35.9532 25.5297C36.5726 25.5286 37.1731 25.7425 37.6525 26.1349C38.1319 26.5272 38.4605 27.0738 38.5822 27.6814C38.7039 28.289 38.6112 28.92 38.3199 29.4669C38.0286 30.0138 37.5568 30.4426 36.9848 30.6804C36.4128 30.9182 35.7761 30.9501 35.1833 30.7708C34.5904 30.5915 34.078 30.212 33.7335 29.697C33.389 29.182 33.2337 28.5634 33.294 27.9467C33.3543 27.33 33.6265 26.7533 34.0643 26.3149C34.3087 26.0616 34.6024 25.8613 34.9273 25.7262C35.2522 25.5912 35.6014 25.5243 35.9532 25.5297ZM35.9532 26.4519C35.7259 26.4483 35.5004 26.4918 35.2907 26.5796C35.081 26.6674 34.8918 26.7976 34.7349 26.9621C34.5725 27.1224 34.4443 27.3138 34.3577 27.5249C34.2712 27.736 34.2283 27.9624 34.2315 28.1905C34.2294 28.4205 34.2735 28.6485 34.3611 28.8611C34.4487 29.0737 34.5781 29.2666 34.7415 29.4283C34.8968 29.5942 35.0844 29.7264 35.2929 29.8168C35.5013 29.9072 35.726 29.9538 35.9532 29.9538C36.1804 29.9538 36.4051 29.9072 36.6135 29.8168C36.8219 29.7264 37.0096 29.5942 37.1649 29.4283C37.3283 29.2666 37.4577 29.0737 37.5453 28.8611C37.6329 28.6485 37.6769 28.4205 37.6749 28.1905C37.6793 27.9614 37.6369 27.7338 37.5504 27.5216C37.4638 27.3094 37.3349 27.1171 37.1715 26.9565C37.014 26.7931 36.8245 26.664 36.6149 26.5772C36.4053 26.4904 36.18 26.4477 35.9532 26.4519Z"
                    fill="white"
                  ></path>
                  <path
                    d="M44.322 27.1341H43.1887C43.0363 26.9207 42.8327 26.7491 42.5965 26.6352C42.3625 26.5158 42.1037 26.453 41.841 26.4519C41.4046 26.4501 40.9827 26.608 40.6548 26.896C40.4713 27.0586 40.324 27.2579 40.2222 27.4809C40.1185 27.7012 40.0637 27.9413 40.0616 28.1849C40.0605 28.4035 40.1036 28.6201 40.1882 28.8217C40.2733 29.0287 40.397 29.2176 40.5528 29.3783C40.7235 29.5615 40.9307 29.707 41.161 29.8054C41.3885 29.9038 41.6337 29.9546 41.8816 29.9546C42.1883 29.952 42.4882 29.864 42.7476 29.7005C43.0166 29.5414 43.2356 29.3099 43.3795 29.0324H41.2346V28.1423H44.5799V28.2548C44.5849 28.6077 44.5149 28.9577 44.3746 29.2815C44.2342 29.6054 44.0267 29.8957 43.7658 30.1332C43.2437 30.6191 42.5567 30.8884 41.8436 30.8865C41.1306 30.8845 40.445 30.6116 39.9256 30.1228C39.6627 29.882 39.4538 29.5882 39.3128 29.2606C39.1718 28.933 39.1019 28.5792 39.1078 28.2226C39.102 27.8661 39.1706 27.5122 39.3094 27.1837C39.4481 26.8552 39.6538 26.5593 39.9134 26.3149C40.1648 26.0616 40.4646 25.8615 40.795 25.7266C41.1253 25.5917 41.4795 25.5247 41.8363 25.5297C42.3634 25.5278 42.88 25.6774 43.3247 25.9606C43.7765 26.232 44.1269 26.6443 44.322 27.1341Z"
                    fill="white"
                  ></path>
                  <path
                    d="M45.2031 30.7587V25.6279H46.1561V30.7587H45.2031Z"
                    fill="white"
                  ></path>
                  <path
                    d="M46.7726 29.314H47.7652C47.7632 29.4037 47.7813 29.4927 47.8183 29.5745C47.8552 29.6562 47.91 29.7287 47.9786 29.7865C48.1189 29.9014 48.2961 29.9615 48.4773 29.9556C48.564 29.9566 48.6501 29.9415 48.7314 29.9112C48.8119 29.8807 48.8857 29.8348 48.9486 29.7761C49.0124 29.7169 49.0629 29.6449 49.0967 29.5647C49.1306 29.4846 49.1471 29.3982 49.145 29.3112C49.1503 29.1521 49.1024 28.9959 49.009 28.8671C48.9156 28.7577 48.8004 28.6688 48.6709 28.6063C48.5344 28.543 48.394 28.4885 48.2506 28.4428C48.09 28.3933 47.9323 28.3347 47.7784 28.2671C47.6239 28.1935 47.4834 28.0938 47.3629 27.9722C47.2367 27.8412 47.1373 27.6868 47.0701 27.5177C47.0351 27.4328 47.008 27.3449 46.9889 27.2551C46.9706 27.1661 46.9615 27.0756 46.9615 26.9848C46.9574 26.79 46.9949 26.5965 47.0715 26.4173C47.148 26.2381 47.2618 26.0772 47.4054 25.9454C47.6922 25.6703 48.0762 25.5199 48.4735 25.5268C48.6684 25.5256 48.8615 25.5631 49.0418 25.637C49.222 25.711 49.3859 25.82 49.5237 25.9577C49.6664 26.0882 49.7798 26.2475 49.8565 26.425C49.9331 26.6025 49.9713 26.7943 49.9686 26.9877H48.993C48.9933 26.9158 48.9779 26.8447 48.9479 26.7795C48.9178 26.7142 48.8739 26.6562 48.8192 26.6097C48.7097 26.5079 48.5653 26.4521 48.4159 26.4538C48.3474 26.4515 48.2792 26.4642 48.2161 26.491C48.153 26.5177 48.0964 26.5579 48.0504 26.6088C47.9562 26.7153 47.9065 26.854 47.9116 26.9962C47.9095 27.1195 47.9529 27.2392 48.0334 27.3325C48.1279 27.4412 48.3026 27.5366 48.5557 27.6207C48.851 27.7215 49.026 27.7845 49.0808 27.8097C49.2506 27.8818 49.4096 27.9772 49.553 28.0932C49.7295 28.2307 49.8708 28.4082 49.9652 28.6111C50.0597 28.814 50.1045 29.0365 50.0961 29.2601C50.0996 29.4753 50.0579 29.6888 49.9738 29.8869C49.8897 30.085 49.765 30.2632 49.6078 30.4101C49.4528 30.5633 49.2688 30.6841 49.0666 30.7652C48.8644 30.8463 48.6479 30.8862 48.4301 30.8825C47.9993 30.8867 47.5837 30.7238 47.2703 30.428C47.1116 30.2896 46.9849 30.1182 46.8989 29.9258C46.813 29.7335 46.7699 29.5247 46.7726 29.314Z"
                    fill="white"
                  ></path>
                  <path
                    d="M51.277 30.7587V26.5502H50.3325V25.6279H53.1866V26.5502H52.2261V30.7587H51.277Z"
                    fill="white"
                  ></path>
                  <path
                    d="M53.6699 30.7587V25.6279H54.6229V30.7587H53.6699Z"
                    fill="white"
                  ></path>
                  <path
                    d="M59.2864 29.3612H60.3877C60.1939 29.8256 59.8567 30.2157 59.4253 30.4743C59.0018 30.7433 58.5102 30.8856 58.0086 30.8844C57.6574 30.889 57.309 30.8207 56.9855 30.6837C56.662 30.5468 56.3704 30.3442 56.1291 30.0888C55.878 29.841 55.6797 29.5449 55.5461 29.2183C55.4125 28.8917 55.3465 28.5415 55.3519 28.1886C55.3477 27.8397 55.4146 27.4936 55.5485 27.1715C55.6825 26.8493 55.8807 26.5578 56.131 26.3149C56.3697 26.0637 56.6574 25.8644 56.9764 25.7293C57.2953 25.5942 57.6387 25.5263 57.985 25.5297C58.5029 25.5279 59.0106 25.6745 59.4479 25.9521C59.8855 26.2181 60.2259 26.618 60.4188 27.0925H59.3337C59.1701 26.8935 58.9647 26.7329 58.7321 26.6222C58.4995 26.5115 58.2454 26.4533 57.9878 26.4519C57.7637 26.4497 57.5416 26.4952 57.3363 26.5852C57.131 26.6753 56.9471 26.808 56.7969 26.9744C56.6351 27.1391 56.5076 27.3341 56.4217 27.5484C56.3357 27.7626 56.2931 27.9918 56.2963 28.2226C56.2949 28.4487 56.3389 28.6728 56.4257 28.8815C56.5125 29.0903 56.6403 29.2794 56.8016 29.4378C56.9528 29.6027 57.1367 29.7342 57.3416 29.8239C57.5466 29.9135 57.7679 29.9594 57.9916 29.9584C58.2304 29.9589 58.4664 29.907 58.6829 29.8063C58.9113 29.699 59.1164 29.5477 59.2864 29.3612Z"
                    fill="white"
                  ></path>
                  <path
                    d="M60.6525 29.314H61.646C61.6438 29.4037 61.6619 29.4928 61.6988 29.5746C61.7358 29.6564 61.7907 29.7288 61.8595 29.7865C61.9994 29.9014 62.1763 29.9615 62.3572 29.9556C62.4442 29.9565 62.5306 29.9415 62.6122 29.9112C62.6924 29.8808 62.7659 29.8349 62.8285 29.7761C62.8924 29.717 62.943 29.645 62.9771 29.5648C63.0111 29.4847 63.0277 29.3982 63.0259 29.3112C63.0311 29.1521 62.9832 28.9959 62.8899 28.8671C62.7961 28.7576 62.6807 28.6687 62.5508 28.6063C62.4143 28.5429 62.274 28.4883 62.1305 28.4428C61.9698 28.3934 61.8122 28.3347 61.6583 28.2671C61.5037 28.1937 61.3631 28.094 61.2427 27.9723C61.1166 27.8412 61.0171 27.6868 60.95 27.5178C60.9147 27.4328 60.8872 27.3449 60.8678 27.2551C60.8499 27.1661 60.841 27.0756 60.8414 26.9848C60.8371 26.79 60.8745 26.5964 60.9511 26.4172C61.0276 26.2379 61.1416 26.0771 61.2852 25.9454C61.5717 25.6702 61.9554 25.5197 62.3525 25.5268C62.5475 25.5255 62.7408 25.5629 62.9212 25.6369C63.1017 25.7108 63.2656 25.8199 63.4036 25.9577C63.5468 26.088 63.6608 26.2471 63.7381 26.4246C63.8155 26.6022 63.8543 26.794 63.8522 26.9877H62.8729C62.8733 26.9159 62.8581 26.8448 62.8283 26.7795C62.7984 26.7142 62.7546 26.6563 62.7 26.6097C62.5906 26.5079 62.4462 26.4521 62.2967 26.4538C62.2281 26.4514 62.1597 26.464 62.0964 26.4908C62.0331 26.5176 61.9764 26.5578 61.9303 26.6088C61.8361 26.7153 61.7864 26.854 61.7915 26.9962C61.7894 27.1195 61.8327 27.2392 61.9133 27.3326C62.0077 27.4412 62.1825 27.5366 62.4356 27.6207C62.7312 27.7218 62.9078 27.7852 62.9607 27.8097C63.1305 27.8818 63.2894 27.9772 63.4329 28.0932C63.6093 28.2308 63.7504 28.4083 63.8447 28.6112C63.939 28.8141 63.9836 29.0366 63.975 29.2602C63.9786 29.4753 63.9371 29.6887 63.8532 29.8868C63.7692 30.0849 63.6447 30.2631 63.4877 30.4101C63.3328 30.5635 63.1488 30.6843 62.9466 30.7654C62.7443 30.8466 62.5278 30.8864 62.31 30.8825C61.8795 30.8865 61.4642 30.7236 61.1511 30.428C60.9921 30.2897 60.8652 30.1184 60.779 29.926C60.6929 29.7336 60.6497 29.5248 60.6525 29.314Z"
                    fill="white"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0">
                    <rect
                      width="68"
                      height="32"
                      fill="white"
                      transform="translate(0 0.666504)"
                    ></rect>
                  </clipPath>
                </defs>
              </svg>
            </p>
          </div>
          <div className={styles.footerBlockConnecting}>
            {" "}
            <h4>Phương thức thanh toán</h4>
            <p>
              {data2.map((data) => {
                return <span>{parse(data.svg)}</span>;
              })}
            </p>
            <h4 style={{ marginTop: "24px" }}>Tải ứng dụng trên điện thoại</h4>
            <div className={styles.appleGoggle}>
              <img src="https://frontend.tikicdn.com/_desktop-next/static/img/footer/qrcode.png" />
              <div className={styles.flex}>
                <img src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/appstore.png" />
                <img src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/playstore.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footerSeparate}></div>
      <div className={styles.footerBottom}>
        <div className={styles.footerBottomContainer}>
          <div className={styles.address}>
            <div className={styles.addressInfo}>
              <p>
                Trụ sở chính: Tòa nhà Viettel, Số 285, đường Cách Mạng Tháng 8,
                phường 12, quận 10, Thành phố Hồ Chí Minh
              </p>
              <p>
                Tiki nhận đặt hàng trực tuyến và giao hàng tận nơi, chưa hỗ trợ
                mua và nhận hàng trực tiếp tại văn phòng hoặc trung tâm xử lý
                đơn hàng
              </p>
              <p>
                Giấy chứng nhận Đăng ký Kinh doanh số 0309532909 do Sở Kế hoạch
                và Đầu tư Thành phố Hồ Chí Minh cấp lần đầu ngày 06/01/2010 và
                sửa đổi lần thứ 23 ngày 14/02/2022
              </p>
              <p>© 2022 - Bản quyền của Công ty TNHH Ti Ki</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
