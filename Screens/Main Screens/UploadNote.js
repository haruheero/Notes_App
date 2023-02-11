import React, { useState } from 'react'
import { Button, ScrollView, Text, VStack} from 'native-base'
import * as DocumentPicker from 'expo-document-picker'
import ListItem from '../../Components/ListItem'
import SignUpFormStyleSheet from '../../StyleSheets/SignUpFormStyleSheet'
import { AntDesign } from "@expo/vector-icons";

function UploadNote() {

    const [myData, setMyData] = useState([])
    const pickdocument = async () => {
      let result = await DocumentPicker.getDocumentAsync({});
      setMyData([...myData, result])
    };

    return (
      <>
        <VStack style={{
          alignItems: 'center'
        }} space={3}>
          <Text style={SignUpFormStyleSheet.HeadingText}>Upload Notes</Text>
          <ListItem data={myData} />
          <Button
            onPress={pickdocument}
            style={{
              borderRadius: 100,
              backgroundColor: "#ffc529",
              shadowColor: "#171717",
              shadowOffset: { width: -2, height: 4 },
              shadowOpacity: 0.2,
              shadowRadius: 3,
              elevation: 10
            }}
          >
            <AntDesign name="plus" size={24} color="black" />
          </Button>
        </VStack>
      </>
    );
  };

export default UploadNote