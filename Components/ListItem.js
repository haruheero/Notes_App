import React from 'react'
import { FlatList, Box, Text, HStack, Image } from "native-base";
import { AntDesign } from "@expo/vector-icons";
import SignUpFormStyleSheet from '../StyleSheets/SignUpFormStyleSheet';
import ListItemStyle from '../StyleSheets/ListItemStyle';
import image from '../Images/undraw_Add_notes_re_ln36.png'

function ListItem({data}) {
  return (
    <>
      <FlatList
        style={{
          width: "100%",
        }}
        data={data}
        ListEmptyComponent={() => (
          <>
          <Image
          source={image}
          alt='photo'
          />
          </>
        )}
        renderItem={({ item }) => (
          <>
            <Box style={ListItemStyle.boxSuper}>
              <HStack style={SignUpFormStyleSheet.SignUpHStack}>
                <Box style={ListItemStyle.boxLeft}>
                  <AntDesign name="filetext1" size={24} color="black" />
                </Box>
                <Box style={ListItemStyle.boxRight}>
                  <Text style={SignUpFormStyleSheet.SignUpHStackText}>
                    {item.name}
                  </Text>
                </Box>
              </HStack>
            </Box>
          </>
        )}
      ></FlatList>
    </>
  );
}

export default ListItem