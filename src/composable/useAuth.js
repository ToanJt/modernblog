import { ref } from "vue";
import { useRouter } from "vue-router";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { db } from "@/firebase.js";

export default function userAuth() {
  const auth = getAuth();
  const errorMessage = ref("");
  const userStatus = ref(null);
  const router = useRouter();

  async function signUp(email, password) {
    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const userObject = {
        createAt: new Date(),
        email: user.email,
      };
      const newDoc = doc(db, "users", user.uid);
      await setDoc(newDoc, userObject);
      errorMessage.value = "";
      router.push({ path: "/" });
    } catch (error) {
      switch (error) {
        case "auth/email-already-in-use":
          errorMessage.value =
            "a user with that email already exists, please log in";
          break;
        case "auth/weak-password":
          errorMessage.value = "password should be at least 6 characters long";
          break;
        default:
          errorMessage.value = "sorry, there was an unexpected error.";
      }
    }
  }

  async function signIn(email, password) {
    if (!email) return (errorMessage.value = "Please enter a valid email");
    if (!password)
      return (errorMessage.value = "Please enter a valid password");
    try {
      await signInWithEmailAndPassword(auth, email, password);
      errorMessage.value = "";
      router.push({ path: "/" });
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          errorMessage.value = "incorrect password";
          break;
        case "auth/user-not-found":
          errorMessage.value = "no user found with that email";
          break;
        default:
          errorMessage.value = "sorry, there was an unexpected error.";
      }
    }
  }

    function logOut() {
        try {
            signOut(auth);
            router.push({ path: "/signin" });
        } catch(error) {
            errorMessage.value = error.message;
        }
    }

    onAuthStateChanged(auth, function(user) {
        if(user) {
            userStatus.value = user;
        } else {
            userStatus.value = null;
        }
    })
    return { signUp, signIn, logOut, userStatus, auth };
}
