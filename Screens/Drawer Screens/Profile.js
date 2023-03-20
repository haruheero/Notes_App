import React from 'react'
import { VStack, Avatar, Box, ScrollView, Button, KeyboardAvoidingView } from "native-base";
import HeadingBox from "../../Components/HeadingBox";
import SignUpFormStyleSheet from "../../StyleSheets/SignUpFormStyleSheet";
import InputField from '../../Components/InputField';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import * as DocumentPicker from 'expo-document-picker'
import SettingBoxStyle from '../../StyleSheets/SettingBoxStyle';



//Issues
// 1. Set photo
// 2. On submit redirect to Saved info page
// 3. This page visible only when edit button is clicked
// 4. Remove the side bar when on this page
// 5. Add KeyboardAwareScroll

function Profile() {

  const [formData, setFormData] = useState('')
  const inputValues = {
    firstName: useSelector(state => state.firstName),
    lastName: useSelector(state => state.lastName),
    institute: useSelector(state => state.institute),
    branch: useSelector(state => state.branch)
  }

  const onSubmit = () => {
    console.log(inputValues)
  }

  const [photo, setPhoto] = useState()
  const onView = async () => {
    let uploadPhoto = await DocumentPicker.getDocumentAsync({})
    setPhoto(uploadPhoto.uri)
  }

  return (
    <>
      <KeyboardAwareScrollView
        extraScrollHeight={100}
        enableOnAndroid={true}
        extraHeight={80} 
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <VStack style={SignUpFormStyleSheet.SignUpVStack} space={5}>
          <HeadingBox message="Profile" />
          <Box
            style={{
              alignItems: "center",
            }}
          >
            <Button style={SettingBoxStyle.hideButton} onPress={onView}>
              <Avatar size="xl" source={{ uri: photo }} />
            </Button>
          </Box>
          <InputField label="First name" />
          <InputField label="Last name" />
          <InputField label="Institute" />
          <InputField label="Branch" />
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
            Save
          </Button>
        </VStack>
      </KeyboardAwareScrollView>
    </>
  );
}

export default Profile;