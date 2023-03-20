import { Box, Button, VStack } from 'native-base';
import React, { useRef, useState } from 'react'
import PhoneInput from "react-native-phone-number-input";
import HeadingBox from '../../Components/HeadingBox';
import SignUpFormStyleSheet from '../../StyleSheets/SignUpFormStyleSheet';


//validation problem to be sorted

function PhoneNumber() {
    const [phoneNumber, setPhoneNumber] = useState('')
    const [valid, setValid] = useState(false)
    const phoneInput = useRef();

    const onSubmit = async () => {
      const checkValid = phoneInput.current?.isValidNumber()
      console.log(checkValid, phoneNumber)
    };
  return (
    <>
      <VStack style={SignUpFormStyleSheet.SignUpVStack} space={5}>
        <HeadingBox message="Change Phone Number" />
        <Box 
        style={{
            alignItems: "center",
        }}>
          <PhoneInput
            ref={phoneInput}
            defaultCode="IN"
            onChangeFormattedText={(text) => {
              setPhoneNumber(text);
            }}
            withDarkTheme
            withShadow
            autoFocus
          />
        </Box>
        <Button
          style={[
            SignUpFormStyleSheet.CreateAccButton,
            {
              alignSelf: "center",
            },
          ]}
          onPress={onSubmit}
          _text={{
            color: "black",
            fontWeight: 500,
          }}
        >
          Change phone number
        </Button>
      </VStack>
    </>
  );
}

export default PhoneNumber