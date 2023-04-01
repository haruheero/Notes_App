import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const initialState = {
  authenticate: "",
};

const auth = getAuth();
const LoginReducer = (state = initialState, action) => {

  switch (action.type) {
    case "AUTHENTICATE_LOGIN":
        authenticate = action.payload
      signInWithEmailAndPassword(auth, authenticate.emailID, authenticate.password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log('logged in')
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(error.code, error.message);
        });
        return null;
    default: return initialState
  }
};

export default LoginReducer
