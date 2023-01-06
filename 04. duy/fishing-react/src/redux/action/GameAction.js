import { signInWithEmailAndPassword } from "firebase/auth";
import { ref, set } from "firebase/database";
import { auth, database } from "../../firebase-config";
import { useNavigate as navigatetest } from "react-router-dom";
import { toast } from "react-toastify";

export const loginFirebase = (emailLogin, passwordLogin) => {
  const notify = () => toast("Login success");
  const navigate = navigatetest();
  signInWithEmailAndPassword(auth, emailLogin, passwordLogin)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      set(ref(database, "users/" + user.uid), {
        id: user.uid,
        email: user.email,
        credit: 100,
        token: 2,
        highscore: 0,
      });
      const dataUser = {
        id: user.uid,
        email: emailLogin,
        credit: 100,
        token: 100,
        highscore: 0,
      };
      notify();
      localStorage.setItem("users", JSON.stringify(dataUser));
      navigate("/");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
};
