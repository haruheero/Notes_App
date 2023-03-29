import React, { useState, useEffect } from 'react'
import { Button, FormControl, Input, VStack, Text, Icon, Pressable } from 'native-base'
import SignUpFormStyleSheet from '../StyleSheets/SignUpFormStyleSheet'
import { MaterialIcons } from "@expo/vector-icons";
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import app from '../firebaseConfig';


function SignUpForm() {

  // useEffect(() => {
    const auth = getAuth(app);
  // }, [])
  

  const [formData, setData] = useState({
    name: '',
    emailID: '',
    password: '',
  })
  const [errors, setErrors] = useState({});
  const [show, setShow] = useState(false);

  const onSubmit = async () => {
    createUserWithEmailAndPassword(auth, formData.emailID, formData.password)
      .then((userCredential) => {
        console.log(userCredential.user)
      })
      .catch((error) => {
        console.log(error.code, error.message)
      });
  }
  const validationEmail = async () => {
    let reg =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(reg.test(formData.emailID)) {
      return true;
    }
    else {
      setErrors({ ...errors, emailID: "Invalid email" });
      return false;
    }
  }
  //validate password

  //Rules:
  // 1. Password atleast 8 characters long
  // 2. A combination of uppercase, lowercase, numbers and special characters

  const validationPassword = async () => {
    let reg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=]).{8,}$/;
    if(reg.test(formData.password)) {
      return true;
    }
    else {
      setErrors({ ...errors, password: "Invalid password" });
      return false;
    }
  } 
  
  return (
    <>
      <VStack style={SignUpFormStyleSheet.VStackStyle} space={3}>
        <Text style={SignUpFormStyleSheet.HeadingText}>Create account</Text>
        <Text style={SignUpFormStyleSheet.HeadingSubText}>
          SignUp to get all latest notes
        </Text>
        {/* Name (Any combination of letters/numbers/special characters allowed)*/}
        <FormControl>
          <FormControl.Label
            _text={{
              fontSize: "lg",
              color: "black",
            }}
          >
            Name
          </FormControl.Label>
          <Input
            borderBottomColor="#775700"
            variant="underlined"
            name="Name"
            onChangeText={(value) => setData({ ...formData, name: value })}
          />
        </FormControl>

        {/* Email */}
        <FormControl>
          <FormControl.Label
            _text={{
              fontSize: "lg",
              color: "black",
            }}
          >
            Email Id
          </FormControl.Label>

          <Input
            borderBottomColor="#775700"
            variant="underlined"
            name="emailID"
            onChangeText={(value) => setData({ ...formData, emailID: value })}
          />
        </FormControl>

        {/* Password */}
        <FormControl>
          <FormControl.Label
            _text={{
              fontSize: "lg",
              color: "black",
            }}
          >
            Password
          </FormControl.Label>
          <Input
            variant="underlined"
            borderBottomColor="#775700"
            name="password"
            type={show ? "text" : "password"}
            InputRightElement={
              <Pressable onPress={() => setShow(!show)}>
                <Icon
                  as={
                    <MaterialIcons
                      name={show ? "visibility" : "visibility-off"}
                    />
                  }
                  size={5}
                  mr="2"
                  color="muted.400"
                />
              </Pressable>
            }
            onChangeText={(value) => setData({ ...formData, password: value })}
          />
          <FormControl.HelperText>
            Password atleast 8 characters long
          </FormControl.HelperText>
          <FormControl.HelperText>
            A combination of uppercase, lowercase, numbers and special
            characters
          </FormControl.HelperText>
        </FormControl>
        <Text style={SignUpFormStyleSheet.PrivacyPolicyStyle}>
          By continuing, you agree to our Terms of Service and Privacy policy.
        </Text>
        <Button
          style={SignUpFormStyleSheet.CreateAccButton}
          onPress={onSubmit}
          _text={{
            color: "black",
            fontWeight: 500,
          }}
        >
          Create account
        </Button>
      </VStack>
    </>
  );
}

export default SignUpForm