import { createUserWithEmailAndPassword } from "@firebase/auth";
import { auth } from "../../firebase";
import { useDispatch } from "react-redux";
import { setUser } from "../../features/user/userSlice";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { handleAuthWithGoogle } from "../../utils/googleAuth";

const SignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSignUp = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const { email, uid: userId } = userCredential.user;
        dispatch(
          setUser({
            email,
            userId,
          })
        );
      })
      .then(() => navigate("/home"))
      .catch((error) => {
        // const errorCode = error.code;
        // const errorMessage = error.message;
        console.error(error);
        // ..
      });
  };

  return (
    <div>
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={() => handleSignUp()}>Sign up</button>
      <button onClick={() => handleAuthWithGoogle(navigate, dispatch)}>
        Sign Up With Google
      </button>
    </div>
  );
};

export default SignUp;
