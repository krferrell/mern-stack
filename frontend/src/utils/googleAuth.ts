import { auth } from "../firebase";
import { GoogleAuthProvider, signInWithPopup } from "@firebase/auth";
import { setUser } from "../features/user/userSlice";

const provider = new GoogleAuthProvider();

export const handleAuthWithGoogle = (navigate: any, dispatch: any) => {
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential?.accessToken;
      // The signed-in user info.
      console.log("USER: ", result.user);
      const { email, uid: userId } = result.user;
      dispatch(
        setUser({
          email,
          userId,
        })
      );
    })
    .catch((err) => console.log(err))
    .then(() => {
      console.log("navigation");
      navigate("/home");
    })
    .catch((error) => {
      console.log("ERRORS", error);
    });
};
