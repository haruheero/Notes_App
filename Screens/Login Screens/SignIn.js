import React from "react";
import { VStack, Button } from "native-base";
import { StyleSheet } from "react-native";
import SignInForm from "../../Components/SignUpForm";

const Signin = ({ navigation }) => {
  return (
    <VStack>
      <Button
        title="SignUp"
        onPress={() => {
          navigation.navigate("Signup");
        }}
      >
        SignUp
      </Button>
    </VStack>
  );
};

const styles = StyleSheet.create({
  HeadingBox: {
    size: "lg",
    fontWeight: "600",
    color: "coolGray.800",
  },
});

export default Signin;
