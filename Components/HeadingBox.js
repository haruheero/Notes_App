import React from "react";
import { HStack, Box, Button, Text, Avatar } from "native-base";
import HomePageStyle from "../StyleSheets/HomePageStyle";
import SignUpFormStyleSheet from "../StyleSheets/SignUpFormStyleSheet";
import { useNavigation, DrawerActions } from "@react-navigation/native";
import SettingBoxStyle from "../StyleSheets/SettingBoxStyle";
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
          style={SettingBoxStyle.hideButton}
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
