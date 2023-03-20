import { Button, FormControl, Input, VStack } from 'native-base';
import React, { useState } from 'react'
import HeadingBox from '../../Components/HeadingBox';
import SignUpFormStyleSheet from '../../StyleSheets/SignUpFormStyleSheet';


function EmailSetting() {

const [email, setEmail] = useState("");

const onSubmit = async () => {
    console.log("Submitted", email);
  };
    
  return (
    <>
      <VStack style={SignUpFormStyleSheet.SignUpVStack} space={5}>
        <HeadingBox message="Change email" />
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
            onChangeText={(value) => setEmail(value)}
          />
        </FormControl>
        <Button
          style={[SignUpFormStyleSheet.CreateAccButton, {
            alignSelf: "center"
          }]}
          onPress={onSubmit}
          _text={{
            color: "black",
            fontWeight: 500,
          }}
        >
          Change email
        </Button>
      </VStack>
    </>
  );
}

export default EmailSetting