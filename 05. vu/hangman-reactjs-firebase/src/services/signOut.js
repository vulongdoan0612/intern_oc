import { auth } from "../firebase";
import { signOut } from "firebase/auth";
const signOutD = () => {
  signOut(auth)
    .then(() => {
<<<<<<< HEAD
=======
      window.location.reload()
>>>>>>> 63539c33123e4fa6d12e889f9478a4887432fd16
      //Sign-out successful.
    })
    .catch((error) => {
      console.log(error);
    });
};
export default signOutD;
