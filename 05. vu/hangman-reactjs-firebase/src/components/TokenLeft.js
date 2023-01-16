import React, { useEffect } from "react";
import classNames from "classnames/bind";
import styles from "../style/TokenLeft.module.scss";
<<<<<<< HEAD
import "../style/cssFolder/TokenLeft.css";
import { auth } from "../firebase";
import { useStateContext } from "../ContextProvider";
import { changeTokenAfterGame, getToken } from "../services/user";

=======
import { collection, getDocs, orderBy, query, where } from "firebase/firestore";
import { auth, db } from "../firebase";
import "../style/TokenLeft.css";
>>>>>>> 63539c33123e4fa6d12e889f9478a4887432fd16
const cx = classNames.bind(styles);

export default function TokenLeft() {
<<<<<<< HEAD
  const { user, token, setUser, setToken } = useStateContext();

  const tokenLeft = parseInt(localStorage.getItem("token"));

  const handleGetToken = async () => {
    const data = await getToken();
    setUser(data[0]);
    // console.log(data);
  };
  useEffect(() => {
    setToken(user?.tokenLocal);
  }, [user]);
  useEffect(() => {
    if (user) {
      handleGetToken();
    }
    localStorage.setItem("token", user?.tokenLocal);
  }, [user?.tokenLocal, auth?.currentUser]);

  useEffect(() => {
    const getDocs = async () => {
      try {
        if (user) {
          changeTokenAfterGame(user, tokenLeft);
        }
      } catch (e) {
        console.log(e);
      }
    };
    getDocs();
  }, [tokenLeft]);
=======
  const tokenLeft = localStorage.getItem("token");
  const [token, setToken] = useState(tokenLeft);
  const [tokenUser, setTokenUser] = useState([]);

  const GetToken = async () => {
    const q = query(
      collection(db, "leaderBoard"),
      where(
        "email",
        "==",
        `${auth.currentUser ? auth.currentUser.email : null}`
      ),
      orderBy("timestamp", "desc")
    );
    const queryData = await getDocs(q);
    const data = [];
    queryData.forEach((doc) => {
      data.push(doc.data());
    });
    setTokenUser(data);
  };
  const changeToken = () => {
    const tokenChange = localStorage.getItem("token");
    if (tokenLeft) {
      setToken(tokenChange);
    }
  };
  const tokenUserSlice = () => {
    tokenUser.slice(0, 1).forEach((token) => {
      localStorage.setItem("token", token.tokenLocal);
      console.log("token of this user is :", token.tokenLocal);
    });
  };
  useEffect(() => {
    tokenUserSlice();
  }, []);
  useEffect(() => {
    GetToken();
  }, [tokenLeft]);
  useEffect(() => {
    changeToken();
  });
>>>>>>> 63539c33123e4fa6d12e889f9478a4887432fd16

  return (
    <div>
      <div className={cx("wrapper")}>
<<<<<<< HEAD
        <h4
          style={{
            textShadow: "rgb(0 0 0 / 80%) -1px 3px 13px",
            pointerEvents: "none",
            fontWeight: "bold",
          }}
        >
          Token Left
        </h4>
        <h4
          style={{
            textShadow: "rgb(0 0 0 / 80%) -1px 3px 13px",
            pointerEvents: "none",
            fontWeight: "bold",
          }}
        >
          {token}
        </h4>
=======
        <h4>Token Left :</h4> <h4>{auth.currentUser ? token : 0}</h4>
>>>>>>> 63539c33123e4fa6d12e889f9478a4887432fd16
      </div>
    </div>
  );
}
