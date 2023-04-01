import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from "../../firebaseConfig";

const initialState = {
    authenticate : ""
};

const auth = getAuth(app);

//set displayName
const SignupReducer = (state = initialState, action) => {
    switch(action.type){
        case "AUTHENTICATE_SIGNUP":
            authenticate = action.payload
            createUserWithEmailAndPassword(auth, authenticate.emailID, authenticate.password)
            .then((userCredential) => {
                console.log(userCredential.user);
            })
            .catch((error) => {
                console.log(error.code, error.message);
            });
            return null
        default: return initialState
    }
};

export default SignupReducer;
