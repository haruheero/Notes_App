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
        <ScrollView>
          <VStack
            style={[
              SignUpFormStyleSheet.SignUpVStack,
              {
                margin: "1%",
              },
            ]}
            space={5}
          >
            <HeadingBox message="All Notes" />
            <Searchbar />
            <ListItem data={myData} />
            <Box
              style={{
                alignItems: "center",
              }}
            >
              <Button
                onPress={pickdocument}
                style={{
                  borderRadius: 100,
                  backgroundColor: "#ffc529",
                  shadowColor: "#171717",
                  shadowOffset: { width: -2, height: 4 },
                  shadowOpacity: 0.2,
                  shadowRadius: 3,
                  elevation: 10,
                }}
              >
                <AntDesign name="plus" size={24} color="black" />
              </Button>
            </Box>
          </VStack>
        </ScrollView>
      </>
    );
  };

export default UploadNote