import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { child, get, getDatabase, ref, set } from "firebase/database";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { database, auth } from "../firebase-config";
import { toast } from "react-toastify";
export const Register = () => {
  const db = getDatabase();
  let navigate = useNavigate();
  const [emailRe, setEmail] = useState("");
  const [passwordRe, setPassword] = useState("");
  const register = async () => {
    createUserWithEmailAndPassword(auth, emailRe, passwordRe)
      .then((userCredential) => {
        let user = userCredential.user;
        toast.success("Register success ", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        set(ref(database, "users/" + user.uid), {
          email: user.email,
          token: 2,
          highscore: 0,
          credit: 100,
        });
        const dataUser = {
          id: user.uid,
          email: emailRe,
          credit: 100,
          token: 2,
          highscore: 0,
        };
        localStorage.setItem("users", JSON.stringify(dataUser));
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        toast.error("Email already exists ", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });

    // get(child(ref(database), `users/${user.uid}`))
    //   .then((snapshot) => {
    //     if (snapshot.exists()) {
    //       console.log(snapshot.val());
    //     } else {
    //       console.log("No data available");
    //       set(ref(database, "users/" + user.uid), {
    //         email: user.email,
    //         token: 2,
    //         highscore: 0,
    //         credit: 100,
    //       });
    //       toast.success("Register success", {
    //         position: "top-right",
    //         autoClose: 5000,
    //         hideProgressBar: false,
    //         closeOnClick: true,
    //         pauseOnHover: true,
    //         draggable: true,
    //         progress: undefined,
    //       });
    //       navigate("/");
    //     }
    //   })
    //   .catch((error) => {});

    // const dataUser = {
    //   id: user.uid,
    //   email: emailRe,
    //   credit: 100,
    //   token: 2,
    //   highscore: 0,
    // };
    // localStorage.setItem("users", JSON.stringify(dataUser));
  };
  return (
    <div className="container register">
      <form>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <div className="mb-3 ">
          Have a account ? <Link to="/login">Login now</Link>
        </div>
        <div class="d-grid gap-2">
          <button onClick={register} type="button" className="btn btn-primary ">
            Register
          </button>
        </div>
      </form>
    </div>
  );
};
