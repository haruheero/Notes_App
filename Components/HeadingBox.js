import React from 'react';
import { HStack, Box, Text, Avatar } from 'native-base';
import HomePageStyle from '../StyleSheets/HomePageStyle';
import SignUpFormStyleSheet from '../StyleSheets/SignUpFormStyleSheet';

function HeadingBox({message}) {
  return (
    <>
      <HStack
        width={"100%"}
        flexDirection={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Box style={HomePageStyle.SubHeadingBox}>
          <Text style={SignUpFormStyleSheet.HeadingText}>{message}</Text>
        </Box>
        <Box style={HomePageStyle.AvatarBox}>
          <Avatar></Avatar>
        </Box>
      </HStack>
    </>
  );
}

export default HeadingBox