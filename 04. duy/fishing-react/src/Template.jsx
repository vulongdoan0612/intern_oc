import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { Footer } from "./component/Footer";
import { Header } from "./component/Header";

export const Template = () => {
  return (
    <div id="wrapper">
      <Header></Header>
      <Outlet />
    </div>
  );
};
