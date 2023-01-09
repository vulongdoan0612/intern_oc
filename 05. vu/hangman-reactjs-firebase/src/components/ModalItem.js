import React from "react";

export default function ModalItem({ item, index }) {
  // localStorage.setItem("token", item.token);
  return (
    <div>
      {item.map((i, index) => {
        return (
          <div
            key={index}
            style={{
              paddingTop: "15px",
              borderBottom: "1px solid black",
              paddingBottom: "15px",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-around" }}>
              <p>Top :{(index += 1)}</p>
              <p>
                Scrore :<span>{i.highScoreLocal}</span>
              </p>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-around",
              }}
            >
              <p>
                <span>{i.user}</span>
              </p>
              <img
                src={i.userImg}
                alt=""
                style={{
                  borderRadius: "50%",
                  width: "50px",
                }}
              ></img>
            </div>
          </div>
        );
      })}
    </div>
  );
}
