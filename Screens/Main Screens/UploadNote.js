import React, { useState } from 'react'
import { Button, ScrollView, Text, VStack, Box} from 'native-base'
import * as DocumentPicker from 'expo-document-picker'
import ListItem from '../../Components/ListItem'
import SignUpFormStyleSheet from '../../StyleSheets/SignUpFormStyleSheet'
import { AntDesign } from "@expo/vector-icons";
import Searchbar from "../../Components/Searchbar";
import HeadingBox from "../../Components/HeadingBox";

function UploadNote() {

    const [myData, setMyData] = useState([])
    const pickdocument = async () => {
      let result = await DocumentPicker.getDocumentAsync({});
      setMyData([...myData, result])
    };

    return (
      <>
          <VStack
            style={[
              SignUpFormStyleSheet.SignUpVStack,
              {
                flex: 1,
              },
            ]}
          >
            <HeadingBox message="Upload Notes" />
            <Searchbar />
            <ListItem data={myData} />
              <Button
                onPress={pickdocument}
                style={{
                  borderRadius: 50,
                  backgroundColor: "#ffc529",
                  elevation: 10,
                  position: "absolute",
                  height: 50,
                  width: 50,
                  alignSelf: 'center',
                  bottom: 15
                }}
              >
                <AntDesign name="plus" size={24} color="black" />
              </Button>
          </VStack>
      </>
    );
  };

export default UploadNote