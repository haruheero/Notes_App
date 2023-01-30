import React from "react";
import { Button, View, Text } from "native-base";

const ForgotPassword = ({ navigation }) => {
  return (
    <View>
      <Text>ForgotPasword</Text>
      <Button
        title="Go Back"
        onPress={() => navigation.goBack()}
      >Go back</Button>
    </View>
  );
};

export default ForgotPassword;
