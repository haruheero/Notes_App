import React from 'react';
import { Button, View, Text } from "react-native";

const SignUp = ({navigation}) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Signin"
        onPress={() => navigation.navigate("Signin")}
      />
    </View>
  );
}

export default SignUp