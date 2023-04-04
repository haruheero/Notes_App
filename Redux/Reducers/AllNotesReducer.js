import { getStorage, ref, listAll } from "firebase/storage";

initialState = [];

const storage = getStorage();

const AllNotesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LIST_ALL_NOTES":

        const listRef = ref(storage, "");

        listAll(listRef)
        .then((res) => {
            res.items.forEach((itemRef) => {
              console.log(itemRef._location.path_)
            });
        })
        .catch((error) => {
            console.log(error)
        });
        return null
    default: return initialState
  }
};

export default AllNotesReducer;
