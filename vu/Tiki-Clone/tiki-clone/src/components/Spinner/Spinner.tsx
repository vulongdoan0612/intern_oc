import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

export default function Spinner() {
  return (
    <div style={{ margin: "auto", width: "fit-content" }}>
      <Box sx={{ display: "flex" }}>
        <CircularProgress />
      </Box>
      Đang tải
    </div>
  );
}
