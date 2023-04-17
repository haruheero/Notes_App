import { getAuth, sendPasswordResetEmail } from "firebase/auth";

const initialState = {
    authenticate: ''
}

const auth = getAuth();

const PasswordReset = (state = initialState, action) => {
  switch (action.type) {
    case "PASSWORD_RESET":
        authenticate = action.payload
        sendPasswordResetEmail(auth, authenticate.value)
        .then(() => {
            console.log('sent')
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage)
        });
    default: return initialState
  }
};

export default PasswordReset
