import { ref, uploadBytesResumable, getStorage } from "firebase/storage";

const storage = getStorage();

const initialState = {
}

const UploadNotesReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'UPLOAD_NOTE': 
            state = action.payload;
            if (!state.blobFile) return;
            const sotrageRef = ref(storage, `${state.fileName}`); 
            const uploadTask = uploadBytesResumable(sotrageRef, state.blobFile); 
            return null
        default: return initialState
    }
}

export default UploadNotesReducer