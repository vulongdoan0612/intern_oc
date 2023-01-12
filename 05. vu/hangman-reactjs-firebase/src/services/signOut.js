import { auth } from "../firebase";
import { signOut } from "firebase/auth";
const signOutD = () => {
  signOut(auth)
    .then(() => {

      //Sign-out successful.
    })
    .catch((error) => {
      console.log(error);
    });
};
export default signOutD;
