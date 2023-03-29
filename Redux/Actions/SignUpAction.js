export const authEmailID = (data) => {
    return {
        type: "AUTH EMAIL ID",
        payload: data
    }
}

export const authPassword = (data) => {
    return {
        type: "AUTH PASSWORD",
        payload: data
    }
}

export const userName = (data) => {
    return {
        type: "USER NAME",
        payload: data
    }
}