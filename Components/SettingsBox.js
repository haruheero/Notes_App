import React from "react";
import { Box, HStack, Button, Text } from "native-base";
import SettingBoxStyle from "../StyleSheets/SettingBoxStyle";
import SignUpFormStyleSheet from "../StyleSheets/SignUpFormStyleSheet";
import ProductBoxStyle from "../StyleSheets/ProductBoxStyle";
import { AntDesign } from "@expo/vector-icons";

const SettingsBox = ({label, icon}) => {
    return (
      <>
        <Box
          style={[
            {
              width: "100%",
            },
            SettingBoxStyle.boxBackground,
          ]}
        >
          <HStack width={"100%"}>
            <Box
              style={{
                width: "20%",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {icon}
            </Box>
            <Box
              style={{
                width: "60%",
              }}
            >
              <Text style={ProductBoxStyle.TextStyle}>{label}</Text>
            </Box>

            <Button style={SettingBoxStyle.buttonBox}>
              <AntDesign name="rightcircleo" size={24} color="black" />
            </Button>
          </HStack>
        </Box>
      </>
    );
}

export default SettingsBox

