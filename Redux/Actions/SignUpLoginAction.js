export const authenticationSignup = (data) => {
    return {
        type: "AUTHENTICATE_SIGNUP",
        payload: data
    }
}

export const authenticationLogin = (data) => {
    return {
        type: "AUTHENTICATE_LOGIN",
        payload: data
    }
}

export const passwordReset = (data) => {
    return {
        type: "PASSWORD_RESET",
        payload: data
    }
}
