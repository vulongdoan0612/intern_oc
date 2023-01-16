import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";
import styles from "../style/RankBoard.module.scss";
import { useStateContext } from "../ContextProvider";
import { getAllUsers } from "../services/user";

const cx = classNames.bind(styles);

export default function RankBoard() {
  const { user } = useStateContext();
  const [allUser, setAllUser] = useState([]);
  const allUsers = async () => {
    const data = await getAllUsers();
    const result = data.sort((a, b) => b.highScoreLocal - a.highScoreLocal);
    setAllUser(result);
  };

  useEffect(() => {
    allUsers();
  }, [user?.highScoreLocal]);

  return (
    <div>
      <div className={cx("leaderBoard")}>
        {allUser.map((item, index) => {
          return (
            <div
              key={index}
              style={{
                paddingTop: "15px",
                borderBottom: "1px solid black",
                paddingBottom: "15px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  pointerEvents: "none",
                }}
              >
                <h5
                  style={{
                    color: "#fbecc1",
                    textShadow: "rgb(0 0 0 / 80%) -1px 3px 13px",
                  }}
                >
                  Top :{(index += 1)}
                </h5>
                <h5
                  style={{
                    color: "#fbecc1",
                    textShadow: "rgb(0 0 0 / 80%) -1px 3px 13px",
                  }}
                >
                  Scrore :<span>{item.highScoreLocal}</span>
                </h5>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <p>
                  <span
                    style={{
                      fontWeight: "bold",
                      textShadow: "rgb(0 0 0 / 80%) -1px 3px 13px",
                    }}
                  >
                    {item.user}
                  </span>
                </p>
                <img
                  src={item.userImg}
                  alt=""
                  style={{
                    borderRadius: "50%",
                    width: "50px",
                    border: "1px solid black",
                    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                  }}
                ></img>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
