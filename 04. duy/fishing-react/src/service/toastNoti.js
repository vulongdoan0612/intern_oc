import { toast } from "react-toastify";

export const toastNoti = (title, status) => {
  return toast(title, {
    position: "bottom-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};
