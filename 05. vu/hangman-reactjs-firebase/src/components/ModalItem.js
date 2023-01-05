import React from "react";

export default function ModalItem({ item, index }) {
  
  // localStorage.setItem("token", item.token);
  return (
    <div>
      {item.map((i, index) => {
        return (
          <div key={index}>
            <h1>
              Top :{(index += 1)}
              Name :<span>{i.user}</span>
            </h1>
            <h1>
              Scrore :<span>{i.highScoreLocal}</span>
            </h1>
            <h1>
              Image :<img src={i.userImg} alt=""></img>
            </h1>
          </div>
        );
      })}
    </div>
  );
}
