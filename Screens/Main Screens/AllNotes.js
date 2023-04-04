import React from "react";
import { Text, VStack } from "native-base";
import ListItem from "../../Components/ListItem";
import SignUpFormStyleSheet from "../../StyleSheets/SignUpFormStyleSheet";
import data from "../../Data/dataUpload";
import Searchbar from "../../Components/Searchbar";
import HeadingBox from "../../Components/HeadingBox";
import { useDispatch } from "react-redux";
import { listAllNotes } from "../../Redux/Actions/AllNotesAction";
//Search file function


function AllNotes() {

  const dispatch = useDispatch()
  dispatch(listAllNotes())

  return (
    <>
      <VStack style={SignUpFormStyleSheet.SignUpVStack} space={5}>
        <HeadingBox message="All Notes" />
        <Searchbar />
        <ListItem data={data} />
      </VStack>
    </>
  );
}

export default AllNotes;
