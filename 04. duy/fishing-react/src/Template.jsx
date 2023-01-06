import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { Footer } from "./component/Footer";
import { Header } from "./component/Header";
export const Template = () => {
  const [email, setEmail] = useState("");

  let users = JSON.parse(localStorage.getItem("users"));
  useEffect(() => {
    if (users && users.email) {
      setEmail(users.email);
    }
  }, [email]);
  return (
    <div>
      <Header email={email}></Header>
      <Outlet />
      <Footer />
    </div>
  );
};
