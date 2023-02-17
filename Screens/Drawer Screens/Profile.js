import React from 'react'
import { VStack, Text, SectionList,Avatar, Box } from "native-base";
import HeadingBox from "../../Components/HeadingBox";
import Searchbar from "../../Components/Searchbar";
import SignUpFormStyleSheet from "../../StyleSheets/SignUpFormStyleSheet";
import SearchbarStyle from "../../StyleSheets/SearchbarStyle";

function Profile() {
  return (
    <>
      <VStack style={SignUpFormStyleSheet.SignUpVStack} space={5}>
        <HeadingBox message="Profile" />
        <Box style={{
          alignItems: "center"
        }}>
          <Avatar style={{
            size: 50
          }}/>
        </Box>
      </VStack>
    </>
  );
}

export default Profile