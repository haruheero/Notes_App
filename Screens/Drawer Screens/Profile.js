import React from 'react'
import { VStack, Text, SectionList,Avatar, Box, ScrollView } from "native-base";
import HeadingBox from "../../Components/HeadingBox";
import SignUpFormStyleSheet from "../../StyleSheets/SignUpFormStyleSheet";
import InputField from '../../Components/InputField';
import { useState } from 'react';

function Profile() {

  const [formData, setFormData] = useState('')

  return (
    <>
      <ScrollView>
        <VStack style={SignUpFormStyleSheet.SignUpVStack} space={5}>
          <HeadingBox message="Profile" />
          <Box
            style={{
              alignItems: "center",
            }}
          >
            <Avatar size="xl" />
          </Box>
          <InputField label="First name" />
          <InputField label="Last name" />
        </VStack>
      </ScrollView>
    </>
  );
}

export default Profile