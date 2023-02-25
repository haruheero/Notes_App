import React from "react";
import { HStack, Box, Button, Text, Avatar } from "native-base";
import HomePageStyle from "../StyleSheets/HomePageStyle";
import SignUpFormStyleSheet from "../StyleSheets/SignUpFormStyleSheet";
import { useNavigation, DrawerActions } from "@react-navigation/native";
function HeadingBox({ message }) {
  const nav=useNavigation();
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
          <Button
          style={{
            borderRadius: 50,
            height: 30,
            width: 30,
          }}
            onPress={() => {
              nav.dispatch(DrawerActions.toggleDrawer());
            }}
          >
            <Avatar></Avatar>
          </Button>
        </Box>
      </HStack>
    </>
  );
}

export default HeadingBox;
