import React from "react";
import {
  VStack,
  Button,
  Text,
  HStack,
  Heading
} from "native-base";
import SignUpForm from "../../Components/SignUpForm";
import SignUpFormStyleSheet from "../../StyleSheets/SignUpFormStyleSheet";

const SignUp = ({ navigation }) => {
  return (
    <VStack space={10} style={SignUpFormStyleSheet.SignUpVStack}>
      <SignUpForm></SignUpForm>
      <HStack style={SignUpFormStyleSheet.SignUpHStack}>
        <Text style={SignUpFormStyleSheet.SignUpHStackText}>
          Already a member?
        </Text>
        <Button
          variant="ghost"
          title="SignIn"
          onPress={() => {
            navigation.navigate("Signin");
          }}
          _text={{
            color: "#775700",
          }}
        >
          Sign In
        </Button>
      </HStack>
    </VStack>
  );
};

export default SignUp;
